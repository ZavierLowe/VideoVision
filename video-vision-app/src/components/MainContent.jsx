import React, { useEffect, useState } from 'react';
import MediaGeners from './MediaGeners';
import '../styles/maincontent.css'


function MainContent(props) {

      const [content,setContent] =useState([]);

      const fetchGenres = () =>{
            fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=28&primary_release_year=2021&api_key=${process.env.REACT_APP_TMBD_KEY}&language=en-US`)
      

            
            .then((res) => res.json())
            .then((data) =>{
                  
                        // console.log(data);
      
                        setContent(data.results);
                        
                        
                 
            });
        
            
      }

      useEffect(() =>{
            fetchGenres();
      },[])

      
      
     


      return (
            <div>
                 <h1 className='genre-name'>Action</h1>
                 <div className='genre'>
                 
                       {content && content.map((content)=>(<MediaGeners key={content.id} id={content.id} poster={content.poster_path} title={content.title} date={content.release_date} />) )}
                       
                       </div> 
            </div>
      );
}

export default MainContent;