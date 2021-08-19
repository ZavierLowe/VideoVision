import React,{ useState } from 'react';
import '../styles/search.css'

function Search(props) {
      const [movie,setMovie] =useState("");
      const [results,setResults] = useState([]);


      const onChange = (event) =>{
            event.preventDefault();
            setMovie(event.target.value);

            fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMBD_KEY}&language=en-US&page=1&include_adult=false&query=${event.target.value}`)
            .then((res) => res.json())
            .then((data) =>{
                  if(!data.errors){
                        setResults(data.results);
                  }else{
                        setResults([])
                  }
                 
            })
      }



      return (
            <div>
                  <form action="">

                        <input type="text" 
                        name='movie'
                        placeholder='Search for a Movie'
                        className='search-input'
                        value={movie}
                        onChange={onChange}
                        
                        />
                  </form>
                  {results.length > 0 &&(
                        <ul> {results.map((movie =>
                              <li>{movie.title}</li>))}</ul>
                  )}
            </div>
      );
}

export default Search;