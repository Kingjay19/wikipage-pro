"use client";
import { useState, useRef, useEffect } from 'react';
import Link from "next/link";
import { HamburgerMenu, CloseCircle } from 'iconsax-reactjs';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current && 
                !menuRef.current.contains(event.target as Node) &&
                buttonRef.current && 
                !buttonRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return(
        <div className="mb-10 p-6 border-b-1 border-gray-200 lg:p-8">
            <div className="flex mx-auto items-center justify-between gap-4 font-bold md:mx-10">
                <Link href="/">
                    <h1 className="text-2xl md:text-3xl">WikiPage Pro</h1>
                </Link>
                <div className="flex items-center gap-2 text-sm lg:text-base">
                    <Link href="/#services" scroll={true} className="hidden py-2 px-3 hover:border-blue-600 hover:border-b-2 hover:transition hover:duration-300 md:block">Our Works</Link>
                    <Link href="/about-us" className="hidden py-2 px-3 hover:border-blue-600 hover:border-b-2 hover:transition hover:duration-300 md:block">About Us</Link>
                    <Link href="/contact" className="bg-blue-600 rounded-full py-3 px-4 text-white hover:bg-blue-700">Contact Us</Link>
                    <div 
                        ref={buttonRef}
                        onClick={toggleMenu} 
                        className='border-2 border-white p-2 rounded-md cursor-pointer md:hidden'
                    >
                        {isOpen ? (
                            <CloseCircle size="28" variant="Outline" className="fill-current" />
                        ) : (
                            <HamburgerMenu size="28" variant="Outline" className="fill-current" />
                        )}
                    </div>
                </div>
            </div>
            {isOpen && (
                <div 
                    ref={menuRef}
                    className='absolute right-5 bg-white text-gray-800 font-medium rounded-md shadow-md text-sm z-50'
                >
                    <div className='grid rounded-lg divide-y divide-gray-200'>
                        <Link href="/#services" className='px-6 py-4 rounded-t-lg hover:bg-blue-50' onClick={() => setIsOpen(false)}>Our Works</Link>
                        <Link href="/about-us" className='px-6 py-4 hover:bg-blue-50' onClick={() => setIsOpen(false)}>About Us</Link>
                        <Link href="/#faqs" className='px-6 py-4 hover:bg-blue-50' onClick={() => setIsOpen(false)}>FAQs</Link>
                        <Link href="/#achievements" className='px-6 py-4 rounded-b-lg hover:bg-blue-50' onClick={() => setIsOpen(false)}>Why Choose Us</Link>
                    </div>
                </div>
            )}
        </div>
    )
}