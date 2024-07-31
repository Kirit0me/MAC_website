import Navigation_Bar from "./navigation_bar"
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

          const handleDownloadStickers = () => {
            const fileUrl = 'https://drive.google.com/file/d/1yf_E5pQ5DLgi2TOUXsk5CyNwIcoW-jmk/view?usp=drive_link';
        
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
          const handleDownloadTshirts = () => {
            const fileUrl = 'https://drive.google.com/file/d/1bJfuQdq4pKW4FWZkifhXB_1uK1s_GBsj/view?usp=drive_link';
        
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
                        <li>Proper Distinct name eg: {name}_img_name_badge</li>
                    </ul>
                    <button onClick={handleDownloadBadges} className="mt-2 p-3 text-white border-2 border-white rounded-3xl hover:bg-stone-900">Badges Catalogue</button>
                </div>
                <div className="text-white flex-col justify-center p-6 w-5/6 md:w-1/4 text-lg backdrop-blur-xl border-2 border-slate-500 rounded-3xl m-2">
                    <h1 className="font-bold text-2xl py-2">Posters : </h1>
                    <ul className="text-[15px]">
                        <li>High Quality Images, Upscaled Images, Only PDFs</li>
                        <li>No editing done by us</li>
                        <li>Proper Distinct name eg: {name}_img_name_poster</li>
                        <li>Size mentionaed as A4, A3</li>
                        <li>Dont combine the posters in one document for customs.</li>
                    </ul>
                    <button onClick={handleDownloadPoster} className="mt-2 p-3 text-white border-2 border-white rounded-3xl hover:bg-stone-900">Posters Catalogue</button>
                </div>
                {/* <div className="text-white flex-col justify-center p-6 w-5/6 md:w-1/4 text-lg backdrop-blur-xl border-2 border-slate-500 rounded-3xl m-2">
                    <h1 className="font-bold text-2xl py-2">Stickers : </h1>
                    <ul className="text-[15px]">
                        <li>High Quality Transparent Images only for customs</li>
                        <li>Use recommended Sticker images for customs</li>
                        <li>Sizes Small(S), Medium(M), Large(L)</li>
                        <li>Dont combine the stickers in one document for customs.</li>
                        <li>Proper Distinct name eg: {name}_img_name_stickers</li>
                    </ul>
                    <button onClick={handleDownloadStickers} className="mt-2 p-3 text-white border-2 border-white rounded-3xl hover:bg-stone-900">Stickers Catalogue</button>
                </div>
                <div className="text-white flex-col justify-center p-6 w-5/6 md:w-1/4 text-lg backdrop-blur-xl border-2 border-slate-500 rounded-3xl m-2">
                    <h1 className="font-bold text-2xl py-2">Tshirts : </h1>
                    <ul className="text-[15px]">
                        <li>High Quality for customs</li>
                        <li>No editing will be done</li>
                        <li>Sizes S, M, L, XL, XXL</li>
                        <li>Dont combine the Tshirts in one document for customs.</li>
                    </ul>
                    <button onClick={handleDownloadTshirts} className="mt-2 p-3 text-white border-2 border-white rounded-3xl hover:bg-stone-900">Tshirts Catalogue</button>
                </div> */}
                <div className="text-pink-300 flex-col justify-center p-6 w-5/6 md:w-1/4 text-lg backdrop-blur-xl border-2 border-slate-500 rounded-3xl m-2">
                    <a href=" https://forms.gle/G1yyZ6sayFmk1wAC9">Use this <span className="text-blue-500">link</span> to submit your images:</a>
                </div>
            </div>
               
            </div>
        </div>
    )
}

export default Merch