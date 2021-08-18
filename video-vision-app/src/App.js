import './App.css';
import Header from './components/Header';
import { useState, useEffect } from 'react';





function App() {

  const url = "https://api.themoviedb.org/3"

  fetch(
    `${url}/search/movie/`
  )

  return (
    <div>
      

    <Header/>
    </div>
  );
}

export default App;
