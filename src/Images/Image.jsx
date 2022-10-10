import React from 'react'
import {useContext, } from 'react'
// import GlobalContext from '../context/GlobalContext'

function Image({picture: {media_url, caption}}) {


  return (
    <div className=''>
        <a href={media_url} target='_blank'>
            <img className='rounded hover:scale-105 transition-all duration-300' src={media_url} alt={caption} />
        </a>
        
        <p className='text-white pt-4'>{caption}</p>
    </div>
  )
}

export default Image