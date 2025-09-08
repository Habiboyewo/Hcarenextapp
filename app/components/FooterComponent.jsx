"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function FooterComponent() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email) {
            setError("Email is required");
        } else if (!validateEmail(email)) {
            setError("Please enter a valid email address");
        } else {
            setError("");
            toast.success("Subscribed successfully!");
            setEmail("");
        }
    };

    return (
        <footer className="bg-black text-white">
            <div className="max-w-6xl m-auto px-6 md:px-10 lg:px-5 py-12 grid grid-cols-1 md:grid-cols-5 gap-12 text-center md:text-left">
               
                <div className="md:col-span-2">
                    <div className="flex flex-col items-center md:items-start">
                        <Image
                            src="/hcarelogo.png"
                            alt="Hunter Care"
                            width={90}
                            height={60}
                        />
                        <h6 className="mt-3 text-lg font-semibold">Hunter Care</h6>
                        <p className="text-sm mt-2 leading-relaxed text-gray-300 max-w-md">
                            Lorem ipsum dolor sit amet consectetur. Ut in in quam posuere.
                        </p>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="flex mt-5 justify-center md:justify-start"
                    >
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-white text-black rounded-l-md px-3 py-2 text-sm focus:outline-none w-[150px] sm:w-[200px] md:w-[160px] lg:w-[200px]"
                        />
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded-r-md text-sm font-medium hover:bg-blue-700 transition whitespace-nowrap"
                        >
                            Subscribe →
                        </button>
                    </form>
                    {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
                    <ToastContainer position="top-center" />
                </div>

                
                <div>
                    <h6 className="text-lg font-semibold mb-4">Useful Links</h6>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
                        <li><Link href="/aboutus" className="hover:text-blue-400 transition-colors">About</Link></li>
                        <li><Link href="/ourservices" className="hover:text-blue-400 transition-colors">Services</Link></li>
                        <li><Link href="/consultants" className="hover:text-blue-400 transition-colors">Consultants</Link></li>
                        <li><Link href="/contactus" className="hover:text-blue-400 transition-colors">Contact</Link></li>
                        <li><Link href="/bookappointment" className="hover:text-blue-400 transition-colors">Book Appointment</Link></li>
                    </ul>
                </div>

               
                <div>
                    <h6 className="text-lg font-semibold mb-4">Opening Hours</h6>
                    <p className="text-sm">Monday - Sunday: 24hrs</p>
                    <p className="text-sm">Emergency services: 24hrs</p>
                </div>

                <div>
                    <h6 className="text-lg font-semibold mb-4">Contacts</h6>
                    <ul className="space-y-2 text-sm">
                        <li className="flex items-center justify-center md:justify-start gap-2 transition-colors hover:text-blue-400 cursor-pointer">
                            <FaFacebookF /> <Link href="https://facebook.com">Facebook</Link>
                        </li>
                        <li className="flex items-center justify-center md:justify-start gap-2 transition-colors hover:text-blue-400 cursor-pointer">
                            <FaInstagram /> <Link href="https://instagram.com">Instagram</Link>
                        </li>
                        <li className="flex items-center justify-center md:justify-start gap-2 transition-colors hover:text-blue-400 cursor-pointer">
                            <FaTwitter /> <Link href="https://twitter.com">Twitter</Link>
                        </li>
                        <li className="flex items-center justify-center md:justify-start gap-2 transition-colors hover:text-blue-400 cursor-pointer">
                            <CiMail /> <Link href="mailto:info@huntercare.com">Gmail</Link>
                        </li>
                    </ul>
                </div>
            </div>

            
            <div className="border-t border-gray-700 text-center py-4 text-xs text-gray-400">
                © {new Date().getFullYear()} Hunter Care. All rights reserved.
            </div>
        </footer>
    );
}
