// import React from 'react';
// import Temple from '../assets/icon/temple.png';
// import Deepak from '../assets/icon/deepak.avif';
// import Tithi from '../assets/icon/tithi.jpg';

// const cardData = [
//     {
//         title: "Morning Darshan",
//         desc: "Temple opens for morning darshan from 6:00 AM to 11:30 AM.",
//         img: Temple
//     },
//     {
//         title: "Evening Darshan",
//         desc: "Evening darshan starts at 5:00 PM and ends at 8:00 PM.",
//         img: Deepak
//     },
//     {
//         title: "Aarti Timings",
//         desc: "Aarti is performed daily at 6:30 AM and 7:00 PM.",
//         img: Tithi
//     }
// ];

// const MandirTiming = () => {
//     return (
//         <div className='bg-gradient-to-r from-[#8282e2] via-[#302b63] to-[#382f80] py-16 px-6 text-white'>
//             <div className="max-w-7xl mx-auto text-center">
//                 <h1 className='text-4xl md:text-5xl font-bold mb-12'>Mandir Timings</h1>
//                 <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
//                     {cardData.map((item, index) => (
//                         <div
//                             key={index}
//                             className='bg-white bg-opacity-10 rounded-2xl shadow-lg backdrop-blur-lg overflow-hidden hover:scale-105 transform transition duration-300'
//                         >
//                             <img
//                                 src={item.img}
//                                 alt={item.title}
//                                 className='w-full h-56 object-cover'
//                             />
//                             <div className='p-6 text-left'>
//                                 <h2 className='text-2xl font-semibold text-yellow-300 mb-2'>{item.title}</h2>
//                                 <p className='text-gray-200'>{item.desc}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default MandirTiming;


import React from 'react';
import Temple from '../assets/icon/temple.png';
import Deepak from '../assets/icon/deepak.avif';
import Tithi from '../assets/icon/tithi.jpg';

const cardData = [
    {
        title: "Morning Darshan",
        desc: "Temple opens for morning darshan from 6:00 AM to 11:30 AM.",
        img: Temple
    },
    {
        title: "Evening Darshan",
        desc: "Evening darshan starts at 5:00 PM and ends at 8:00 PM.",
        img: Deepak
    },
    {
        title: "Aarti Timings",
        desc: "Aarti is performed daily at 6:30 AM and 7:00 PM.",
        img: Tithi
    }
];

const MandirTiming = () => {
    return (
        <div className="bg-gradient-to-b from-black via-gray-900 to-purple-900 px-6 text-white min-h-fit py-30">
            <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-12 text-purple-300 drop-shadow">
                    Mandir Timings
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {cardData.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#2e2a3d] bg-opacity-90 rounded-2xl shadow-xl backdrop-blur-lg overflow-hidden hover:scale-105 transform transition duration-300"
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-6 text-left">
                                <h2 className="text-2xl font-semibold text-purple-200 mb-2">
                                    {item.title}
                                </h2>
                                <p className="text-gray-300">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MandirTiming;
