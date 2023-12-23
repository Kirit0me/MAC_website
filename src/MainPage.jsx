import { Link } from "react-router-dom";

function MainPage() {
    return (
        <div class="relative h-screen snap-center">
            <div class="absolute top-0 left-0 w-full h-screen bg-cover bg-center opacity-20 bg-[url('/frieran.jpg')]">
            </div>
            <h1 class="text-7xl text-white text-center pt-24 ">THE <span><b>MANGA </b>AND <b>ANIME</b> CLUB</span></h1>
            <h2 class="text-3xl text-white text-right pr-36 pt-6 ">Manipal</h2>
            <div class="absolute inset-0 flex w-screen items-center justify-evenly">
                <button
                class="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-xl font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-700 hover:bg-opacity-80 hover:text-neutral-100 hover:animate-bounce focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 ">
                <Link to='/about'>About</Link>
                </button>
                <button
                class="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-xl font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-700 hover:bg-opacity-80 hover:text-neutral-100 hover:animate-bounce focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 ">
                <Link to='/events'>Events</Link>
                </button>
                <button
                class="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-xl font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-700 hover:bg-opacity-80 hover:text-neutral-100 hover:animate-bounce focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200">
                <Link to='/artwork'>Artworks</Link>
                </button>
                <button
                class="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-xl font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-700 hover:bg-opacity-80 hover:text-neutral-100 hover:animate-bounce focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200">
                <Link to='/merch'>Merch</Link>
                </button>
                <button
                class="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-xl font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-700 hover:bg-opacity-80 hover:text-neutral-100 hover:animate-bounce focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200">
                <Link to='/history'>History</Link>
                </button>
            </div>
        </div>
    )

}

export default MainPage