//Install React
import React, { Component } from 'react';
import ReactDom from 'react-dom';

import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBQ-W90YAsV66Q4STWg4kHHLti_nPTvvmE';




class App extends Component {
  constructor(props){
    super(props);

    this.state = {videos: []};

      YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({videos});

      });


  }

  render() {
  return (
    <div>
    <SearchBar />
    <VideoDetail video = {this.state.videos[0]} />
    <VideoList videos = {this.state.videos} />
    </div>
  )
}
}

ReactDom.render(<App />, document.querySelector('.container'));
