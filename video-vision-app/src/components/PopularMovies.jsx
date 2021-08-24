import React , { useState , useEffect }from 'react';
import ForYouList from './ForYouList';
import '../styles/popularmovies.css'

function PopularMovies(props) {

      const [popular,setPopular] =useState([]);

      const fetchPopular = () =>{
            fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_TMBD_KEY}&language=en-US`)
      

            
            .then((res) => res.json())
            .then((data) =>{
                  
                        
      
                        setPopular(data.results);
                        
                        
                 
            });
        
            
      }

      useEffect(() =>{
            fetchPopular();
      },[])
      return (
            <div>
                  <h1 className='popular-name'>Popular Movies</h1>
                  <div className='popular'> 
              {popular && popular.map((popular)=>(<ForYouList key={popular.id} id={popular.id} poster={popular.poster_path} title={popular.title} date={popular.release_date} />) )}   </div>  
            </div>
      );
}

export default PopularMovies;