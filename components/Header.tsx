import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const navItems = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "/about" },
    { id: 3, name: "Products", link: "/products" },
    { id: 4, name: "Gallery", link: "/gallery" },
    { id: 5, name: "Contact Us", link: "/contact-us" }
];


const Header = () => {
    return (
        <main className='md:py-5 md:px-10 py-4 px-2 flex items-center justify-between fixed top-0 w-full shadow-lg shadow-gray-200'>
            <Image src={'/images/logo.png'} alt='Logo' width={400} height={100} className='hidden' />
            <Image src={'/images/logo.png'} alt='Logo' width={200} height={100} />
            <div className='md:flex items-center gap-5 hidden'>
                {navItems.map((item) => (
                    <Link key={item.id} href={item.link} className='relative group py-1'>
                        <span className='font-bold text-xl'>{item.name}</span>
                        <span className='absolute left-0 bottom-0 w-0 h-1 bg-red-500 group-hover:w-full transition-all'></span>
                    </Link>

                ))}
            </div>

        </main>
    )
}

export default Header
