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

    const navItems = [
        { label: 'About', path: '/about' },
        { label: 'Events', path: '/events' },
        { label: 'Artworks', path: '/artwork' },
        { label: 'Merch', path: '/merch' },
        { label: 'History', path: '/history' },
      ];
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
            <h2 class="text-3xl text-white text-right pr-32 pt-6 ">Manipal</h2>
            <div class="absolute top-96 flex-wrap flex flex-col md:flex-row w-screen items-center justify-evenly">
                {navItems.map((item, index) => (
                    <div class="p-2">
                    <button
                        key={index}
                        class="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-xl font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-700 hover:bg-opacity-80 hover:animate-bounce"
                        >
                        <Link to={item.path}>{item.label}</Link>
                    </button>
                    </div>
                ))}
            </div>
        </div>
    )

}

export default MainPage