"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function NavbarComponent() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const links = [
        { href: "/", label: "Home" },
        { href: "/aboutus", label: "About" },
        { href: "/consultants", label: "Consultants" },
        { href: "/ourservices", label: "Service" },
        { href: "/contactus", label: "Contact" },
    ];

    const isActive = (href) =>
        pathname === href
            ? "text-blue-600 border-b-2 border-blue-600"
            : "text-gray-700 hover:text-blue-600";

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-5 flex items-center justify-between py-3">

                <Link href="/" className="flex items-center">
                    <Image
                        src="/hcarelogo.png"
                        alt="Hunter Care"
                        width={120}
                        height={50}
                        className="h-10 w-auto"
                    />
                </Link>


                <div className="hidden md:flex items-center space-x-6">
                    {links.map(({ href, label }) => (
                        <Link key={href} href={href} className={`${isActive(href)} pb-1`}>
                            {label}
                        </Link>
                    ))}
                    <Link
                        href="/bookappointment"
                        className="bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700 transition"
                    >
                        Book Appointment
                    </Link>
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden flex items-center text-gray-700 hover:text-blue-600 focus:outline-none"
                >
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>


            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-3">
                    {links.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className={`${isActive(href)} block pb-1`}
                            onClick={() => setIsOpen(false)}
                        >
                            {label}
                        </Link>
                    ))}
                    <Link
                        href="/bookappointment"
                        className="block bg-blue-600 text-white px-4 py-2 rounded-md text-center hover:bg-blue-700 transition"
                        onClick={() => setIsOpen(false)}
                    >
                        Book Appointment
                    </Link>
                </div>
            )}
        </nav>
    );
}
