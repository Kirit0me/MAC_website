import Navigation_Bar from './navigation_bar';
import shouk from './img/shoukaku.jpg';
import { motion } from "framer-motion";

function Events() {
    return (
        <div>
            <Navigation_Bar />
            <h1 class="text-6xl text-center p-6 text-white">2024 Events</h1>
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
                    transition={{duration: 0.5, delay: 0.25}} class="h-screen">
                <h1 class="text-3xl font-semibold p-6 pl-24"><span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-400">Shonen Fest</span></h1>
                <div class="p-4 grid grid-cols-1 gap-4 md:grid-cols-2 text-white">
                    <div className = "hiddenl" class="p-6 bg-slate-700 rounded-3xl">
                        <h1 class="text-center text-pink-400 text-2xl pb-6 "> About </h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturi
                        </p>
                    </div>
                    <div class="flex justify-evenly flex-wrap">
                        <img 
                            src={shouk}
                            class="mx-auto rounded-3xl w-1/3 items-center content-center justify-center object-center object-contain p-4"></img>
                        <img 
                            src={shouk}
                            class="mx-auto rounded-3xl w-1/3  items-center content-center justify-center object-center object-contain p-4"></img>
                        <img 
                            src={shouk}
                            class="mx-auto rounded-3xl w-1/3  items-center content-center justify-center object-center object-contain p-4"></img>       
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
                    transition={{duration: 0.5, delay: 0.25}} class="h-screen">
                <h1 class="text-3xl font-semibold p-6 pl-24"><span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-400">Maid Cafe</span></h1>
                <div class="p-4 grid grid-cols-1 gap-4 md:grid-cols-2 text-white">
                    <div className = "hiddenl" class="p-6 bg-slate-700 rounded-3xl">
                        <h1 class="text-center text-pink-400 text-2xl pb-6 "> About </h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturi
                        </p>
                    </div>
                    <div class="flex justify-evenly flex-wrap">
                        <img 
                            src={shouk}
                            class="mx-auto rounded-3xl w-1/3  items-center content-center justify-center object-center object-contain p-4"></img>
                            <img 
                            src={shouk}
                            class="mx-auto rounded-3xl w-1/3  items-center content-center justify-center object-center object-contain p-4"></img>
                            <img 
                            src={shouk}
                            class="mx-auto rounded-3xl w-1/3  items-center content-center justify-center object-center object-contain p-4"></img>
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
                    transition={{duration: 0.5, delay: 0.25}} class="h-screen">
                <h1 class="text-3xl font-semibold p-6 pl-24"><span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-400">Animania</span></h1>
                <div class="p-4 grid grid-cols-1 gap-4 md:grid-cols-2 text-white">
                    <div class="p-6 bg-slate-700 rounded-3xl">
                        <h1 class="text-center text-pink-400 text-2xl pb-6 "> About </h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturi
                        </p>
                    </div>
                    <div class="flex justify-evenly flex-wrap">
                        <img 
                            src={shouk}
                            class="mx-auto rounded-3xl w-1/3  items-center content-center justify-center object-center object-contain p-4"></img>
                            <img 
                            src={shouk}
                            class="mx-auto rounded-3xl w-1/3  items-center content-center justify-center object-center object-contain p-4"></img>
                            <img 
                            src={shouk}
                            class="mx-auto rounded-3xl w-1/3  items-center content-center justify-center object-center object-contain p-4"></img>        
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Events