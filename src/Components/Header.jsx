import React from "react";
import Shanidev from "../assets/shanidev2.webp"; // Image of Shani Dev
import HeaderBg from "../assets/headerBg.mp4";

export default function Header() {
    return (
        <div className="relative min-h-screen flex items-center justify-center text-white overflow-hidden bg-black">
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
            <div className="w-full z-10 flex flex-col md:flex-row justify-evenly items-center text-center  ">
                <div className="text-xl md:text-3xl font-bold text-yellow-300 mb-4 md:mb-0">
                    || श्री शनिेश्वराय नमः ||
                    <br />
                    <span className="text-2xl md:text-5xl font-bold text-yellow-300 animate-pulse">
                        SHREE SHANIDEV MANDIR
                    </span>
                </div>

                <div>
                    <img
                        src={Shanidev}
                        className="w-[70%] md:w-[300px] lg:w-[350px] rounded-t-full rounded-b-xl border-amber-300 border-4"
                    />
                </div>
            </div>
        </div>
    );
}



// import React from "react";
// import Shanidev from "../assets/Shanidev2.webp"; // You can keep this if needed
// import FallingLeaves from "./FallingLeaves";
// import HeaderBg from "../assets/headerBg.mp4";

// export default function Header() {
//     return (
//         <div className="relative min-h-screen flex items-center justify-between text-white overflow-hidden bg-black">
//             {/* Background video */}
//             <video
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 className="absolute inset-0 w-full h-full object-cover z-0"
//             >
//                 <source src={HeaderBg} type="video/webm" />
//                 Your browser does not support the video tag.
//             </video>

//             {/* Foreground content */}
//             <div className=" w-full z-10 flex justify-center gap-200 items-center text-center ">

//                 <div>|| श्री शनिेश्वराय नमः ||
//                     <br />

//                     <span className="text-2xl md:text-5xl font-bold text-yellow-300 mb-3 animate-pulse">
//                         SHREE SHANIDEV MANDIR
//                     </span>
//                 </div>

//                 <div>
//                     <img src={Shanidev} className='w-[50%] rounded-t-full rounded-b-xl border-amber-300 border-4 ' />
//                 </div>


//             </div>

//         </div>
//     );
// }
