// import { useState } from 'react';
// import { Menu, X, ChevronDown } from 'lucide-react';
// import Logo from '../assets/logo.jpg';
// import { Link } from 'react-router-dom';

// export default function Navbar() {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleMenu = () => setIsOpen(!isOpen);

//     const navItems = [
//         { label: 'Home', to: '/' },
//         { label: 'About Temple', to: '/about' },


//     ];

//     return (
//         <header className="bg-black  text-white shadow-md">
//             <div className=" max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
//                 {/* Logo */}
//                 <div className="flex items-center space-x-2">
//                     <img src={Logo} alt="Logo" className="h-12 w-auto rounded-lg" />
//                     <span>Shree</span>
//                 </div>

//                 {/* Desktop Menu */}
//                 <nav className="hidden md:flex items-center space-x-6 font-medium text-sm">
//                     {navItems.map(({ label, to, dropdown }) => (
//                         <Link
//                             key={label}
//                             to={to}
//                             className="flex items-center gap-1 hover:text-purple-400 transition"
//                         >
//                             {label} {dropdown && <ChevronDown size={14} />}
//                         </Link>
//                     ))}
//                 </nav>

//                 {/* Desktop Buttons */}
//                 {/* <div className="hidden md:flex items-center space-x-3">
//                     <button className="bg-purple-600 hover:bg-purple-700 transition px-4 py-2 rounded-full text-sm font-medium">
//                         💰 Donate
//                     </button>
//                     <button className="bg-purple-600 hover:bg-purple-700 transition px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1">
//                         Select Language <ChevronDown size={14} />
//                     </button>
//                 </div> */}

//                 {/* Mobile Menu Icon */}
//                 <button className="md:hidden text-white" onClick={toggleMenu}>
//                     {isOpen ? <X size={26} /> : <Menu size={26} />}
//                 </button>
//             </div>

//             {/* Mobile Menu */}
//             {isOpen && (
//                 <div className="md:hidden bg-zinc-900 text-white  px-4 pt-2 pb-4 space-y-2">
//                     {navItems.map(({ label, to }) => (
//                         <Link
//                             key={label}
//                             to={to}
//                             className="block  font-medium hover:text-purple-400 transition"
//                             onClick={() => setIsOpen(false)} // close menu on nav
//                         >
//                             {label}
//                         </Link>
//                     ))}
//                     <button className="w-full bg-purple-600 hover:bg-purple-700 transition text-white py-2 rounded-full mt-2">
//                         💰 Donate
//                     </button>
//                     <button className="w-full bg-purple-600 hover:bg-purple-700 transition text-white py-2 rounded-full flex items-center justify-center gap-1 mt-2">
//                         Select Language <ChevronDown size={14} />
//                     </button>
//                 </div>
//             )}
//         </header>
//     );
// }

import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/logo.webp';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    const navItems = [
        { label: 'Home', to: '/' },
        { label: 'About Temple', to: '/about' },
        { label: 'Seva', to: '/seva' },
        { label: 'Calender', to: '/calender' },
    ];

    return (
        <header className="fixed top-0 w-full z-50 bg-black  text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <img src={Logo} alt="Logo" className="h-12 w-auto rounded-lg" />
                    <span className="text-xl font-semibold">Shree ShaniDev</span>
                </div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center space-x-6 font-medium text-sm">
                    {navItems.map(({ label, to, dropdown }) => (
                        <NavLink
                            key={label}
                            to={to}
                            className={({ isActive }) =>
                                `flex items-center gap-1 text-lg transition ${isActive ? 'text-purple-500' : 'hover:text-purple-400'
                                }`
                            }
                        >
                            {label} {dropdown && <ChevronDown size={14} />}
                        </NavLink>
                    ))}
                </nav>

                {/* Mobile Menu Icon */}
                <button className="md:hidden text-white" onClick={toggleMenu}>
                    {isOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-zinc-900 text-white px-4 pt-2 pb-4 space-y-2">
                    {navItems.map(({ label, to }) => (
                        <Link
                            key={label}
                            to={to}
                            className="block font-medium hover:text-purple-400 transition"
                            onClick={() => setIsOpen(false)} // close menu on nav
                        >
                            {label}
                        </Link>
                    ))}
                    {/* <button className="w-full bg-purple-600 hover:bg-purple-700 transition text-white py-2 rounded-full mt-2">
                        💰 Donate
                    </button>
                    <button className="w-full bg-purple-600 hover:bg-purple-700 transition text-white py-2 rounded-full flex items-center justify-center gap-1 mt-2">
                        Select Language <ChevronDown size={14} />
                    </button> */}
                </div>
            )}
        </header>
    );
}

