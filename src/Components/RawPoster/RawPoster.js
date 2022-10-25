import React, { useEffect,useState } from 'react'
import './RawPoster.css'
import axios from '../../Components/axios'
import {img_url,API_key} from '../../constants/constants'
import YouTube from 'react-youtube'
function RawPoster(props) {
  const [poster,setPoster] = useState([])
  const [url,seturl]=useState("")
  useEffect(() => {
    axios.get(props.url).then(response=>{
      console.log(response.data);
      setPoster(response.data.results)
    })
  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const movieHandle=(id)=>{
    console.log(id);
    axios.get(`movie/${id}/videos?api_key=${API_key}&language=en-US`).then(response=>{
      if (response.data.results.length!==0){
        seturl(response.data.results[0])

      }else{
        console.log("404 Error");
      }
      
    })

  }
  
  return (
    <div   className='row'>
        <h2>{props.title}</h2>
        <div className= {props.isSmall ? 'smallposter' : 'posters'} >
          { 
            poster.map((obj,idx)=><div key={idx}>
              <img onClick={()=>movieHandle(obj.id)} className='poster' src={`${img_url+obj.poster_path}`} alt="poster" /></div>

            )
          }
        </div>
       {url && <YouTube opts={opts} videoId={url.key}/>} 
    </div>
  )
}

export default RawPoster