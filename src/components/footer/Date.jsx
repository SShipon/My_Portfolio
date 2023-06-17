'use client'

import { useEffect, useState,  } from "react";


export default function Date() {

  // const [date, setDate] =useState()
    
    /* const getYear = () =>  setDate(new Date().getFullYear())
    console.log(getYear) */
    const user = '2023'
  
   /*  useEffect(() => {
        getYear();
    }, []) */
  return (
    <>
    <p className='text-center sm:text-1xl sm:text-2xl text-bold text-white'> &copy; All rights reserved- {user} </p>
    </>
  );
}