import './App.css';
import { Routes, Route, HashRouter } from 'react-router-dom';
import FrontPage from './Components/FrontPage/FrontPage';
import { Fragment, useEffect, useState } from 'react';
import CaverPage from './Components/CaverPage/CaverPage';
import SingleOne from './Components/SingleOne/SingleOne';
import Papa from "papaparse";
import { Context } from './Components/context'
function NotFound() {
  return <h2>Ресурс не найден</h2>;
}

function App() {
  const [data, setData] = useState({});
  const [songError, setSongError] = useState('');
  // const [isSongsLoading, setisSongsLoading] = useState(true)
  // const value = 'My Context Value';
  const urlParse =  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSOZR0ywpoy8jQkBV1lPCrJPlbCRMgLDQD24d1xg5fM9NYSVUksjxV8I1ub2qzDhXTGn2utDVfD6hGd/pub?output=csv";

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
    const value = tributes;
       return (
       <Fragment>
        <Context.Provider value={value}>
        <HashRouter>
           <Routes>
          <Route exact path="/" element={<FrontPage />} />
          <Route path="/cavers" element={<CaverPage songs = {tributes} songError = {songError}/>} />
          {/* <Route path="/cavers" element={<Cavers isSongsLoading = {isSongsLoading} songs = {songs}/>} /> */}
          
          <Route path='/cavers/:id' element={<SingleOne songs = {tributes} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </HashRouter>
      </Context.Provider>
    </Fragment>
     
   
  );
}

export default App;
