import React, { useState } from 'react';
import { Menu, Star, FileText } from 'lucide-react';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CollectionsIcon from '@mui/icons-material/Collections';
import { Outlet, useNavigate } from 'react-router-dom';

const navItems = [
    { text: 'Management List', icon: <PermIdentityIcon />, path: 'management' },
    { text: 'Gallery', icon: <CollectionsIcon />, path: 'gallery' },
    { text: 'Blog', icon: <FileText />, path: 'blog' },

];

export default function Dashboard() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const navigate = useNavigate();

    const handleNavClick = (path) => {
        navigate(`/dashboard/${path}`);
        if (window.innerWidth < 640) setMobileOpen(false);
    };

    return (
        <div className="h-screen bg-black text-white flex flex-col">
            {/* Top Navbar */}
            <header className="w-full bg-[#111] flex items-center justify-between px-4 py-3 border-b border-gray-800">
                <div className="flex items-center gap-3">
                    <button
                        className="sm:block text-white"
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        <Menu />
                    </button>
                    <h1 className="text-blue-400 font-semibold text-lg">Shree ShaniDev</h1>
                </div>
            </header>

            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar */}
                <aside
                    className={`bg-[#1a1a1a] fixed sm:relative top-[52px] sm:top-0 left-0 h-[calc(100vh-52px)] w-60 z-30 transition-transform duration-300 ease-in-out transform ${mobileOpen ? 'translate-x-0' : '-translate-x-full'
                        } sm:translate-x-0`}
                >
                    <div className="p-4">
                        <ul>
                            {navItems.map((item) => (
                                <li
                                    key={item.text}
                                    onClick={() => handleNavClick(item.path)}
                                    className={`flex items-center gap-2 p-2 rounded hover:bg-white/10 cursor-pointer ${item.highlight ? 'text-pink-500' : ''
                                        }`}
                                >
                                    <span className="w-5">{item.icon}</span>
                                    <span>{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>

                {/* Mobile Overlay */}
                {mobileOpen && (
                    <div
                        className="fixed inset-0 bg-black/50 sm:hidden z-20"
                        onClick={() => setMobileOpen(false)}
                    />
                )}

                {/* Main Page Area */}
                <main className="flex-1 overflow-y-auto p-6 ml-0 sm:ml-60">
                    <Outlet /> {/* Nested routes render here */}
                </main>
            </div>
        </div>
    );
}


// import React, { useState } from 'react';
// import { Menu, Star, FileText } from 'lucide-react';
// import PermIdentityIcon from '@mui/icons-material/PermIdentity';
// import CollectionsIcon from '@mui/icons-material/Collections';
// import { Routes, Route, useNavigate } from 'react-router-dom';


// // Import your route components
// import Management from '../Admin/Page/Management';


// const navItems = [
//     { text: 'Management List', icon: <PermIdentityIcon />, path: '/management' },
//     { text: 'Gallery', icon: <CollectionsIcon />, path: '/gallery' },
//     { text: 'Blog', icon: <FileText />, path: '/blog' },
//     { text: 'Custom Item', icon: <Star />, path: '/custom', highlight: true },
// ];

// export default function Dashboard() {
//     const [mobileOpen, setMobileOpen] = useState(false);
//     const navigate = useNavigate();

//     const handleNavClick = (path) => {
//         navigate(path);
//         if (window.innerWidth < 640) setMobileOpen(false);
//     };

//     return (
//         <div className="h-screen bg-black text-white flex flex-col">
//             {/* Top Navbar */}
//             <header className="w-full bg-[#111] flex items-center justify-between px-4 py-3 border-b border-gray-800">
//                 <div className="flex items-center gap-3">
//                     <button
//                         className="sm:block text-white"
//                         onClick={() => setMobileOpen(!mobileOpen)}
//                     >
//                         <Menu />
//                     </button>
//                     <h1 className="text-blue-400 font-semibold text-lg">Shree ShaniDev</h1>
//                 </div>
//             </header>

//             <div className="flex flex-1 overflow-hidden">
//                 {/* Sidebar */}
//                 <aside
//                     className={`bg-[#1a1a1a] fixed sm:relative top-[52px] sm:top-0 left-0 h-[calc(100vh-52px)] w-60 z-30 transition-transform duration-300 ease-in-out transform ${mobileOpen ? 'translate-x-0' : '-translate-x-full'
//                         } sm:translate-x-0`}
//                 >
//                     <div className="p-4">
//                         {/* <h2 className="text-sm text-gray-400 mb-4">Main items</h2> */}
//                         <ul>
//                             {navItems.map((item) => (
//                                 <li
//                                     key={item.text}
//                                     onClick={() => handleNavClick(item.path)}
//                                     className={`flex items-center gap-2 p-2 rounded hover:bg-white/10 cursor-pointer ${item.highlight ? 'text-pink-500' : ''
//                                         }`}
//                                 >
//                                     <span className="w-5">{item.icon}</span>
//                                     <span>{item.text}</span>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 </aside>

//                 {/* Mobile Overlay */}
//                 {mobileOpen && (
//                     <div
//                         className="fixed inset-0 bg-black/50 sm:hidden z-20"
//                         onClick={() => setMobileOpen(false)}
//                     />
//                 )}

//                 {/* Main Page Area */}
//                 <main className="flex-1 overflow-y-auto p-6 ml-0 sm:ml-60">
//                     <Routes>
//                         <Route path='./management' element={<Management />} />


//                     </Routes>
//                 </main>
//             </div>
//         </div>
//     );
// }
