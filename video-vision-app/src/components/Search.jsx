import React,{ useState ,useEffect } from 'react';
import  MovieResults   from './MovieResults';
import '../styles/search.css'




function Search({poster}){

      const [movie,setMovie] =useState("");
      const [results,setResults] = useState([]);


      const onChange = (event) =>{
            event.preventDefault();
            setMovie(event.target.value);



            
            
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMBD_KEY}&language=en-US&include_adult=false&query=${event.target.value}`)
           

            
            .then((res) => res.json())
            .then((data) =>{
                  
                        setResults(data.results);
                        // console.log(data);
                        
                 
            })
      }



      return (
            <div>
                  <form action="" className='form'>

      <input type= 'text'
name='movie'
placeholder='Search for a Movie'
className='search-input'
value={movie}
onChange={onChange}

/>
</form>
{results.length > 0 &&(
<ul className='list'> {results.map((movie =>
      <li key={movie.id} >
            <MovieResults movie={movie} poster={movie.poster_path}/>
      </li>))}</ul>
)}
                  
            </div>
      );
}
      


export default Search;