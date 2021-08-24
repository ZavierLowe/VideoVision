import './App.css';
import Header from './components/Header';
import FeaturedMovie from './components/FeaturedMovie';
import MediaGeners from './components/MediaGeners';
import MainContent from './components/MainContent';
import { Route } from 'react-router-dom';
import Overview from './components/Overview';
import ForYouList from './components/ForYouList.jsx'
import PopularMovies from './components/PopularMovies';





function App() {

 

  return (
    <div className='main'>
      

    <Header/>
    <FeaturedMovie/>
    
    
    <PopularMovies/>
    
    
    <MainContent/>
    
    </div>
  );
}

export default App;
