import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import img1 from '/src/img/frieran.webp'
import img2 from '/src/img/aot.webp'
import img3 from '/src/img/379.webp'
import img4 from '/src/img/lucky_star_1.webp'
import img5 from '/src/img/mikuoshi.webp'
import img6 from '/src/img/holo.webp'
import img7 from '/src/img/hyouka.webp'
import img8 from '/src/img/mikuoshi.webp'
import img9 from '/src/img/lucky_star_3.webp'
import img10 from '/src/img/yosuga.webp'
import img11 from '/src/img/oshi.webp'
import img12 from '/src/img/ai.webp'

function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

  
function MainPage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    let imgs = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];
    const [shuffledImages, setShuffledImages] = useState(shuffle(imgs));
  
    useEffect(() => {
      console.log('Component mounted or images updated');
  
      const intervalId = setInterval(() => {
        setCurrentIndex(prevIndex => {
          console.log('Updating index', prevIndex, (prevIndex + 1) % shuffledImages.length);
          return (prevIndex + 1) % shuffledImages.length;
        });
      }, 2000);
  
      return () => {
        console.log('Component unmounted');
        clearInterval(intervalId);
      };
    }, [shuffledImages]);
    const navItems = [
        { label: 'About', path: '/about' },
        { label: 'Events', path: '/events' },
        // { label: 'Artworks', path: '/artwork' },
        { label: 'Merch', path: '/merch' },
        // { label: 'History', path: '/history' },
        { label: 'Posts', path: '/posts'}
      ];
    return (
        <div className="relative h-screen">
             {shuffledImages.map((image, index) => (
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
            <div className="p-2"><img src="/mac.webp" className="h-12 w-12"></img></div>
            <h1 className="text-7xl text-white text-center pt-20 ">
                THE 
                <span className="md:hidden"> MAC</span>
                 <span className="hidden md:inline"><b> MANGA </b>AND <b>ANIME</b> CLUB</span>
            </h1>
            <h2 className="text-3xl text-white text-right pr-32 pt-6 ">Manipal</h2>
            <div className="absolute top-96 flex-wrap flex flex-col md:flex-row w-screen items-center justify-evenly">
                {navItems.map((item, index) => (
                    <div className="p-2">
                    <button
                        key={index}
                        className="backdrop-blur-xl rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-xl font-medium uppercase text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-700 hover:bg-opacity-80"
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
