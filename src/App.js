import './App.css';
import { Routes, Route, HashRouter } from 'react-router-dom';
import FrontPage from './Components/FrontPage/FrontPage';
import { Fragment, useEffect, useState } from 'react';
import CaverPage from './Components/CaverPage/CaverPage';
import SingleOne from './Components/SingleOne/SingleOne';
import Papa from "papaparse";

function NotFound() {
  return <h2>Ресурс не найден</h2>;
}

function App() {
  const [data, setData] = useState({});
  const [songError, setSongError] = useState('');
  // const [isSongsLoading, setisSongsLoading] = useState(true)
  const urlParse =  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTV7VS1qkFVfywCIu0hVQe8e9b37Dvx-IVYYeZi-wr5ZmbPodGRux2dyus908PwUYn3n0zaajL8AxOF/pub?output=csv";

useEffect (() => {
  Papa.parse(urlParse,
     {
      download: true,
      header: true,
      complete: (results) => {
        setData(results.data)
      },
      skipEmptyLines: true,
      error: (error) => {
        console.error(error);
        setSongError(error)
    }
    })
    }, [])
   
    const tributes = Array.from(data);
       return (
       <Fragment>
        <HashRouter>
           <Routes>
          <Route exact path="/" element={<FrontPage />} />
          <Route path="/cavers" element={<CaverPage songs = {tributes} songError = {songError}/>} />
          {/* <Route path="/cavers" element={<Cavers isSongsLoading = {isSongsLoading} songs = {songs}/>} /> */}
          
          <Route path='/cavers/:id' element={<SingleOne songs = {tributes} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </HashRouter>
      
    </Fragment>
     
   
  );
}

export default App;
