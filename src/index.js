import React, { useState } from 'react';

import ReactDOM from 'react-dom';

// These imports won't work until you fix ./components/index.js
import {
  Feature,
  Loading,
  Preview,
  Search,
  Title
} from './components';

const App = () => {
  const [searchResults, setSearchResults] = useState({info: {}, records: []} );
  const [featureResult, setFeaturedResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);


  return <div className="app">
    <Title />
    <Search  setIsLoading = {setIsLoading} setSearchResults={setSearchResults}/> 
    <Preview searchResults={searchResults} setFeaturedResult={setFeaturedResult} setIsLoading = {setIsLoading} setSearchResults = {setSearchResults}/> 
    <Feature featureResult={featureResult} setIsLoading = {setIsLoading} setSearchResults= {setSearchResults}/> 
    {isLoading ? <Loading  />  : null} 
  </div>
}


ReactDOM.render(<App />, document.querySelector('#app'))

