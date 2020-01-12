import React, { useState, useEffect } from 'react';

import './App.css';
import Downloads from './Components/Downloads';
import Error from './Components/Error';
import Filters from './Components/Filters';
import Images from './Components/Images';
import Loading from './Components/Loading';

const App = () => {
  const [category, setCategory] = useState();
  const [error, setError] = useState(false);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [perPage, setPerPage] = useState(10);
  const [query, setQuery] = useState('');
  const [saved, setSaved] = useState({});
  const [savedIds, setSavedIds] = useState([]);

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${
        process.env.REACT_APP_PIXABAY_API_KEY
      }&per_page=${perPage}${category ? `&category=${category}` : ''}${
        query ? `&q=${query.trim().toLowerCase()}` : ''
      }`,
      {
        method: 'GET',
      },
    )
      .then(res => res.json())
      .then(response => {
        setIsLoading(false);
        setImages(response.hits);
      })
      .catch(error => {
        setIsLoading(false);
        setError(error);
      });
  }, [query, category, perPage]);

  return (
    <div className="App-Wrapper">
      <div className="App">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <h1>Welcome to Full Beaker Image Search</h1>
            {error && <Error message={error} />}
            <div style={{ width: '100%', marginTop: '10px' }}>
              <Filters
                onSearch={setQuery}
                onSelect={setCategory}
                onPerPageChange={setPerPage}
                setIsLoading={setIsLoading}
              />
            </div>
            <div style={{ display: 'flex' }}>
              <Images
                images={images}
                onSave={data => {
                  const key = data.id;
                  const newObj = saved;
                  newObj[key] = data;
                  setSaved(newObj);
                  setSavedIds(savedIds.concat([key]));
                }}
              />
              <Downloads saved={saved} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
