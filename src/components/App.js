import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";


class App extends React.Component {
	//setup videos state property with inital empty array and selected video to null
	state = { videos: [], selectedVideo: null };

    //setup default video upon search
    componentDidMount() {
        this.onTermSubmit("buildings");
    }

	//callback function for search request
	onTermSubmit = async (term) => {
		const response = await youtube.get(
			"/search", //setup api request
			{
				params: { q: term },
			}
		);
		//update the state of videos with the results of the test
		this.setState({
			videos: response.data.items,
			selectedVideo: response.data.items[0],
		});
	};

	//create callback function to handle playing back selected videos
	onVideoSelect = (video) => {
		this.setState({ selectedVideo: video });
	};

	render() {
		return (
			<div className="ui container">
				{/* call SearchBar with onFormSubimt callback function as pararmeter */}
				<SearchBar onFormSubmit={this.onTermSubmit} />
				{/* call VideoDetails with selected video data stored in video*/}
				<div className="ui grid">
					<div className="ui row">
						<div className="eleven wide column">
							<VideoDetail video={this.state.selectedVideo} />
							{/* call VideoList with onVideoSelect callback and current videos as parameters*/}
						</div>
						<div className="five wide coloumn">
							<VideoList
								onVideoSelect={this.onVideoSelect}
								videos={this.state.videos}
							/>
							{/* tells you how many videos have been searched for */}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
