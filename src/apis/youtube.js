import axios from "axios";
//youTube api access key
const KEY = "AIzaSyBZyrz83-s4gKJ6bmD1I5Tf_OI6OiyNqgs";
//setup API call using axios
export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",//query video snippets
        type: "video",//query only videos not playlists
        maxResults: 5,//max amout of video per query
        key: KEY //add youTube api key
        
    }
});


