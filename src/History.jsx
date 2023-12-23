import NavBar from './NavBar';
import shouk from './img/shoukaku.jpg';
import {motion} from "framer-motion";

function History() {
    const Members_2015 = [
        { name : 'kirit0me', pic: shouk, role: "Writing", batch: 2015  },
        { name : 'name2', pic: shouk, role: "Writing", batch: 2015  },
        { name : 'name3', pic: shouk, role: "Writing", batch: 2015  },
      ];

    return (
        <div>
            <NavBar />
            <h1 class="text-6xl text-center p-6 text-white">History</h1>
            <DisplayMembers list_of_mems={Members_2015} />
        </div>
    )
}

function DisplayMembers({ list_of_mems }) {
    return (
        <div class="flex flex-row flex-wrap justify-evenly">
        {list_of_mems.map(({ name, pic, role, batch }, index) => (
            <motion.div
            key={name}
            class="flex-none rounded-3xl p-10 mb-5 mr-4 bg-slate-700 hover:bg-gradient-to-tr from-slate-800 via-slate-500 to-slate-800"
            initial={{ opacity: 0, scale: 0.5, x: "100%" }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            >
        <img 
          src={pic}
          alt={name}
          class="mx-auto rounded-full h-36 w-36"
        >
        </img>
        <h2 class="text-xl pt-6 text-center text-pink-300">{name}</h2>
        <h2 class="text-xl text-center text-pink-300">{role}</h2>
        <h2 class="text-xl text-center text-pink-300">{batch}</h2>
            </motion.div>
        ))}
    </div>
    )
}

export default History