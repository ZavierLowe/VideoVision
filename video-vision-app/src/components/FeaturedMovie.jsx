import React from 'react';
import '../styles/featuredmovie.css'
import ReactPlayer from 'react-player';

function FeaturedMovie() {
      return (
            <div className="featured-movie">
                 
            

<iframe
className='featured-video' 
width="100%" 
height="100%" 
src="https://www.youtube.com/embed/wuIbeQv3v7c?controls=0&autoplay=1&mute=1&loop=1&start=16" 
title="YouTube video player" 
frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; " 
allowfullscreen></iframe>
             <div className='featured-mediabg'>
                   <div className='featured-container'>
                         <div classname='featured-mv'>Featured Movie</div>
                         <div className='featured-title'>Dragon Ball Super: Broly</div>
                         <div className='featured-buttons'>
                               <div className='playbtn'>
                                     <i className='fas fa-play'/>
                               </div>
                               <div className='featured-info'>More Info</div>
                         </div>
                   </div>
            </div> 
            </div>
      );
}

export default FeaturedMovie;