import React from "react";

class SearchBar extends React.Component {
    state = { term: "" };

    onInputChange = (event) => {
        this.setState({ term: event.target.value });

      
    
    };

    onFormSubmit = (event) => {
            
			
			//event handler for form onFormSubmit
			//evoke the arrow function to prevent an error and bind this to onSubmit
			
				event.preventDefault(); //prevents a re-render when form is submitted
				this.props.onFormSubmit(this.state.term); //allowed the child to call the parent
			};
		

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui-form">
                    <div className="field">
                        <label>Video Search  </label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;