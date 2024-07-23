import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {


  const {gif, loading, fetchData} = useGif();


  return (
    <div className='w-4/6 bg-indigo-950 rounded-lg  border-indigo-800 border-4
    flex flex-col items-center gap-y-8 mt-[15px]'>

      <h1 className='mt-8 text-green-500 text-3xl  uppercase font-bold'> A Random Gif</h1>

    {
        loading ? (<Spinner/>) : (<img className='border-white border-4' src= {gif} width="450" />)
    }

      

      <button onClick={() => fetchData()}
      className="w-3/12 bg-green-500 text-lg py-3 rounded-lg mb-[20px] text-white hover:bg-green-600 font-bold">

       Generate

      </button>

    </div>
  )
}

export default Random
