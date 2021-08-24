import React from 'react';
import '../styles/moviegeners.css'
import Overview from './Overview';
import { Link } from 'react-router-dom'


function MediaGeners({id , poster, title, date, media_type, }) {

      // console.log({poster});
      

      return (
            <div>
                  
                  <div className='main-media' >
                        <img src={`https://image.tmdb.org/t/p/w400/${poster}`} alt='alt poster' className='image'/>
                        <h2 className='media-row'>{title}</h2>
                        <h3 className='date'>{date}</h3>
                        
                        
                  </div>
                  
                              
                              
                      
                        
                        
                       
                  

                 


                 
                  
                  
                 
                  
            </div>
      );
}

export default MediaGeners;