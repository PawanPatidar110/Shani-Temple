import React, { useState } from 'react';

// Sidebar Component
const Sidebar = ({ items, title, onItemClick, activeItem }) => (
    <aside className="w-full h-fit md:w-64 bg-white p-6 shadow-md rounded-lg mb-6 md:mb-0 md:mr-8">
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
    <section className="mb-12">
        <h2 className="text-3xl font-bold text-purple-800 mb-4 border-l-4 border-purple-500 pl-3">{heading}</h2>
        {paragraphs.map((text, idx) => (
            <p key={idx} className="text-gray-800 text-lg mb-4 leading-relaxed">
                {text}
            </p>
        ))}
    </section>
);

// Main About Page
const About = () => {
    const [selectItem, setSelectItem] = useState('Temple Overview');

    const sidebarItems = [
        'Temple Overview',
        'Divine Revelation',
        'Worship Practices',
        'Festivals',
        'Shani Dev Blogs',
        'Visit Us',
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
        {
            heading: 'Visit Us',
            paragraphs: [
                `📍 Location: 22, Shani Gali, Juni Indore, Indore, Madhya Pradesh 452007`,
                `⏰ Timings: Open daily from 5:30 AM to 10:00 PM`,
                `We welcome you to experience the divine presence of Lord Shani and partake in the temple's rich traditions.`,
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white py-10 px-6 md:px-30">
            <div className="flex flex-col gap-10 md:flex-row md:mx-10 ">
                <Sidebar
                    title="About Temple"
                    items={sidebarItems}
                    onItemClick={setSelectItem}
                    activeItem={selectItem}
                />

                <main className="flex-1 md:mt-2">
                    {sections
                        .filter((_, idx) => sidebarItems[idx] === selectItem)
                        .map((section, idx) => (
                            <ContentSection
                                key={idx}
                                heading={section.heading}
                                paragraphs={section.paragraphs}
                            />
                        ))}
                </main>
            </div>
        </div>
    );
};

export default About;


// import React from 'react';

// // Sidebar Component
// const Sidebar = ({ items, title }) => (
//     <aside className="w-64 bg-white p-6 shadow-lg">
//         <h2 className="text-purple-700 font-semibold text-xl mb-4">{title}</h2>
//         <ul className="space-y-4">
//             {items.map((item, idx) => (
//                 <li key={idx} className="text-gray-700 hover:text-purple-700 cursor-pointer text-base font-medium">
//                     {item}
//                 </li>
//             ))}
//         </ul>
//     </aside>
// );

// // Content Section Component
// const ContentSection = ({ heading, paragraphs }) => (
//     <section className="mb-12">
//         <h2 className="text-3xl font-bold text-purple-700 mb-4">{heading}</h2>
//         {paragraphs.map((text, idx) => (
//             <p key={idx} className="text-lg text-gray-800 mb-4 leading-relaxed">{text}</p>
//         ))}
//     </section>
// );

// // Main About Page
// const About = () => {
//     const sidebarItems = [
//         'Temple Overview',
//         'Divine Revelation',
//         'Worship Practices',
//         'Festivals',
//         'Shani Dev Blogs',
//         'Visit Us'
//     ];

//     const sections = [
//         {
//             heading: 'Juni Shani Dev Temple – A Testament to Faith and Miracles',
//             paragraphs: [
//                 `Nestled in the heart of Indore's Juni area, the Juni Shani Dev Temple stands as a beacon of devotion and spiritual heritage. Believed to be over 300 years old, this sacred site is renowned for its miraculous origins and unique worship practices.`
//             ]
//         },
//         {
//             heading: 'A Divine Revelation',
//             paragraphs: [
//                 `The temple's inception is attributed to a miraculous event involving Pandit Gopal Das Tiwari, a blind priest. According to local lore, Lord Shani appeared to him in a dream, guiding him to excavate a statue buried beneath a 20-foot-high mound.`,
//                 `Upon following the divine instructions, Pandit Tiwari's eyesight was miraculously restored, and he unearthed the idol, which was then installed in the temple.`
//             ]
//         },
//         {
//             heading: 'Unique Worship Practices',
//             paragraphs: [
//                 `Unlike typical depictions of Lord Shani, the idol here is adorned daily with sixteen traditional ornaments, including sindoor, colorful garments, and jewelry. This practice sets the temple apart, as most Shani temples feature unadorned black idols.`,
//                 `Each morning, the deity is bathed with milk and water, followed by the elaborate adornment process. Notably, sesame oil, commonly used in Shani worship, is not employed here.`
//             ]
//         },
//         {
//             heading: 'Festivals and Celebrations',
//             paragraphs: [
//                 `The temple becomes a hub of activity during significant festivals, especially Shani Jayanti and Shani Amavasya. Devotees from various regions gather to participate in the celebrations, which include classical music and dance performances by renowned artists, enhancing the spiritual ambiance.`
//             ]
//         },
//         {
//             heading: 'Blogs on Shani Dev',
//             paragraphs: [
//                 `To deepen your understanding of Lord Shani and his influence, explore these insightful articles:`,
//                 `• Shani Jayanti 2025: Date, Significance & Rituals Explained – 99pandit.com`,
//                 `• Shani Dev: The Mighty Planetary Deity and His Influence on Life – sanatanajourney.com`,
//                 `• Shani Dev: Dispelling the Myths About the God of Justice – cottage9.com`
//             ]
//         },
//         {
//             heading: 'Visit Us',
//             paragraphs: [
//                 `📍 Location: 22, Shani Gali, Juni Indore, Indore, Madhya Pradesh 452007`,
//                 `⏰ Timings: Open daily from 5:30 AM to 10:00 PM`,
//                 `We welcome you to experience the divine presence of Lord Shani and partake in the temple's rich traditions.`
//             ]
//         }
//     ];

//     return (
//         <div className="flex min-h-screen bg-gradient-to-br from-purple-100 to-white">
//             <Sidebar title="About Temple" items={sidebarItems} />

//             <main className="flex-1 px-10 py-10 md:px-20 lg:px-32">
//                 <nav className="text-sm text-gray-600 mb-6">
//                     Home &gt; About &gt; <span className="text-black font-medium">Juni Shani Dev Temple</span>
//                 </nav>

//                 {sections.map((section, idx) => (
//                     <ContentSection key={idx} heading={section.heading} paragraphs={section.paragraphs} />
//                 ))}
//             </main>
//         </div>
//     );
// };

// export default About;
