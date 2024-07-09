"use client"
import Image from "next/image";
import Hero from "public/bayazid.png";
import Button from "@/components/Button/Button";
import { Cursor, useTypewriter } from 'react-simple-typewriter';

export default function Home() {
  const [text] = useTypewriter({
    words: ['I am Abdur Rahman', 'I am Professional', 'Digital Marketer', 'I am SEO Expert', 'I am Wordpress Developer', 'I am Facebook Marketer'],
    loop: 0,
    onLoopDone: () => console.log(`loop completed after 3 runs.`)
  });

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen  ">
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2  lg:mb-0">
        <h1 className="text-xl lg:text-3xl font-extrabold mt-20 lg:mt-8">
          Hey There <span className="text-gradient text-xl lg:text-3xl font-extrabold">{text}</span>
          <span className="text-3xl text-sky-600">
            <Cursor cursorStyle="//" />
          </span>
        </h1>
        <p className="mt-4 lg:mt-8">
        I am Professional SEO Developer With wordpress Developer & facebook Marketer Skills Based on Client Desire.
        </p>
        <div className="mt-8">
        <Button url="/portfolio" text="See Our Works" className="transform transition-transform duration-300 hover:scale-105 hover:bg-blue-600" />
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
        <div className="w-48 h-48 lg:w-96 lg:h-96 rounded-full overflow-hidden">
          <Image src={Hero} alt="Hero Image" className=" object-cover" />
        </div>
      </div>
    </div>
  );
}
