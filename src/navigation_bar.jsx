import { useState } from "react";
import { Link } from "react-router-dom";

function Navigation_Bar() {
  const [menuVisible, setMenuVisible] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Art', path: '/artwork' },
    { label: 'Events', path: '/events' },
    { label: 'Merch', path: '/merch' },
    { label: 'History', path: '/history' },
    { label: 'Stuff', path: '/shitposting' }
  ];

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="bg-slate-900 h-16 flex justify-between items-center fixed top-0 right-0 w-full z-50 rounded-b-xl">
      <div className="p-2">
        <img src="/mac.png" className="h-12 w-12" alt="Logo" />
      </div>
      <div className="hidden md:flex space-x-4 p-2">
        {navItems.map((item, index) => (
          <div key={index} className="bg-slate-800 rounded-3xl text-pink-400">
            <div className="p-4 w-28">
              <Link to={item.path}>
                <h1 class="text-center">{item.label}</h1>
            </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="md:hidden flex justify-between p-2">
        <button onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-pink-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      {menuVisible && (
  <div className="md:hidden fixed top-16 right-0 bg-slate-900 w-full z-50 rounded-b-xl">
    <div className="flex flex-col space-y-2 pt-2 p-2 rounded-xl">
      {navItems.map((item, index) => (
        <div key={index} className="bg-slate-800 rounded-3xl text-pink-400">
          <div className="p-2 text-center pt-5 w-full">
            <Link to={item.path} onClick={toggleMenu}>
              <h1 class="text-center">{item.label}</h1>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
)}
    </div>
  );
}

export default Navigation_Bar;
