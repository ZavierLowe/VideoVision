import React from 'react';
import '../styles/search.css'

function Search(props) {
      return (
            <div>
                  <form action="">

                        <input type="text" 
                        name='movie'
                        placeholder='Search Movie'
                        className='search-input'
                        
                        />
                  </form>
            </div>
      );
}

export default Search;