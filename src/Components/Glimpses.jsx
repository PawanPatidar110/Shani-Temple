import React, { useEffect, useRef } from "react";
import ShaniDev from "../assets/Shanidev.jpg";
import Shanidev2 from "../assets/shanidev2.jpg";
import Shanidev3 from "../assets/shanidev3.jpg";
import Shanidevgate from "../assets/shanidevgate.jpg"
import Shanidevgate2 from "../assets/shaniget.jpg"

const originalEvents = [
    { title: "Om Sham Shanaishcharaya Namah.", image: ShaniDev },
    { title: "Om Sham Shanaishcharaya Namah.", image: Shanidev2 },
    { title: "Om Sham Shanaishcharaya Namah.", image: Shanidev3 },
    { title: "Om Sham Shanaishcharaya Namah.", image: Shanidevgate },
    { title: "Om Sham Shanaishcharaya Namah.", image: Shanidevgate2 },
    { title: "Om Sham Shanaishcharaya Namah.", image: Shanidev3 },
];

const CARD_WIDTH = 320;
const GAP = 16;
const SCROLL_AMOUNT = CARD_WIDTH + GAP;
const VISIBLE_CARDS = 3;

export default function Glimpses() {
    const scrollRef = useRef(null);

    const events = [
        ...originalEvents.slice(-VISIBLE_CARDS),
        ...originalEvents,
        ...originalEvents.slice(0, VISIBLE_CARDS),
    ];

    const scrollToIndex = (index) => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({
                left: index * SCROLL_AMOUNT,
                behavior: "instant",
            });
        }
    };

    const handleNext = () => {
        if (!scrollRef.current) return;
        const container = scrollRef.current;
        const newPosition = container.scrollLeft + SCROLL_AMOUNT;
        container.scrollTo({ left: newPosition, behavior: "smooth" });
    };

    const handlePrev = () => {
        if (!scrollRef.current) return;
        const container = scrollRef.current;
        const newPosition = container.scrollLeft - SCROLL_AMOUNT;
        container.scrollTo({ left: newPosition, behavior: "smooth" });
    };

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        // Start from the real first slide
        container.scrollLeft = originalEvents.length * SCROLL_AMOUNT;

        const handleScroll = () => {
            const maxScroll = (originalEvents.length + VISIBLE_CARDS) * SCROLL_AMOUNT;
            const minScroll = VISIBLE_CARDS * SCROLL_AMOUNT;

            if (container.scrollLeft >= maxScroll) {
                container.scrollLeft = minScroll;
            } else if (container.scrollLeft <= 0) {
                container.scrollLeft = originalEvents.length * SCROLL_AMOUNT;
            }
        };

        container.addEventListener("scroll", handleScroll);
        return () => container.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="w-full py-16 bg-gradient-to-tr from-[#fefcfe] via-[#5c49c7] to-[#2a1b68]">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-purple-200 mb-4">
                    A few glimpses from the ground
                </h2>
                <p className="text-gray-300 max-w-2xl mx-auto mb-12">
                    Captures from what’s happening in and around the temple and what our devotees are up to.
                </p>

                <div className="relative flex items-center justify-center">
                    {/* Left Button */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-27 z-10 bg-white text-black shadow-lg rounded-full w-10 h-10 flex items-center justify-center"
                    >
                        &#8249;
                    </button>

                    {/* Scrollable Carousel */}
                    <div
                        ref={scrollRef}
                        className="grid grid-flow-col auto-cols-[320px] gap-4 overflow-x-scroll scroll-smooth scrollbar-hide"
                        style={{ width: `${(CARD_WIDTH * VISIBLE_CARDS) + (GAP * (VISIBLE_CARDS - 1))}px` }}
                    >
                        {events.map((event, idx) => (
                            <div
                                key={idx}
                                className="relative w-[320px] rounded-xl overflow-hidden shadow-lg"
                            >
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="absolute inset-0 bg-black/40" />
                                <div className="absolute bottom-0 p-4 text-white z-10">
                                    <h3 className="text-lg font-semibold truncate">{event.title}</h3>
                                    <p className="text-sm">{event.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Button */}
                    <button
                        onClick={handleNext}
                        className="absolute right-27 z-10 bg-white text-black shadow-lg rounded-full w-10 h-10 flex items-center justify-center"
                    >
                        &#8250;
                    </button>
                </div>
            </div>
        </div>
    );
}




// import React, { useRef } from "react";
// import ShaniDev from "../assets/Shanidev.jpg";
// import Shanidev2 from "../assets/shanidev2.jpg";
// import Shanidev3 from "../assets/shanidev3.jpg";

// const events = [
//     {
//         title: "Sri Radhashtami Celebr...",
//         date: "Sep 23, 2023",
//         image: ShaniDev,
//     },
//     {
//         title: "ISKCON Juhu celebrate...",
//         date: "Sep 7, 2023",
//         image: Shanidev2,
//     },
//     {
//         title: "46th Anniversary Celbr...",
//         date: "Jan 15, 2024",
//         image: Shanidev3,
//     },
//     {
//         title: "46th Anniversary Celbr...",
//         date: "Jan 15, 2024",
//         image: ShaniDev,
//     },
//     {
//         title: "46th Anniversary Celbr...",
//         date: "Jan 15, 2024",
//         image: Shanidev2,
//     },
//     {
//         title: "46th Anniversary Celbr...",
//         date: "Jan 15, 2024",
//         image: Shanidev3,
//     },
//     {
//         title: "46th Anniversary Celbr...",
//         date: "Jan 15, 2024",
//         image: ShaniDev,
//     },

//     {
//         title: "46th Anniversary Celbr...",
//         date: "Jan 15, 2024",
//         image: Shanidev2,
//     },
// ];

// export default function Glimpses() {
//     const scrollRef = useRef(null);

//     const scroll = (offset) => {
//         if (scrollRef.current) {
//             scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
//         }
//     };

//     return (
//         <div className="w-full py-16 bg-gradient-to-r from-purple-900 via-black to-purple-900 text-white">
//             <div className="max-w-7xl mx-auto px-4 text-center">
//                 <h2 className="text-3xl md:text-4xl font-bold text-purple-200 mb-4">
//                     A few glimpses from the ground
//                 </h2>
//                 <p className="text-gray-300 max-w-2xl mx-auto mb-12">
//                     Captures from what’s happening in and around the temple and what our
//                     devotees are up to.
//                 </p>

//                 <div className="relative">
//                     <button
//                         onClick={() => scroll(-320)}
//                         className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-black shadow-lg rounded-full w-10 h-10 z-10 flex items-center justify-center"
//                     >
//                         &#8249;
//                     </button>

//                     <div
//                         ref={scrollRef}
//                         className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide px-12"
//                     >
//                         {events.map((event, idx) => (
//                             <div
//                                 key={idx}
//                                 className="min-w-[300px] max-w-[300px] relative rounded-xl overflow-hidden shadow-lg"
//                             >
//                                 <img
//                                     src={event.image}
//                                     alt={event.title}
//                                     className="w-full h-64 object-cover"
//                                 />
//                                 <div className="absolute inset-0 bg-black/40" />
//                                 <div className="absolute bottom-0 p-4 text-white z-10">
//                                     <h3 className="text-lg font-semibold truncate">
//                                         {event.title}
//                                     </h3>
//                                     <p className="text-sm">{event.date}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     <button
//                         onClick={() => scroll(320)}
//                         className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-black shadow-lg rounded-full w-10 h-10 z-10 flex items-center justify-center"
//                     >
//                         &#8250;
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }
