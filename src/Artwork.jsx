import shouk from './img/shoukaku.jpg';
import {motion} from "framer-motion";

function Artwork() {
    const artworks = [
        { id: 'kirit0me', artwork: shouk },
        { id: 'insta2', artwork: shouk },
        { id: 'insta3', artwork: shouk },
      ];

    return (
        <div>
            <h1 class="text-6xl text-center p-6 text-white">2024 Events</h1>
            <div class="flex flex-row justify-evenly">
                {artworks.map(({ id, artwork }, index) => (
                    <motion.div
                    key={id}
                    class="w-96 h-96 flex bg-cover bg-center rounded-3xl m-4"
                    style={{ backgroundImage: `url(${artwork})` }}
                    initial={{ opacity: 0, scale: 0.5, x: "100%" }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    >
                    <a href={`https://www.instagram.com/${id}`} target="_blank" rel="noopener noreferrer" class="p-2 text-xl block text-white text-center">
                        @{id}
                    </a>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Artwork