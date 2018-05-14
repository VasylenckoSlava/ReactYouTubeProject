import React, { Component } from 'react';
import './App.css';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList   from './components/video_list';
import VideoDetail from './components/video_detail';
import HistoryResults from './components/history_results';
import VideoSearchPreview from "./components/video_search_preview";
const API_KEY = 'AIzaSyBLAlD6-wxTCssOU6SDuoEcTyVnAd_TAew';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        return (
            <div>
                <table className="titleBar">
                    <tbody>
                    <tr>
                        <td>
                            <img alt="app icon" width="50" src="youtube.svg" />
                        </td>
                        <td width="8"/>
                        <td>
                            <h1>YoutuBe Search</h1>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <SearchBar onSearchTermChange={(term) => this.videoSearch(term)} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}
                />
            </div>
        );
    }
}

export default App;
