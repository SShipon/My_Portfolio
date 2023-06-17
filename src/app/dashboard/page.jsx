'use client'
import React from 'react';
import useSWR from 'swr'

//const fetcher = (...args) => fetch(...args).then((res) => res.json())
 
const page = () => {

  //const { data, error } = useSWR('/api/profile-data', fetcher)
 
  //if (error) return <div>Failed to load</div>
  //if (!data) return <div>Loading...</div>

  
  return (
    <div>
      <h2 className='text-5xl text-center'>this is hllo</h2>
       
    </div>
  );
};

export default page;