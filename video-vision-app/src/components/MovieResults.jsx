import React from 'react';
import '../styles/movieresults.css'
import { Link } from "react-router-dom";
import Overview from './Overview'

function MovieResults({movie , poster}) {
     
      
      return (
            <div>
                  <div className='info'> 
                  {movie.poster_path ? (<img src={`https://image.tmdb.org/t/p/w500/${poster}`} alt={`${movie.title}`} 
                  className='search-image'/>):(<div></div>)}  
                  <h3>{movie.title}</h3>
                  <h3>{movie.release_date}</h3>
                  
                  <Link to='/Overview'className='btn btn-primary' component={Overview}>Overvie</Link>
                        
                  </div>
            </div>
      );
}

export default MovieResults;