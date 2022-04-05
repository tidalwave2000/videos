import React from "react";

import "./VideoItem.css";

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div> Loading...</div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
			//setup video player, title, and description for selected video
			<div>
				<div className="container">
					<div className="ui segment">
						<div className="ui embed">
							<iframe title="Video Player" src={videoSrc} />

							{/*	
								<div className="ui segment" >
									<h4 className="ui header">{video.snippet.title}</h4>
									<p>{video.snippet.description}</p>
								</div>
							*/}
						</div>
					</div>
				</div>

				<div className="ui segment">
					<h4 className="ui header">{video.snippet.title}</h4>
					<p>{video.snippet.description}</p>
				</div>
			</div>
		);
}

export default VideoDetail;