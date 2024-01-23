import Footer from "./Footer"
import Navigation_Bar from "./navigation_bar"

function Merch() {
    function Submit(e) {
        console.log("Submitted")
        const formEle = document.querySelector("#formani");
        const formDatab = new FormData(formEle);
        fetch(
          "https://script.google.com/macros/s/AKfycbytk-pXvRRpRu4YMNvbR0G83SAvurZW9O25NIXlsrohpoQGvA0SIEOgzDy19V1SA6Q1/exec",
          {
            method: "POST",
            body: formDatab
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    return (
        <div className="scrollbar-hide">
        <div className="bg-girl bg-cover h-screen overflow-y-scroll">
            <Navigation_Bar />
            <div className="pt-16">
                <h1 className="text-center text-5xl font-bolf text-white">Shonen Fest Merch</h1>
                <div className="pt-10 flex justify-center text-xl">
                    <form id="formani" className="formanime w-2/3 md:w-1/2 m-6" onSubmit={(e) => Submit(e)}>
                        <div class="mb-5">
                            <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Omae no Namae</label>
                            <input 
                                type="text" 
                                name="name" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="Name" 
                                required />
                        </div>
                        <div class="mb-5">
                            <label for="regno" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Omae no Registration No.</label>
                            <input 
                                type="text" 
                                name="RegNo" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="Reg No" 
                                required />
                        </div>
                        <div class="mb-5">
                            <label for="mobile" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Omae no Mobile No.</label>
                            <input 
                                type="text" 
                                name="Mobile" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="Mobile" 
                                required />
                        </div>
                        <div class="mb-5">
                            <label for="stickers" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sticker Details</label>
                            <input 
                                type="text" 
                                name="Stickers" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="Format : {NumberSize} eg : 1L, 2S, 3M" 
                                 />
                        </div>
                        <div class="mb-5">
                            <label for="customs" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Custom Stickers</label>
                            <input 
                                type="text" 
                                name="Custom" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="Name of File" 
                                 />
                        </div>
                        <div class="mb-5">
                            <label for="posters" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Poster</label>
                            <input 
                                type="text" 
                                name="Poster" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="Name of File" 
                                 />
                        </div>
                        <div class="mb-5">
                            <label for="badges" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Badges</label>
                            <input 
                                type="text" 
                                name="Badge" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="Name of File" 
                                />
                        </div>
                        <div class="mb-5">
                            <label for="pokeball" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pokeball</label>
                            <input 
                                type="text" 
                                name="Pokeball" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="yes or no" 
                                />
                        </div>
                        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        <Footer />
        </div>
    )
}

export default Merch