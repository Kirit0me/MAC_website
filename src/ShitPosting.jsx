import Navigation_Bar from './navigation_bar';
import Footer from './Footer';
import shouk from './img/shoukaku.webp';
import {motion} from "framer-motion";

function ShitPosting() {
    return (
        <div className="scrollbar-hide">
        <div className="h-screen bg-oshi-no-ko bg-cover">
            <Navigation_Bar />
            <div class="pt-16">
                
            </div>
        </div>
        <Footer />
        </div>
    )
}

export default ShitPosting
