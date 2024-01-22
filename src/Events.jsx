import Navigation_Bar from './navigation_bar';
import shouk from './img/shoukaku.webp';
import { motion } from "framer-motion";

import roonil from "./img/roonil_ttt.webp"
import kiri from "./img/kiri_ttt.webp"
import dl from "./img/dl_ttt.webp"
import Footer from './Footer';

function Events() {
    return (
        <div className="scrollbar-hide overflow-scroll">
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
                    transition={{duration: 0.5, delay: 0.25, type: "spring"}} className="">
                <h1 className="text-3xl font-semibold p-6 pl-24"><span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-400">Terrible Takes Thursday</span></h1>
                <div className="p-4 grid grid-cols-1 gap-4 md:grid-cols-2 text-white">
                    <div className="hiddenl p-6 bg-slate-900 rounded-3xl border-2 border-slate-400 text-lg">
                        <h1 className="text-center text-pink-400 text-2xl pb-6 "> About </h1>
                        <p>
                        Some takes are trash, but the takes here are just terrible! Presenting you the TTT!
                        </p>
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
                    transition={{duration: 0.5, delay: 0.25, type: "spring"}} className="">
                <h1 className="text-3xl font-semibold p-6 pl-24"><span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-400">Shonen Fest</span></h1>
                <div className="p-4 grid grid-cols-1 gap-4 md:grid-cols-2 text-white">
                    <div className = "hiddenl p-6 bg-slate-900 rounded-3xl border-2 border-slate-400 text-lg">
                        <h1 className="text-center text-pink-400 text-3xl pb-6"> About </h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturi
                        </p>
                    </div>
                    <div className="flex justify-evenly flex-wrap">
                        <img 
                            src={shouk}
                            className="mx-auto rounded-3xl w-1/3 items-center content-center justify-center object-center object-contain p-4"></img>
                        <img 
                            src={shouk}
                            className="mx-auto rounded-3xl w-1/3  items-center content-center justify-center object-center object-contain p-4"></img>
                        <img 
                            src={shouk}
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
                    transition={{duration: 0.5, delay: 0.25, type: "spring"}} className="">
                <h1 className="text-3xl font-semibold p-6 pl-24"><span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-400">Maid Cafe</span></h1>
                <div className="p-4 grid grid-cols-1 gap-4 md:grid-cols-2 text-white">
                    <div className = "hiddenl p-6 bg-slate-900 rounded-3xl border-2 border-slate-400 text-lg">
                        <h1 className="text-center text-pink-400 text-2xl pb-6 "> About </h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturi
                        </p>
                    </div>
                    <div className="flex justify-evenly flex-wrap">
                        <img 
                            src={shouk}
                            className="mx-auto rounded-3xl w-1/3  items-center content-center justify-center object-center object-contain p-4"></img>
                            <img 
                            src={shouk}
                            className="mx-auto rounded-3xl w-1/3  items-center content-center justify-center object-center object-contain p-4"></img>
                            <img 
                            src={shouk}
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
                    transition={{duration: 0.5, delay: 0.25, type: "spring"}} className="">
                <h1 className="text-3xl font-semibold p-6 pl-24"><span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-400">Animania</span></h1>
                <div className="p-4 grid grid-cols-1 gap-4 md:grid-cols-2 text-white">
                    <div className="hiddenl p-6 bg-slate-900 rounded-3xl border-2 border-slate-400 text-lg">
                        <h1 className="text-center text-pink-400 text-2xl pb-6 "> About </h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturi
                        </p>
                    </div>
                    <div className="flex justify-evenly flex-wrap">
                        <img 
                            src={shouk}
                            className="mx-auto rounded-3xl w-1/3  items-center content-center justify-center object-center object-contain p-4"></img>
                            <img 
                            src={shouk}
                            className="mx-auto rounded-3xl w-1/3  items-center content-center justify-center object-center object-contain p-4"></img>
                            <img 
                            src={shouk}
                            className="mx-auto rounded-3xl w-1/3  items-center content-center justify-center object-center object-contain p-4"></img>        
                    </div>
                </div>
            </motion.div>
            </div>
        </div>
                <Footer />
                </div>
    )
}

export default Events
