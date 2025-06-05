// import React, { useState } from 'react';

// // Sidebar Component
// const Sidebar = ({ items, title, onItemClick, activeItem }) => (
//     <aside className="w-full h-fit md:w-64 bg-white p-6 shadow-md rounded-lg mb-6 md:mb-0 md:mr-8">
//         <h2 className="text-purple-700 font-semibold text-xl mb-4 border-b pb-2">{title}</h2>
//         <ul className="space-y-4">
//             {items.map((item, idx) => (
//                 <li
//                     key={idx}
//                     onClick={() => onItemClick(item)}
//                     className={`cursor-pointer font-medium transition-colors duration-200 ${activeItem === item
//                         ? 'text-purple-700 font-semibold'
//                         : 'text-gray-700 hover:text-purple-700'
//                         }`}
//                 >
//                     {item}
//                 </li>
//             ))}
//         </ul>
//     </aside>
// );

// // Content Section Component
// const ContentSection = ({ heading, paragraphs }) => (
//     <section className="mb-12">
//         <h2 className="text-3xl font-bold text-purple-800 mb-4 border-l-4 border-purple-500 pl-3">{heading}</h2>
//         {paragraphs.map((text, idx) => (
//             <p key={idx} className="text-gray-800 text-lg mb-4 leading-relaxed">
//                 {text}
//             </p>
//         ))}
//     </section>
// );

// // Main About Page
// const About = () => {
//     const [selectItem, setSelectItem] = useState('Temple Overview');

//     const sidebarItems = [
//         'Temple Overview',
//         'Divine Revelation',
//         'Worship Practices',
//         'Festivals',
//         'Shani Dev Blogs',
//         'Visit Us',
//         'Management Team'
//     ];

//     const sections = [
//         {
//             heading: 'Juni Shani Dev Temple – A Testament to Faith and Miracles',
//             paragraphs: [
//                 `Nestled in the heart of Indore's Juni area, the Juni Shani Dev Temple stands as a beacon of devotion and spiritual heritage. Believed to be over 300 years old, this sacred site is renowned for its miraculous origins and unique worship practices.`,
//             ],
//         },
//         {
//             heading: 'A Divine Revelation',
//             paragraphs: [
//                 `The temple's inception is attributed to a miraculous event involving Pandit Gopal Das Tiwari, a blind priest. According to local lore, Lord Shani appeared to him in a dream, guiding him to excavate a statue buried beneath a 20-foot-high mound.`,
//                 `Upon following the divine instructions, Pandit Tiwari's eyesight was miraculously restored, and he unearthed the idol, which was then installed in the temple.`,
//             ],
//         },
//         {
//             heading: 'Unique Worship Practices',
//             paragraphs: [
//                 `Unlike typical depictions of Lord Shani, the idol here is adorned daily with sixteen traditional ornaments, including sindoor, colorful garments, and jewelry. This practice sets the temple apart, as most Shani temples feature unadorned black idols.`,
//                 `Each morning, the deity is bathed with milk and water, followed by the elaborate adornment process. Notably, sesame oil, commonly used in Shani worship, is not employed here.`,
//             ],
//         },
//         {
//             heading: 'Festivals and Celebrations',
//             paragraphs: [
//                 `The temple becomes a hub of activity during significant festivals, especially Shani Jayanti and Shani Amavasya. Devotees from various regions gather to participate in the celebrations, which include classical music and dance performances by renowned artists, enhancing the spiritual ambiance.`,
//             ],
//         },
//         {
//             heading: 'Blogs on Shani Dev',
//             paragraphs: [
//                 `To deepen your understanding of Lord Shani and his influence, explore these insightful articles:`,
//                 `• Shani Jayanti 2025: Date, Significance & Rituals Explained – 99pandit.com`,
//                 `• Shani Dev: The Mighty Planetary Deity and His Influence on Life – sanatanajourney.com`,
//                 `• Shani Dev: Dispelling the Myths About the God of Justice – cottage9.com`,
//             ],
//         },
//         {
//             heading: 'Visit Us',
//             paragraphs: [
//                 `📍 Location: 22, Shani Gali, Juni Indore, Indore, Madhya Pradesh 452007`,
//                 `⏰ Timings: Open daily from 5:30 AM to 10:00 PM`,
//                 `We welcome you to experience the divine presence of Lord Shani and partake in the temple's rich traditions.`,
//             ],
//         },
//     ];

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white py-10 px-6 md:px-30">
//             <div className="flex flex-col gap-10 md:flex-row md:mx-10 ">
//                 <Sidebar
//                     title="About Temple"
//                     items={sidebarItems}
//                     onItemClick={setSelectItem}
//                     activeItem={selectItem}
//                 />

//                 <main className="flex-1 md:mt-2">
//                     {sections
//                         .filter((_, idx) => sidebarItems[idx] === selectItem)
//                         .map((section, idx) => (
//                             <ContentSection
//                                 key={idx}
//                                 heading={section.heading}
//                                 paragraphs={section.paragraphs}
//                             />
//                         ))}
//                 </main>
//             </div>
//         </div>
//     );
// };

// export default About;

import React, { useState } from 'react';
import Pujari from '../assets/management/pujari.jpg';

