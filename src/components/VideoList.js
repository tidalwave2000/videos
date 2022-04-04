import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({videos, onVideoSelect}) => {
    /* sort out the videos array of object into another aarraty called video where each one has its own unique key and have VideoItem list them */
    const renderedList = videos.map((video) => {
			// the variable that will hold the video array
			return (
				<VideoItem
					key={video.id.videoId}
					onVideoSelect={onVideoSelect}
					video={video}
				/>
			);
		});
    //Render List of video on screen
    return (
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
    );
}

export default VideoList;