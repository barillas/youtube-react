//Install React
import React from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyBQ-W90YAsV66Q4STWg4kHHLti_nPTvvmE';

//Create a new component. //This component should produce some HTML

const App = () => {
  return (
    <SearchBar />
  )
}

//Take this component's generated HTMl and put it on the page // In the DOM

ReactDom.render(<App />, document.querySelector('.container'));
