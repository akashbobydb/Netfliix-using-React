import React, {useEffect, useState} from 'react'
import axios from '../../Components/axios'
import { API_key,img_url } from '../../constants/constants'
import './Banner.css'

function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_key}&language=en-US`).then((response)=>{
      console.log(response.data);
      setMovie(response.data.results[0]) 
    })
  
    
  },[])
  
  return (
    <div
            style={{backgroundImage:`url(${movie ? img_url+movie.poster_path : ""  })`}}
     className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.original_title : null}</h1>
            <div className='movie_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='discription'>{movie ? movie.overview : null}</h1>
        </div>
        <div className="fade"></div>
    </div>
  )
}

export default Banner