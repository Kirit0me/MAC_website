import { Link } from "react-router-dom"

function Navigation_Bar() {
    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'Artwork', path: '/artwork' },
        { label: 'Events', path: '/events' },
        { label: 'Merch', path: '/merch' },
        { label: 'History', path: '/history' },
      ];
    return (
        <div class=" bg-slate-900 h-16 flex flex-row justify-between">
            <div class="p-2 "><img src="/mac.png" class="h-12 w-12"></img></div>
            <div className="flex justify-center space-x-4 pt-2">
                {navItems.map((item, index) => (
                    <div key={index} className="bg-slate-800 rounded-t-3xl text-pink-400">
                        <div className="p-2 text-center pt-5 w-20">
                            <Link to={item.path}>{item.label}</Link>
                        </div>
                    </div>
                ))}
            </div>
            <span></span>
        </div>
    )
}

export default Navigation_Bar