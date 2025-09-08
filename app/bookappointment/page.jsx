"use client";

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function AppointmentPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        time: null,
        date: null,
        message: "",
    });

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const validateForm = () => {
        const { firstName, lastName, email, phone, time, date, message } = formData;

        if (!firstName || !lastName || !email || !phone || !time || !date || !message) {
            toast.error("All fields are required.");
            return false;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            toast.error("Please enter a valid email address.");
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

        toast.success("Appointment booked successfully!");
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            time: null,
            date: null,
            message: "",
        });
    };

    return (
        <section className="w-full">
            <div className="flex flex-col md:flex-row w-full max-w-full lg:max-w-6xl mx-auto shadow-lg rounded-xl overflow-hidden">

               
                <div className="w-full md:w-1/2 bg-white flex flex-col justify-center items-center px-6 md:px-12 py-12">
                    <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-[#0474ED]">
                        Book Appointment
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

                     
                        <div className="flex flex-col md:flex-row gap-4">
                            <DatePicker
                                selected={formData.time}
                                onChange={(time) => setFormData({ ...formData, time })}
                                showTimeSelect
                                showTimeSelectOnly
                                timeIntervals={15}
                                timeCaption="Time"
                                dateFormat="h:mm aa"
                                placeholderText="Select Time"
                                className="w-full md:flex-1 px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#0474ED]"
                            />
                            <DatePicker
                                selected={formData.date}
                                onChange={(date) => setFormData({ ...formData, date })}
                                placeholderText="Select Date"
                                className="w-full md:flex-1 px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#0474ED]"
                            />
                        </div>

                        
                        <textarea
                            name="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Short Message"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 resize-none placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0474ED]"
                        />

                        <button
                            type="submit"
                            className="w-full bg-[#0474ED] text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium"
                        >
                            Book Appointment
                        </button>
                    </form>

                    <ToastContainer position="top-center" autoClose={3000} />
                </div>

                
                <div className="w-full md:w-1/2 bg-[#DEEEFF] flex justify-center items-center px-6 md:px-12 py-12">
                    <Image
                        src="/bookappointment.png"
                        alt="Book Appointment"
                        width={600}
                        height={450}
                        className="object-contain w-full h-auto"
                    />
                </div>
            </div>
        </section>
    );
}
