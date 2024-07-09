"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Button from "@/components/Button/Button";
import {  Cursor, useTypewriter } from 'react-simple-typewriter'


export default function Home() {
 

  const [text] = useTypewriter({
    words: ['I am Abdur Rahman', 'I am Professional ','Digital Marketer', 'I am SEO Expert','I am Wordpress Developer','I am Facebook Marketer'],
    loop: 0,
    onLoopDone: () => console.log(`loop completed after 3 runs.`)
  })
  return (
    <div className={styles.container}>
      <div className={styles.item}>
       
       
        <h1 className='text-xl lg:text-3xl font-extrabold mt-20 lg:mt-8 ' >Hey There  { ''}
            <span className='text-gradient text-xl lg:text-3xl font-extrabold' style={{fontWeight:'bold',}}>{text}</span>
           <span className='text-3xl text-sky-600'>
           <Cursor cursorStyle='//' />
           </span>
           </h1>
  
      
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button url="/portfolio" text="See Our Works"/>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img} />
      </div>
    </div>
  );
}
