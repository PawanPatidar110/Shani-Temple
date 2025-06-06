import React from "react";
import Shanidev from "../assets/Shanidev2.webp"; // You can keep this if needed
import FallingLeaves from "./FallingLeaves";
import HeaderBg from "../assets/headerBg.mp4";

export default function Header() {
    return (
        <div className="relative min-h-screen flex items-center justify-between text-white overflow-hidden bg-black">
            {/* Background video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
            >
                <source src={HeaderBg} type="video/webm" />
                Your browser does not support the video tag.
            </video>

            {/* Foreground content */}
            <div className='w-full flex   justify-center gap-145 items-center  '>

                <div className='text-4xl pl-10 md:text-5xl font-bold text-yellow-300 mb-3 animate-pulse'>
                    <p>|| श्री शनिेश्वराय नमः ||
                        <br />

                        <span className="text-4xl md:text-5xl font-bold text-yellow-300 mb-3 animate-pulse">
                            SHREE SHANIDEV MANDIR
                        </span>
                    </p>

                </div>
                <div className="z-100   text-center px-4">
                    <img src={Shanidev} className='w-[68%] rounded-t-full rounded-b-xl border-amber-300 border-4 ' />

                </div>
            </div>
        </div>
    );
}

// import React from "react";
// import Shanidev from "../assets/logo.webp";
// import FallingLeaves from './FallingLeaves';

// export default function Header() {
//     return (

//         <div className="bg-gradient-to-b from-black via-gray-900 to-purple-900 min-h-fit flex items-center justify-around px-8 py-40 text-white">
//             <FallingLeaves />
//             <div className="flex-shrink-0 transition-all duration-1000 ease-in-out transform hover:scale-105 opacity-0 animate-fade-in">
//                 <img
//                     src={Shanidev}
//                     alt="Shree Shanidev"
//                     className="w-96 h-96 rounded-md object-cover shadow-xl"
//                 />
//             </div>

//             {/* Text with slide-up effect */}
//             <div className="ml-10 max-w-xl text-left transition-all duration-1000 ease-in-out transform opacity-0 animate-fade-in delay-300">
//                 <h2 className="text-3xl p-4 md:text-4xl font-bold text-yellow-300 mb-3 animate-pulse">
//                     || श्री शनिेश्वराय नमः ||
//                 </h2>
//                 <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide mb-6">
//                     SHREE SHANIDEV MANDIR
//                 </h1>

//                 <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold shadow-md transition hover:scale-105">
//                     Darshan Booking
//                 </button>
//             </div>
//         </div>
//     );
// }
