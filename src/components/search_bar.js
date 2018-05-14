import React, { Component } from 'react';
import VideoSearchPreview from "./video_search_preview";

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: ''};
    }

    render() {
        return (
            <div className='search-bar'>
                <input style={{
                    fontSize: 24,
                    display: 'block',
                    width: "99%",
                    paddingTop: 8,
                    paddingBottom: 8,
                    paddingLeft: 16
                }}
                    autoFocus=''
                    value={this.state.term}
                    onChange={e => this.onInputChange(e.target.value)}/>
                <VideoSearchPreview />
            </div>
        );
    }

    onInputChange(term) {
       this.setState({term});
       this.props.onSearchTermChange(term);
    }
}

export default SearchBar;