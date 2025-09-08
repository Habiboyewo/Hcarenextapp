"use client";

import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import Image from "next/image";

export default function ContactUsComponent() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const validateForm = () => {
        const { firstName, lastName, email, phone, message } = formData;

        if (!firstName || !lastName || !email || !phone || !message) {
            toast.error("All fields are required.");
            return false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            toast.error("Please enter a valid email.");
            return false;
        }

        if (phone.length < 7 || phone.length > 15) {
            toast.error("Enter a valid phone number.");
            return false;
        }

        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        toast.success("Message sent successfully!");
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
        });
    };

    return (
        <section className="w-full ">
            <div className="flex flex-col md:flex-row w-full max-w-full lg:max-w-6xl mx-auto shadow-lg rounded-xl ">


                <div className="w-full md:w-1/2 bg-white flex flex-col justify-center items-center px-6 md:px-12 py-12">
                    <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-[#0474ED]">
                        Contact Us
                    </h1>

                    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="First Name"
                                className="w-full md:flex-1 px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0474ED]"
                            />
                            <input
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Last Name"
                                className="w-full md:flex-1 px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0474ED]"
                            />
                        </div>

                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                                className="w-full md:flex-1 px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0474ED]"
                            />
                            <input
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Phone Number"
                                className="w-full md:flex-1 px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0474ED]"
                            />
                        </div>

                        <textarea
                            name="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 resize-none placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0474ED]"
                        />

                        <button
                            type="submit"
                            className="w-full bg-[#0474ED] text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium"
                        >
                            Send Message
                        </button>
                    </form>

                    <ToastContainer position="top-center" autoClose={3000} />

                    <div className="mt-8 text-center">
                        <h3 className="font-medium mb-4 ">OR</h3>
                        <div className="flex flex-wrap justify-center gap-6 text-gray-700">
                            <a href="#" className="flex flex-col items-center text-sm hover:text-[#0474ED] transition">
                                <FaFacebookF className="text-2xl mb-1" />
                                Facebook
                            </a>
                            <a href="#" className="flex flex-col items-center text-sm hover:text-[#0474ED] transition">
                                <CiMail className="text-2xl mb-1" />
                                Gmail
                            </a>
                            <a href="#" className="flex flex-col items-center text-sm hover:text-[#0474ED] transition">
                                <FaTwitter className="text-2xl mb-1" />
                                Twitter
                            </a>
                            <a href="#" className="flex flex-col items-center text-sm hover:text-[#0474ED] transition">
                                <FaInstagram className="text-2xl mb-1" />
                                Instagram
                            </a>
                        </div>
                    </div>
                </div>


                <div className="w-full md:w-1/2 bg-[#DEEEFF] flex justify-center items-center px-6 md:px-12 py-12">
                    <Image
                        src="/contactus.png"
                        alt="Contact Us"
                        width={600}
                        height={450}
                        className="object-contain w-full h-auto"
                    />
                </div>
            </div>
        </section>
    );
}
