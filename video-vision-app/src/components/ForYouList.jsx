import React from 'react';
import '../styles/foryoulist.css'


function ForYouList({title,poster}){
      return (
            <div className='foryou-list'>
                  
                  <div className='foryou-thumbnails'>
                        <div className='foryou-thumbnail'>
                              <img src={`https://image.tmdb.org/t/p/w200/${poster}`} alt = 'alt' className='foryou-img'/>
                              <h3 className='movie-title'>{title}</h3>
                             
                        </div>
                        

                  </div>
            </div>
      );
}

export default ForYouList;