import './App.css';
import Header from './components/Header';
import { useState, useEffect } from 'react';





function App() {

  const [movies,setMovies] = useState ("");
  

  return (
    <div>
      

    <Header/>
    </div>
  );
}

export default App;
