import Navigation_Bar from "./navigation_bar"

function AboutUs() {
    return(
        <div className="h-screen bg-girl bg-cover flex-col overflow-y-scroll scrollbar-hide">
            <Navigation_Bar />
            <div className="pt-16">
            <h1 class ="text-center p-4 pt-8 text-5xl rounded-3xl">
                <div className="bg-transparent backdrop-blur-lg border-4 border-slate-400 rounded-3xl p-6 ">
                <span className="bg-clip-text font-semibold text-transparent bg-gradient-to-r from-fuchsia-400 to-purple-400">About Us</span>
                </div>
            </h1>
            <div className="p-4">
                <div className="bg-transparent border-2 backdrop-blur-lg border-slate-300 p-6 rounded-3xl">
                    <p className="text-xl text-transparent bg-clip-text bg-fuchsia-300">
                    We are not meant to be consumed with cheese, and yet we stand proud. As the club that promotes the Japanese Culture and medium of entertainment to the MIT, we are the <b>M</b>anga <b>A</b>nime <b>C</b>lub. Set to explore the various animes and manga stories that get released, to discuss the plethora of Japanese-based games like Visual novels, J-RPGs and Gacha Games, and proud enjoyers of the ANGC culture in general. 
Our mascots, the Sakuranami twins, are the sole promoters of the culture, so as you dive into the various reviews and artworks that our group has done, or view the merch that is present and you wish to admire and possible buy; we got you covered.
                    
                    </p>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default AboutUs 