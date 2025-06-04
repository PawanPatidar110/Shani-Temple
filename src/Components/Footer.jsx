

import React from "react";
import { Linkedin } from "lucide-react";

const quickLinks = ["About", "Services", "Contact"];
const services = [
    "Account Outsourcing",
    "Taxation",
    "Business Registration",
    "Company Registration",
];

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 pt-12 pb-6 text-sm">
            <div className="max-w-4xl flex mx-auto px-6 justify-around ">
                {/* Contact */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Contact</h4>
                    <p>© 2025 by Shanidev Temple Trust</p>
                    <p>Shanidev Temple</p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                        {quickLinks.map((link) => (
                            <li key={link}>
                                <a href="#" className="hover:text-white">
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Services */}
                {/* <div>
                    <h4 className="text-white font-semibold mb-4">Services</h4>
                    <ul className="space-y-2">
                        {services.map((service) => (
                            <li key={service}>
                                <a href="#" className="hover:text-white">
                                    {service}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div> */}

                {/* Social Media */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Social Media</h4>
                    <a
                        href="#"
                        aria-label="Visit our LinkedIn"
                        className="flex items-center gap-2 hover:text-white"
                    >
                        <Linkedin className="w-4 h-4" /> LinkedIn
                    </a>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs text-gray-400 space-y-2">
                <p>
                    &copy; 2025 ShaniDev Temple Trust |
                    <a href="#" className="hover:text-white mx-1">Privacy Policy</a>|
                    <a href="#" className="hover:text-white mx-1">Terms & Conditions</a>|
                    <a href="#" className="hover:text-white mx-1">Credit</a>
                </p>


            </div>
        </footer>
    );
};

export default Footer;