// Sidebar Component
const Sidebar = ({ items, title, onItemClick, activeItem }) => (
    <aside className="w-full h-fit md:w-80 bg-white text-black p-10 shadow-md rounded-lg mb-6 md:mb-0 md:mr-8">
        <h2 className="text-purple-700 font-semibold text-xl mb-4 border-b pb-2">{title}</h2>
        <ul className="space-y-4">
            {items.map((item, idx) => (
                <li
                    key={idx}
                    onClick={() => onItemClick(item)}
                    className={`cursor-pointer font-medium transition-colors duration-200 ${activeItem === item
                        ? 'text-purple-700 font-semibold'
                        : 'text-gray-700 hover:text-purple-700'
                        }`}
                >
                    {item}
                </li>
            ))}
        </ul>
    </aside>
);

// Content Section Component
const ContentSection = ({ heading, paragraphs }) => (
    <section className="flex  flex-col mb-12 gap-y-10">
        <h2 className="text-5xl font-bold text-yellow-300 mb-4 border-l-4 border-yellow-500 pl-3">{heading}</h2>
        {paragraphs.map((text, idx) => (
            <p key={idx} className="text-gray-200 text-xl mb-4 text-wrap w-[70%] leading-relaxed">
                {text}
            </p>
        ))}
    </section>
);

// Team Card Component
const TeamCard = ({ name, role, img }) => (
    <div className="bg-purple-200 text-black rounded-xl shadow-md p-4 text-center hover:shadow-xl transition w-96">
        <img
            src={img}
            alt={name}
            className="w-80 h-80 object-cover rounded-full mx-auto mb-4"
        />
        <h3 className="text-lg font-bold text-purple-700">{name}</h3>
        <p className="text-sm text-gray-600">{role}</p>
    </div>
);

// Main About Page
const About = () => {
    const [selectItem, setSelectItem] = useState('Temple Overview');

    const sidebarItems = [
        'Temple Overview',
        'Worship Practices',
        'Festivals',
        'Shani Dev Blogs',
        'Management Team'
    ];

    const sections = [
        {
            heading: 'Juni Shani Dev Temple – A Testament to Faith and Miracles',
            paragraphs: [
                `Nestled in the heart of Indore's Juni area, the Juni Shani Dev Temple stands as a beacon of devotion and spiritual heritage. Believed to be over 300 years old, this sacred site is renowned for its miraculous origins and unique worship practices.`,
            ],
        },
        {
            heading: 'A Divine Revelation',
            paragraphs: [
                `The temple's inception is attributed to a miraculous event involving Pandit Gopal Das Tiwari, a blind priest. According to local lore, Lord Shani appeared to him in a dream, guiding him to excavate a statue buried beneath a 20-foot-high mound.`,
                `Upon following the divine instructions, Pandit Tiwari's eyesight was miraculously restored, and he unearthed the idol, which was then installed in the temple.`,
            ],
        },
        {
            heading: 'Unique Worship Practices',
            paragraphs: [
                `Unlike typical depictions of Lord Shani, the idol here is adorned daily with sixteen traditional ornaments, including sindoor, colorful garments, and jewelry. This practice sets the temple apart, as most Shani temples feature unadorned black idols.`,
                `Each morning, the deity is bathed with milk and water, followed by the elaborate adornment process. Notably, sesame oil, commonly used in Shani worship, is not employed here.`,
            ],
        },
        {
            heading: 'Festivals and Celebrations',
            paragraphs: [
                `The temple becomes a hub of activity during significant festivals, especially Shani Jayanti and Shani Amavasya. Devotees from various regions gather to participate in the celebrations, which include classical music and dance performances by renowned artists, enhancing the spiritual ambiance.`,
            ],
        },
        {
            heading: 'Blogs on Shani Dev',
            paragraphs: [
                `To deepen your understanding of Lord Shani and his influence, explore these insightful articles:`,
                `• Shani Jayanti 2025: Date, Significance & Rituals Explained – 99pandit.com`,
                `• Shani Dev: The Mighty Planetary Deity and His Influence on Life – sanatanajourney.com`,
                `• Shani Dev: Dispelling the Myths About the God of Justice – cottage9.com`,
            ],
        },
    ];

    const teamMembers = [
        {
            name: "Pt. Gopal Das Tiwari",
            role: "Chief Priest",
            img: Pujari,
        },
        {
            name: "Smt. Kamla Devi",
            role: "Cultural Head",
            img: Pujari,
        },
        {
            name: "Shri Ramesh Bhatt",
            role: "Temple Trustee",
            img: Pujari,
        },
    ];

    return (
        <div className="min-h-fit bg-gradient-to-t from-black via-gray-900 to-purple-900 pt-30 pb-90 px-6 md:px-20 text-white">
            <div className="flex flex-col gap-10 md:flex-row md:mx-10">
                <Sidebar
                    title="About Temple"
                    items={sidebarItems}
                    onItemClick={setSelectItem}
                    activeItem={selectItem}
                />

                <main className="flex-1 md:mt-2">
                    {selectItem === "Management Team" ? (
                        <div>
                            <h2 className="text-3xl font-bold text-yellow-300 mb-6 border-l-4 border-yellow-500 pl-3">
                                Meet the Management
                            </h2>
                            <div className="flex flex-wrap gap-8">
                                {teamMembers.map((member, idx) => (
                                    <TeamCard key={idx} {...member} />
                                ))}
                            </div>
                        </div>
                    ) : (
                        sections
                            .filter((_, idx) => sidebarItems[idx] === selectItem)
                            .map((section, idx) => (
                                <ContentSection
                                    key={idx}
                                    heading={section.heading}
                                    paragraphs={section.paragraphs}
                                />
                            ))
                    )}
                </main>
            </div>
        </div>
    );
};

export default About;

