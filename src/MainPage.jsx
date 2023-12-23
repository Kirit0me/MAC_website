import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import img1 from '/src/img/frieran.jpg'
import img2 from '/src/img/spotlight.jpg'
import img3 from '/src/img/379.jpg'

function MainPage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [img1, img2, img3]; 
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2000); 
  
      return () => {
        clearInterval(intervalId); 
      };
    }, [images.length]);
    return (
        <div class="relative h-screen">
             {images.map((image, index) => (
        <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
                index === currentIndex ? 'opacity-20' : 'opacity-0'
            }`}
            style={{
                backgroundImage: `url(${image})`,
            }}
            ></div>
        ))}
            <div class="p-2"><img src="/mac.png" class="h-12 w-12"></img></div>
            <h1 class="text-7xl text-white text-center pt-20 ">
                THE 
                <span class="md:hidden"> MAC</span>
                 <span class="hidden md:inline"><b> MANGA </b>AND <b>ANIME</b> CLUB</span>
            </h1>
            <h2 class="text-3xl text-white text-right pr-36 pt-6 ">Manipal</h2>
            <div class="absolute p-4 top-96 flex-wrap flex w-screen items-center justify-evenly">
                <button
                class="rounded border-2 p-6 border-neutral-50 px-7 pb-[8px] pt-[10px] text-xl font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-700 hover:bg-opacity-80 hover:text-neutral-100 hover:animate-bounce focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 ">
                <Link to='/about'>About</Link>
                </button>
                <button
                class="rounded border-2 p-6 border-neutral-50 px-7 pb-[8px] pt-[10px] text-xl font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-700 hover:bg-opacity-80 hover:text-neutral-100 hover:animate-bounce focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 ">
                <Link to='/events'>Events</Link>
                </button>
                <button
                class="rounded border-2 p-6 border-neutral-50 px-7 pb-[8px] pt-[10px] text-xl font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-700 hover:bg-opacity-80 hover:text-neutral-100 hover:animate-bounce focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200">
                <Link to='/artwork'>Artworks</Link>
                </button>
                <button
                class="rounded border-2 p-6 border-neutral-50 px-7 pb-[8px] pt-[10px] text-xl font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-700 hover:bg-opacity-80 hover:text-neutral-100 hover:animate-bounce focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200">
                <Link to='/merch'>Merch</Link>
                </button>
                <button
                class="rounded border-2 p-6 border-neutral-50 px-7 pb-[8px] pt-[10px] text-xl font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-700 hover:bg-opacity-80 hover:text-neutral-100 hover:animate-bounce focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200">
                <Link to='/history'>History</Link>
                </button>
            </div>
        </div>
    )

}

export default MainPage