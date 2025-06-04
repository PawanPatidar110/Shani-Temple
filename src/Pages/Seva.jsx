import React, { useState } from 'react';

const Seva = () => {
    const [activeTab, setActiveTab] = useState('donation');

    const [donationData, setDonationData] = useState({
        name: '',
        email: '',
        amount: '',
        message: '',
    });

    const [volunteerData, setVolunteerData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleDonationChange = (e) => {
        setDonationData({ ...donationData, [e.target.name]: e.target.value });
    };

    const handleVolunteerChange = (e) => {
        setVolunteerData({ ...volunteerData, [e.target.name]: e.target.value });
    };

    const handleDonationSubmit = (e) => {
        e.preventDefault();
        console.log('Donation Submitted:', donationData);
    };

    const handleVolunteerSubmit = (e) => {
        e.preventDefault();
        console.log('Volunteer Submitted:', volunteerData);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 text-white flex flex-col md:flex-row">
            {/* Sidebar */}
            <div className="w-full md:w-1/4 border-r border-purple-700 p-4 bg-black bg-opacity-70">
                <h2 className="text-xl font-bold mb-4 text-purple-400">Seva Categories</h2>
                <ul className="space-y-3">
                    <li>
                        <button
                            onClick={() => setActiveTab('donation')}
                            className={`w-full text-left px-4 py-2 rounded-lg ${activeTab === 'donation' ? 'bg-purple-700' : 'hover:bg-gray-800'
                                }`}
                        >
                            Donation Form
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => setActiveTab('volunteer')}
                            className={`w-full text-left px-4 py-2 rounded-lg ${activeTab === 'volunteer' ? 'bg-purple-700' : 'hover:bg-gray-800'
                                }`}
                        >
                            Volunteer Form
                        </button>
                    </li>

                </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6">
                {activeTab === 'donation' && (
                    <div className="max-w-xl mx-auto bg-black bg-opacity-60 p-6 rounded-2xl shadow-lg">
                        <h2 className="text-2xl font-semibold text-purple-400 mb-4 text-center">Donate to Shree ShaniDev Temple</h2>
                        <form onSubmit={handleDonationSubmit} className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                onChange={handleDonationChange}
                                className="w-full p-2 rounded-lg bg-gray-800 border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                onChange={handleDonationChange}
                                className="w-full p-2 rounded-lg bg-gray-800 border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                required
                            />
                            <input
                                type="number"
                                name="amount"
                                placeholder="Donation Amount (INR)"
                                onChange={handleDonationChange}
                                className="w-full p-2 rounded-lg bg-gray-800 border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                required
                            />
                            <textarea
                                name="message"
                                rows="3"
                                placeholder="Optional Message"
                                onChange={handleDonationChange}
                                className="w-full p-2 rounded-lg bg-gray-800 border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                            <button
                                type="submit"
                                className="w-full bg-purple-600 hover:bg-purple-700 transition py-2 rounded-lg font-semibold"
                            >
                                Donate Now
                            </button>
                        </form>
                    </div>
                )}

                {activeTab === 'volunteer' && (
                    <div className="max-w-xl mx-auto bg-black bg-opacity-60 p-6 rounded-2xl shadow-lg">
                        <h2 className="text-2xl font-semibold text-purple-400 mb-4 text-center">Become a Volunteer</h2>
                        <form onSubmit={handleVolunteerSubmit} className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                onChange={handleVolunteerChange}
                                className="w-full p-2 rounded-lg bg-gray-800 border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                onChange={handleVolunteerChange}
                                className="w-full p-2 rounded-lg bg-gray-800 border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                required
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                onChange={handleVolunteerChange}
                                className="w-full p-2 rounded-lg bg-gray-800 border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                required
                            />
                            <textarea
                                name="message"
                                rows="3"
                                placeholder="Why do you want to volunteer?"
                                onChange={handleVolunteerChange}
                                className="w-full p-2 rounded-lg bg-gray-800 border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                            <button
                                type="submit"
                                className="w-full bg-purple-600 hover:bg-purple-700 transition py-2 rounded-lg font-semibold"
                            >
                                Submit Volunteer Form
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Seva;



// import React, { useState } from 'react';

// const Seva = () => {
//     // Donation form state
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         amount: '',
//         message: '',
//     });

//     // Volunteer form state
//     const [volunteerData, setVolunteerData] = useState({
//         name: '',
//         email: '',
//         phone: '',
//         message: '',
//     });

//     // Handle donation form input change
//     const handleDonationChange = (e) => {
//         setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//     };

//     // Handle volunteer form input change
//     const handleVolunteerChange = (e) => {
//         setVolunteerData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//     };

//     // Handle donation form submit
//     const handleDonationSubmit = (e) => {
//         e.preventDefault();
//         console.log('Donation Submitted:', formData);
//         // TODO: connect to backend/payment API
//     };

//     // Handle volunteer form submit
//     const handleVolunteerSubmit = (e) => {
//         e.preventDefault();
//         console.log('Volunteer Submitted:', volunteerData);
//         // TODO: connect to backend or Firebase
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-purple-900 px-4 py-12 flex flex-col items-center">
//             {/* Donation Form */}
//             <div className="w-full max-w-md bg-black bg-opacity-60 text-white rounded-2xl shadow-2xl p-8">
//                 <h2 className="text-2xl font-bold text-purple-400 mb-6 text-center">Donate to Shree ShaniDev Temple</h2>

//                 <form onSubmit={handleDonationSubmit} className="space-y-4">
//                     <input
//                         type="text"
//                         name="name"
//                         placeholder="Your Name"
//                         className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
//                         onChange={handleDonationChange}
//                         required
//                     />
//                     <input
//                         type="email"
//                         name="email"
//                         placeholder="Your Email"
//                         className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
//                         onChange={handleDonationChange}
//                         required
//                     />
//                     <input
//                         type="number"
//                         name="amount"
//                         placeholder="Donation Amount (INR)"
//                         className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
//                         onChange={handleDonationChange}
//                         required
//                     />
//                     <textarea
//                         name="message"
//                         placeholder="Optional Message"
//                         className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
//                         rows="3"
//                         onChange={handleDonationChange}
//                     />
//                     <button
//                         type="submit"
//                         className="w-full bg-purple-600 hover:bg-purple-700 transition duration-300 py-2 rounded-lg font-semibold text-white"
//                     >
//                         Donate Now
//                     </button>
//                 </form>
//             </div>

//             {/* Volunteer Form */}
//             <div className="w-full max-w-md mt-16 bg-black bg-opacity-60 text-white rounded-2xl shadow-2xl p-8">
//                 <h2 className="text-2xl font-bold text-purple-400 mb-6 text-center">Become a Volunteer</h2>

//                 <form onSubmit={handleVolunteerSubmit} className="space-y-4">
//                     <input
//                         type="text"
//                         name="name"
//                         placeholder="Full Name"
//                         className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
//                         onChange={handleVolunteerChange}
//                         required
//                     />
//                     <input
//                         type="email"
//                         name="email"
//                         placeholder="Email"
//                         className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
//                         onChange={handleVolunteerChange}
//                         required
//                     />
//                     <input
//                         type="tel"
//                         name="phone"
//                         placeholder="Phone Number"
//                         className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
//                         onChange={handleVolunteerChange}
//                         required
//                     />
//                     <textarea
//                         name="message"
//                         placeholder="Why do you want to volunteer?"
//                         className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
//                         rows="3"
//                         onChange={handleVolunteerChange}
//                     />
//                     <button
//                         type="submit"
//                         className="w-full bg-purple-600 hover:bg-purple-700 transition duration-300 py-2 rounded-lg font-semibold text-white"
//                     >
//                         Submit Volunteer Form
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Seva;
