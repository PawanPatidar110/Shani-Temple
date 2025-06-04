// import React from "react";
// import Shanidev from "../assets/shanidev2.jpg";

// export default function Header() {
//     return (
//         <div className="bg-gradient-to-br from-black via-purple-400 to-black text-white min-h-screen flex items-center justify-center p-8">
//             <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center gap-10">
//                 <div className="w-[40%] aspect-square rounded-full overflow-hidden border-4 border-purple-400">
//                     <img
//                         src={Shanidev}
//                         alt="Shri Shani Dev"
//                         className="object-cover w-full h-full"
//                     />
//                 </div>
//                 <div className="text-center lg:text-left">
//                     <h1 className="text-4xl md:text-5xl font-bold mb-4">||  श्री शनैश्चराय नमः ||</h1>
//                 </div>
//             </div>
//         </div>
//     );
// }




import React from "react";
import Shanidev from "../assets/shanidev3.webp";

export default function Header() {
    return (
        <div
            className="bg-cover bg-center bg-no-repeat text-white min-h-screen flex items-center justify-center p-8"
            style={{ backgroundImage: `url(${Shanidev})` }}
        >
            <div className="text-4xl md:text-5xl font-bold text-yellow-300 text-center tracking-wide drop-shadow-[2px_2px_4px_rgba(0,0,0,0.85)] bg-black/40 px-4 py-2 rounded-lg">
                || Shree Shanisha Waray Namah ||
            </div>
        </div>
    );
}
