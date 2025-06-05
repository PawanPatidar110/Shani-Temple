import React from 'react';

const importantDates = [
    {
        date: '2025-01-11',
        title: 'Shani Jayanti',
        description: 'Birthday of Lord Shani Dev.',
    },
    {
        date: '2025-05-31',
        title: 'Shani Amavasya',
        description: 'A powerful day for worshipping Shani Dev.',
    },
    {
        date: '2025-06-07',
        title: 'Shani Trayodashi',
        description: 'Auspicious day for remedies of Shani dosha.',
    },
    {
        date: '2025-11-01',
        title: 'Shani Shanti Puja',
        description: 'Special puja to calm Shani effects.',
    },
];

const today = new Date().toISOString().split('T')[0];

const ShaniCalendar = () => {
    return (
        <div className="min-h-fit bg-gradient-to-t from-black via-gray-900 to-purple-900 px-6 pb-90 py-20 text-white">
            <div className="max-w-3xl mx-auto bg-black bg-opacity-70 p-6 rounded-2xl shadow-lg">
                <h1 className="text-3xl text-purple-400 font-bold mb-6 text-center">🪐 ShaniDev Calendar – 2025</h1>

                <ul className="space-y-4">
                    {importantDates.map(({ date, title, description }, idx) => (
                        <li
                            key={idx}
                            className={`p-4 rounded-lg transition duration-200 ${today === date
                                ? 'bg-purple-700 border border-purple-300'
                                : 'bg-gray-800 hover:bg-purple-800'
                                }`}
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <h2 className="text-xl font-semibold text-white">{title}</h2>
                                    <p className="text-sm text-purple-200">{description}</p>
                                </div>
                                <div className="text-right text-sm text-gray-300">{new Date(date).toDateString()}</div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ShaniCalendar;

