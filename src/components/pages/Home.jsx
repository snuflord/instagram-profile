import {useContext, useEffect, } from 'react'
import GlobalContext from '../context/GlobalContext'
import Image from '../../Images/Image'

function Home() {

    const {image, getInstaData} = useContext(GlobalContext)

    useEffect(() => {
        // call fetch on page load
        getInstaData()
    }, [])


  return (
      
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 m-3 shadow-2xl rounded-3xl md:p-24 md:max-h-192 md:overflow-y-auto">
            <h2 className='font-bold text-2xl pb-6 text-white'>Here are your latest images:</h2>
            <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 md:overflow-y-auto'>
            {image.map((picture) => (
                <Image key={image.id} picture={picture}/>
            ))}
        </div>
      </div>
  )
}

export default Home