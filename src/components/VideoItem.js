import "./VideoItem.css";
import React from "react";

 
const VideoItem = ({video, onVideoSelect}) => {
    return (
        //involk event handler onClick to call onVideoSelect with video as a parameter
        <div onClick={()=> onVideoSelect(video) } className="item video-item">
				{/* setup video thumbnail for list */}
				<img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url} />
				<div className="content">
					<div className="header">
						{/* setup video title for list */}
						{video.snippet.title}
					</div>
				</div>
			</div>
		);
}
  
export default VideoItem;