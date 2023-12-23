import { Link } from "react-router-dom"

function Navigation_Bar() {
    return (
        <div class=" bg-slate-900 h-16 flex flex-row justify-between">
            <div class="p-2 "><img src="/mac.png" class="h-12 w-12"></img></div>
            <div class="flex justify center space-x-4">
                <div class="bg-slate-800 rounded-3xl text-pink-400">
                    <div class="p-2 text-center font-bold pt-5"><Link to='/'>Home</Link></div>
                </div>
                <div class="bg-slate-800 rounded-3xl text-pink-400">
                    <div class="p-2 text-center font-bold  pt-5"><Link to='/artwork'>Artwork</Link></div>
                </div>
                <div class="bg-slate-800 rounded-3xl text-pink-400">
                    <div class="p-2 text-center font-bold pt-5"><Link to='/events'>Events</Link></div>
                </div>
                <div class="bg-slate-800 rounded-3xl text-pink-400">
                    <div class="p-2 text-center font-bold  pt-5"><Link to='/merch'>Merch</Link></div>
                </div>
                <div class="bg-slate-800 rounded-3xl text-pink-400">
                    <div class="p-2 text-center font-bold  pt-5"><Link to='/history'>History</Link></div>
                </div>
            </div>
            <span class="opacity-0"></span>
        </div>
    )
}

export default Navigation_Bar