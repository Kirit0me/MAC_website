import Navigation_Bar from "./navigation_bar"
import axios from "axios";
import { useState } from "react";

function Merch() {

        const handleDownloadPoster = () => {
          const fileUrl = 'https://drive.google.com/file/d/1meoHZlLTGUQ7ERRHsMtb8cO2wdeo5ZNl/view?usp=drive_link';
      
          // Create a temporary anchor element
          const link = document.createElement('a');
          link.href = fileUrl;
          link.target = '_blank'; // Open in a new tab
          link.download = 'your-file-name.pdf'; // Specify the desired file name
      
          // Append the anchor to the body and trigger a click event
          document.body.appendChild(link);
          link.click();
      
          // Remove the anchor from the body
          document.body.removeChild(link);
        };

        const handleDownloadBadges = () => {
            const fileUrl = 'https://drive.google.com/file/d/1DVW0BfjVvFhhkkNWcbTnHmQj3YVQNHBx/view?usp=drive_link';
        
            // Create a temporary anchor element
            const link = document.createElement('a');
            link.href = fileUrl;
            link.target = '_blank'; // Open in a new tab
            link.download = 'your-file-name.pdf'; // Specify the desired file name
        
            // Append the anchor to the body and trigger a click event
            document.body.appendChild(link);
            link.click();
        
            // Remove the anchor from the body
            document.body.removeChild(link);
          };
      

    const [name, setName] = useState('');
    const [regNo, setRegNo] = useState('');
    const [mobile, setMobile] = useState('');
    const [stickers, setStickers] = useState('');
    const [custom, setCustom] = useState('');
    const [poster, setPoster] = useState('');
    const [badge, setBadge] = useState('');
    const [pokeball, setPokeball] = useState('');


    function handleSubmit(e){

        e.preventDefault();
        console.log(name, regNo, mobile, stickers, custom, poster, badge, pokeball)
        console.log("Submitted")
        const data={
            Name: name,
            RegNo: regNo,
            Mobile: mobile,
            Stickers: stickers,
            Custom: custom,
            Poster: poster,
            Badge: badge,
            Pokeball: pokeball
        }
        axios.post('https://sheet.best/api/sheets/896de3dd-75d0-4a60-9996-9ee245a654f8', data).then(response=>{
            console.log(response);
            setName('');
            setRegNo('');
            setMobile('');
            setStickers('');
            setCustom('');
            setPoster('');
            setBadge('');
            setPokeball('');
          })
      }

    return (
        <div className="bg-oshi-no-ko bg-cover h-screen overflow-y-scroll scrollbar-hide">
            <Navigation_Bar />
            <div className="pt-16">
                <h1 className="text-center text-5xl pt-2 font-bolf text-white">Shonen Fest Merch</h1>
                <div className="p-10 flex justify-center flex-wrap">
                <div className="text-white flex-col justify-center p-6 w-5/6 md:w-1/4 text-lg backdrop-blur-xl border-2 border-slate-500 rounded-3xl m-2">
                    <h1 className="font-bold text-2xl py-2">Badges : </h1>
                    <ul className="text-[15px]">
                        <li>High Quality Circular Images for customs</li>
                        <li>Proper Distinct name eg: name_{name}_badge</li>
                        <li>All PNGs sent to whatsapp number</li>
                    </ul>
                    <button onClick={handleDownloadBadges} className="mt-2 p-3 text-white border-2 border-white rounded-3xl hover:bg-stone-900">Download Default Badges</button>
                </div>
                <div className="text-white flex-col justify-center p-6 w-5/6 md:w-1/4 text-lg backdrop-blur-xl border-2 border-slate-500 rounded-3xl m-2">
                    <h1 className="font-bold text-2xl py-2">Posters : </h1>
                    <ul className="text-[15px]">
                        <li>High Quality Images, Upscaled Images, Only PDFs</li>
                        <li>No editing done by us</li>
                        <li>Proper Distinct name eg: name_{name}_poster</li>
                        <li>Size mentionaed as A4, A3</li>
                        <li>Dont combine the posters in one document for customs.</li>
                    </ul>
                    <button onClick={handleDownloadPoster} className="mt-2 p-3 text-white border-2 border-white rounded-3xl hover:bg-stone-900">Download Default Posters</button>
                </div>
                <div className="text-white flex-col justify-center p-6 w-5/6 md:w-1/4 text-lg backdrop-blur-xl border-2 border-slate-500 rounded-3xl m-2">
                    <h1 className="font-bold text-2xl py-2">Stickers : </h1>
                    <ul className="text-[15px]">
                        <li>High Quality Transparent Images only for customs</li>
                        <li>Use recommended Sticker images for customs</li>
                        <li>Sizes Small(S), Medium(M), Large(L)</li>
                        <li>All PNGs sent to whatsapp number</li>
                        <li>Dont combine the stickers in one document for customs.</li>
                    </ul>
                </div>
                </div>
                <div className="pt-10 flex justify-center text-xl">
                    <form id="formani" className="formanime w-2/3 md:w-1/2 m-6" onSubmit={handleSubmit}>
                        <div className="mb-5">
                            <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Omae no Namae</label>
                            <input 
                                type="text" 
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="Name" 
                                required />
                        </div>
                        <div className="mb-5">
                            <label for="regno" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Omae no Registration No.</label>
                            <input 
                                type="text" 
                                onChange={(e) => setRegNo(e.target.value)}
                                value={regNo} 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="Reg No" 
                                required />
                        </div>
                        <div className="mb-5">
                            <label for="mobile" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Omae no Mobile No.</label>
                            <input 
                                type="text" 
                                onChange={(e) => setMobile(e.target.value)}
                                value={mobile} 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="Mobile" 
                                required />
                        </div>
                        <div className="mb-5">
                            <label for="stickers" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sticker Details</label>
                            <input 
                                type="text" 
                                onChange={(e) => setStickers(e.target.value)}
                                value={stickers} 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="Serial Number_Size" 
                                 />
                        </div>
                        
                        <div className="mb-5">
                            <label for="posters" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Poster Details</label>
                            <input 
                                type="text" 
                                onChange={(e) => setPoster(e.target.value)}
                                value={poster} 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="Serial Number_Size" 
                                 />
                        </div>
                        <div className="mb-5">
                            <label for="badges" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Badges Details</label>
                            <input 
                                type="text" 
                                onChange={(e) => setBadge(e.target.value)}
                                value={badge} 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="Serial Number" 
                                />
                        </div>
                        <div className="mb-5">
                            <label for="pokeball" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pokeball</label>
                            <input 
                                type="text" 
                                onChange={(e) => setPokeball(e.target.value)}
                                value={pokeball} 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="yes or no" 
                                />
                        </div>
                        <div className="mb-5">
                            <label for="customs" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Customs</label>
                            <input 
                                type="text" 
                                onChange={(e) => setCustom(e.target.value)}
                                value={custom}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="Name of File/s with Size" 
                                 />
                        </div>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Merch