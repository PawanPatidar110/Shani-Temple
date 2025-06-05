



// import React from "react";
// import Shanidev from "../assets/HeroImage.png";

// export default function Header() {
//     return (
//         <div
//             className="bg-gradient-to-br from-[#fefcfe] via-[#5c49c7] to-[#2a1b68] text-white min-h-screen flex   p-8"

//         >   <div>
//                 <img src={Shanidev} className='w-[20%] rounded-lg' />
//             </div>
//             <div>   Shree Shaneshwaray namah        </div>
//         </div>
//     );
// }




import React from "react";
import Shanidev from "../assets/logo.webp";

export default function Header() {
    return (
        <div className="bg-gradient-to-b from-black via-gray-900 to-purple-900 min-h-fit flex items-center justify-around px-8 py-40 text-white">
            {/* Image with fade-in + scale-up effect */}
            <div className="flex-shrink-0 transition-all duration-1000 ease-in-out transform hover:scale-105 opacity-0 animate-fade-in">
                <img
                    src={Shanidev}
                    alt="Shree Shanidev"
                    className="w-96 h-96 rounded-md object-cover shadow-xl"
                />
            </div>

            {/* Text with slide-up effect */}
            <div className="ml-10 max-w-xl text-left transition-all duration-1000 ease-in-out transform opacity-0 animate-fade-in delay-300">
                <h2 className="text-3xl p-4 md:text-4xl font-bold text-yellow-300 mb-3 animate-pulse">
                    || श्री शनिेश्वराय नमः ||
                </h2>
                <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide mb-6">
                    SHREE SHANIDEV MANDIR
                </h1>

                <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold shadow-md transition hover:scale-105">
                    Darshan Booking
                </button>
            </div>
        </div>
    );
}
