import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

class App extends React.Component {
    //setup videos state property
    state = { videos: [] };
    //callback function for search request
	onTermSubmit = async (term) => {
		const response = await youtube.get(
			"/search", //setup api request
			{
				params: { q: term },
			}
        );
        //update the state of videos with the results of the test
        this.setState({ videos: response.data.items });

        
	};

	render() {
		return (
			<div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                I have {this.state.videos.length} videos. {/* tells you how many videos have been searched for */}
			</div>
		);
	}
}

export default App;
