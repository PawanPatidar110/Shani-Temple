

// import React from "react";
// import { Linkedin } from "lucide-react";

// const quickLinks = ["About", "Services", "Contact"];
// const services = [
//     "Account Outsourcing",
//     "Taxation",
//     "Business Registration",
//     "Company Registration",
// ];

// const Footer = () => {
//     return (
//         <footer className="bg-gray-800 text-gray-300 pt-12 pb-6 text-sm">
//             <div className="max-w-4xl flex mx-auto px-6 justify-around ">
//                 {/* Contact */}
//                 <div>
//                     <h4 className="text-white font-semibold mb-4">Contact</h4>
//                     <p>© 2025 by Shanidev Temple Trust</p>
//                     <p>Shanidev Temple</p>
//                 </div>

//                 {/* Quick Links */}
//                 <div>
//                     <h4 className="text-white font-semibold mb-4">Quick Links</h4>
//                     <ul className="space-y-2">
//                         {quickLinks.map((link) => (
//                             <li key={link}>
//                                 <a href="#" className="hover:text-white">
//                                     {link}
//                                 </a>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>

//                 {/* Services */}
//                 {/* <div>
//                     <h4 className="text-white font-semibold mb-4">Services</h4>
//                     <ul className="space-y-2">
//                         {services.map((service) => (
//                             <li key={service}>
//                                 <a href="#" className="hover:text-white">
//                                     {service}
//                                 </a>
//                             </li>
//                         ))}
//                     </ul>
//                 </div> */}

//                 {/* Social Media */}
//                 <div>
//                     <h4 className="text-white font-semibold mb-4">Social Media</h4>
//                     <a
//                         href="#"
//                         aria-label="Visit our LinkedIn"
//                         className="flex items-center gap-2 hover:text-white"
//                     >
//                         <Linkedin className="w-4 h-4" /> LinkedIn
//                     </a>
//                 </div>
//             </div>

//             {/* Bottom Bar */}
//             <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs text-gray-400 space-y-2">
//                 <p>
//                     &copy; 2025 ShaniDev Temple Trust |
//                     <a href="#" className="hover:text-white mx-1">Privacy Policy</a>|
//                     <a href="#" className="hover:text-white mx-1">Terms & Conditions</a>|
//                     <a href="#" className="hover:text-white mx-1">Credit</a>
//                 </p>


//             </div>
//         </footer>
//     );
// };

// export default Footer;




import React from "react";
import Logo from "../assets/logo.webp";
const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-black via-gray-900 to-purple-900 text-white pt-12 pb-6 text-sm">
            <div className="w-full flex  mx-auto px-6 justify-evenly items-center flex-col md:flex-row gap-40 max-w-6xl">
                {/* Logo & Description */}
                <div className='flex flex-col items-center text-center'>
                    <img src={Logo} alt="Temple Logo" className="w-32 mb-4 rounded-full" />
                    <p className="text-xl font-bold text-center">
                        SHRI SHANIDEV MANDIR JUNI INDORE
                    </p>
                    {/* <div className="flex gap-4 mt-4">
                        <a href="#"><i className="fab fa-instagram" /></a>
                        <a href="#"><i className="fab fa-youtube" /></a>
                        <a href="#"><i className="fab fa-whatsapp" /></a>
                        <a href="#"><i className="fas fa-map-marker-alt" /></a>
                    </div> */}
                </div>

                {/* Our Facilities */}
                {/* <div>
                    <h4 className="font-semibold text-lg mb-4">Our Facilities</h4>
                    <ul className="space-y-1 text-sm">
                        <li>Chola Abhishek — Rs. 500/-</li>
                        <li>Jalabhishek — Rs. 100/-</li>
                        <li>Mastkabhishek — Rs. 500/-</li>
                        <li>Atharvashish Path — Rs. 100/-</li>
                        <li>Sankatnashak Strot — Rs. 50/-</li>
                        <li>Vahan Pujan — Rs. 50/100 (2/4 Wheeler)</li>
                    </ul>
                </div> */}

                {/* Contact Info */}

                <div className='text-xl text-center'>
                    <h4 className="font-semibold text-2xl mb-4">Contact Us</h4>
                    <p className='text-md'>📞 Shri G.S. Mishra<br />+91 92004-84324</p>
                    <p className="mt-2 text-md">📞 Shri Ghanshyam Shukla (Manager) 09893699196</p>
                    <p className="mt-2 text-md">📍 Chandrabhaga Juni<br />Indore (M.P.) 452007</p>
                </div>

                {/* Map Embed */}
                <div className='text-center'>
                    <h4 className="font-semibold text-lg mb-4">Locate In Google Map</h4>
                    <iframe
                        title="Temple Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.417863725111!2d75.85992507501969!3d22.712704927821292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd0f84736e7b%3A0x5566679bbe8843b8!2sShani%20Dev%20Temple!5e0!3m2!1sen!2sin!4v1749125644226!5m2!1sen!2sin"
                        width="700"
                        height="300"
                        allowFullScreen=""
                        loading="lazy"
                        className=""
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-[#6c4c3a] mt-10 pt-6 text-center text-xs text-gray-300">
                <div className="flex flex-wrap justify-center gap-4 text-orange-300 text-xl font-medium">



                    <a href="#">Privacy Policy</a>

                </div>
                <p className="mt-3 text-lg">
                    Design and Maintained by <span className="text-yellow-400">Quantumatix Technology private limited</span>
                </p>
                <p className="mt-1 text-lg">
                    © 2025 ShaniDev Temple Trust. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
