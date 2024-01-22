import Footer from "./Footer"
import Navigation_Bar from "./navigation_bar"

function Merch() {
    return (
        <div className="scrollbar-hide">
        <div className="bg-girl bg-cover h-screen overflow-y-scroll">
            <Navigation_Bar />
            <div className="pt-16">
                <h1 className="text-center text-5xl font-bolf text-white">Shonen Fest Merch</h1>
            </div>
        </div>
        <Footer />
        </div>
    )
}

export default Merch