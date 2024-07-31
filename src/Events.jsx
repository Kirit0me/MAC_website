import Navigation_Bar from './navigation_bar';
import { motion } from "framer-motion";

import roonil from "./img/roonil_ttt.webp"
import kiri from "./img/kiri_ttt.webp"
import dl from "./img/dl_ttt.webp"

import sf1 from "./img/creep.jpg"
import sf2 from "./img/rigzensux.jpg"
import sf3 from "./img/lucky.jpg"

import ani1 from "./img/mnoticed.jpg"
import ani2 from "./img/macsens.jpg"
import ani3 from "./img/swish.jpg"

import pp1 from "./img/pp1.jpg"
import pp2 from "./img/pp2.jpg"
import pp3 from "./img/pp3.jpg"

import maid from "./img/maidfuku.jpg"

function Events() {
    return (
        <div className="bg-kirito bg-cover h-screen overflow-scroll scrollbar-hide">
            <Navigation_Bar />
            <div className="pt-16">
            <h1 className="text-6xl text-center p-6 text-white">2024 Events</h1>
            <motion.div
                    variants={{ offscreen: {
                        x: "-100%" ,
                        opacity: 0
                      },
                      onscreen: {
                            opacity: 1,
                            x: 0
                        }
                      }}
                    initial="offscreen"
                    whileInView="onscreen"
                    transition={{duration: 0.5, delay: 0.25, type: "spring"}} className="pb-24">
                <h1 className="text-3xl font-semibold p-6 pl-24"><span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-400">Terrible Takes Thursday</span></h1>
                <div className="p-4 grid grid-cols-1 gap-4 md:grid-cols-2 text-white">
                    <div className="hiddenl p-6 bg-slate-900 rounded-3xl border-2 border-slate-400 text-lg">
                        
                        <div className="flex flex-row items-center justify-center h-full">  
                        Some takes are trash, but the takes here are just terrible! Presenting you the TTT!
                        </div>
                    </div>
                    <div className="flex justify-evenly flex-wrap">
                        <img 
                            src={kiri}
                            className="object-cover mx-auto rounded-3xl w-1/3  items-center content-center justify-center object-center  p-4"
                            onClick={() => window.location.href = "https://www.instagram.com/p/C1HkRePvT1T/?img_index=2"}> 
                        </img>
                        <img 
                            src={roonil}
                            className="mx-auto rounded-3xl w-1/3  items-center content-center justify-center object-center object-cover p-4"
                            onClick={() => window.location.href = "https://www.instagram.com/p/C1qfTXCvqAA/"}>
                        </img>
                        <img 
                            src={dl}
                            className="mx-auto rounded-3xl w-1/3  items-center content-center justify-center object-center object-cover p-4"
                            onClick={() => window.location.href = "https://www.instagram.com/p/C2OuzE-PZpZ/"}>
                        </img>        
                    </div>
                </div>
            </motion.div>
            <motion.div
                    variants={{ offscreen: {
                        x: "-100%" ,
                        opacity: 0
                      },
                      onscreen: {
                            opacity: 1,
                            x: 0
                        }
                      }}
                    initial="offscreen"
                    whileInView="onscreen"
                    transition={{duration: 0.5, delay: 0.25, type: "spring"}} className="pb-24">
                <h1 className="text-3xl font-semibold p-6 pl-24"><span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-400">Shonen Fest</span></h1>
                <div className="p-4 grid grid-cols-1 gap-4 md:grid-cols-2 text-white">
                    <div className = "hiddenl p-6 bg-slate-900 rounded-3xl border-2 border-slate-400 text-lg h-full">
                        <div className="flex flex-row items-center justify-center h-full">
                        Our flagship event. Held during 26th to 28th January 2024. We have Events like Weeb feud, Jeopardy in anime style gameshows. We also have a fighting tourney and pokemon showdown. For the writers out there, we have Isekai Story Writing event! Its for all the types of weebs out there, do check it out.
                        </div>
                    </div>
                    <div className="flex justify-evenly flex-wrap">
                        <img 
                            src={sf1}
                            className="mx-auto rounded-3xl w-1/3 items-center content-center justify-center object-center object-cover p-4"></img>
                        <img 
                            src={sf2}
                            className="mx-auto rounded-3xl w-1/3  items-center content-center justify-center object-center object-cover p-4"></img>
                        <img 
                            src={sf3}
                            className="mx-auto rounded-3xl w-1/3  items-center content-center justify-center object-center object-cover p-4"></img>       
                    </div>
                </div>
            </motion.div>
            <motion.div
                    variants={{ offscreen: {
                        x: "-100%" ,
                        opacity: 0
                      },
                      onscreen: {
                            opacity: 1,
                            x: 0
                        }
                      }}
                    initial="offscreen"
                    whileInView="onscreen"
                    transition={{duration: 0.5, delay: 0.25, type: "spring"}} className="pb-24">
                <h1 className="text-3xl font-semibold p-6 pl-24"><span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-400">Animania</span></h1>
                <div className="p-4 grid grid-cols-1 gap-4 md:grid-cols-2 text-white">
                    <div className="hiddenl p-6 bg-slate-900 rounded-3xl border-2 border-slate-400 text-lg">
                        
                        <div className="flex flex-row items-center justify-center h-full">
                        Consists of two events, Chuunin Exams and Squid Games. 
                        As the names suggest, It's a competition of who comes out on the top. 
                        In Chuunin exams we had a written test on anime, a hunter tag across AB2, finishing the last round with a treasure hunt based on clues from animes.
                        In Squid games, we had the classic Red-Green light and Tug of War, but ended with a game of snake and ladders to come out on top as the sole survivor of this legendary game.
                        </div>
                    </div>
                    <div className="flex justify-evenly flex-wrap">
                        <img 
                            src={ani1}
                            className="mx-auto rounded-3xl w-1/3  items-center content-center justify-center object-center object-contain p-4"></img>
                            <img 
                            src={ani2}
                            className="mx-auto rounded-3xl w-1/3  items-center content-center justify-center object-center object-contain p-4"></img>
                            <img 
                            src={ani3}
                            className="mx-auto rounded-3xl w-1/3  items-center content-center justify-center object-center object-contain p-4"></img>        
                    </div>
                </div>
            </motion.div>
            <motion.div
                    variants={{ offscreen: {
                        x: "-100%" ,
                        opacity: 0
                      },
                      onscreen: {
                            opacity: 1,
                            x: 0
                        }
                      }}
                    initial="offscreen"
                    whileInView="onscreen"
                    transition={{duration: 0.5, delay: 0.25, type: "spring"}} className="pb-24">
                <h1 className="text-3xl font-semibold p-6 pl-24"><span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-400">Panel Progression</span></h1>
                <div className="p-4 grid grid-cols-1 gap-4 md:grid-cols-2 text-white">
                    <div className = "hiddenl p-6 bg-slate-900 rounded-3xl border-2 border-slate-400 text-lg">
                        
                    <div className="flex flex-row items-center justify-center h-full">
                    In Panel Progression(PP), we take some of our handpicked favourite mangas that we've read in recent times which don't yet have an anime adaptation and give a brief summary to attract viewers into picking up these amazing titles.                        </div>
                    </div>
                    <div className="flex justify-evenly flex-wrap">
                        <img 
                            src={pp1}
                            className="mx-auto rounded-3xl w-1/3 items-center content-center justify-center object-center object-cover p-4"></img>
                        <img 
                            src={pp2}
                            className="mx-auto rounded-3xl w-1/3  items-center content-center justify-center object-center object-cover p-4"></img>
                        <img 
                            src={pp3}
                            className="mx-auto rounded-3xl w-1/3  items-center content-center justify-center object-center object-cover p-4"></img>       
                    </div>
                </div>
            </motion.div>
            
            <motion.div
                    variants={{ offscreen: {
                        x: "-100%" ,
                        opacity: 0
                      },
                      onscreen: {
                            opacity: 1,
                            x: 0
                        }
                      }}
                    initial="offscreen"
                    whileInView="onscreen"
                    transition={{duration: 0.5, delay: 0.25, type: "spring"}} className="pb-24">
                <h1 className="text-3xl font-semibold p-6 pl-24"><span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-400">Maid Cafe</span></h1>
                <div className="p-4 grid grid-cols-1 gap-4 md:grid-cols-2 text-white">
                    <div className = "hiddenl p-6 bg-slate-900 rounded-3xl border-2 border-slate-400 text-lg">
                        
                    <div className="flex flex-row items-center justify-center h-full">
                        Ehehe, We serve at a restaurant to our goshujin-sama in cosplay! (Coming soon)
                    </div>
                    </div>
                    <div className="flex justify-evenly flex-wrap">
                        <img 
                            src={maid}
                            className="mx-auto rounded-3xl w-1/3  items-center content-center justify-center object-center object-cover p-4"></img>
                            <img 
                            src={maid}
                            className="mx-auto rounded-3xl w-1/3  items-center content-center justify-center object-center object-cover p-4"></img>
                            <img 
                            src={maid}
                            className="mx-auto rounded-3xl w-1/3  items-center content-center justify-center object-center object-cover p-4"></img>
                    </div>
                </div>
            </motion.div>

            </div>
        </div>
    )
}

export default Events
