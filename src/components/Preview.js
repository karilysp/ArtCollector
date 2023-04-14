import React from 'react';
import { fetchQueryResultsFromURL } from '../api';

const Preview = (props) => {
  const {setSearchResults, setFeaturedResult, setIsLoading, searchResults} = props;

  const info = searchResults.info
  const records = searchResults.records


  async function fetchPage(pageUrl) {
    setIsLoading(true);

    try {
      const results = await fetchQueryResultsFromURL(pageUrl);
      setSearchResults(results);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return <aside id="preview">
    <header className="pagination">
      <button 
        disabled={!info.prev} 
        className="previous"
        onClick={() => fetchPage(info.prev)}>Previous</button>
      
      <button
        disabled={!info.next}
        className="next"
        onClick={() => fetchPage(info.next)}>Next</button>
    </header>
    <section className="results">
      { records.map((record, index) => (
            <div 
            key ={index}
            className = "object-preview"
            onClick= {(event) => {
              event.preventDefault();
              setFeaturedResult(record);
            
            }} >
              <a href = '#'>
            {record.primaryimageurl ? <img src={record.primaryimageurl} alt={record.description} /> : null }
            {record.title ? <h3>{record.title}</h3> : <h3>MISSING INFO</h3> }
              </a>
           </div>
      ))
      
            }
          
    </section>
  </aside>
}


export default Preview;