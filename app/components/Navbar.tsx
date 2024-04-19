import React from 'react'
import Link from 'next/link'
import ThemeSwitcher from './ThemeSwitcher';


export default function Navbar() {
	return (
		<nav className='w-[1320px] h-20 mx-auto mt-[30px] bg-[#f0f0f0] dark:bg-[#1c1c1c] border border-[#696969] rounded-full'>
			<div className=' h-full flex items-center'>
				<Link href='/' className=' ml-11 text-[#1c1c1c no-underline font-semibold text-2xl font-Oswald opacity-90 hover:opacity-100 transition-opacity duration-300'>vkar.blog</Link>
				<div className=' ml-[580px] flex gap-x-11 font-Quicksand'>
					<Link href='/about' className='text-[#1c1c1c] dark:text-[#f0f0f0] no-underline text-xl font-normal opacity-90 hover:opacity-100 transition-opacity duration-300'>About</Link>
					<Link href='/contact' className='text-[#1c1c1c] dark:text-[#f0f0f0] no-underline text-xl font-normal opacity-90 hover:opacity-100 transition-opacity duration-300'>Contact</Link>
					<Link href='/portfolio' className='text-[#1c1c1c] dark:text-[#f0f0f0] no-underline text-xl font-normal opacity-90 hover:opacity-100 transition-opacity duration-300'>Portfolio</Link>
					<Link href='https://buymeacoffee.com/signup' className='text-[#1c1c1c] dark:text-[#f0f0f0] no-underline text-xl font-normal opacity-90 hover:opacity-100 transition-opacity duration-300'>Support Me</Link>
					<ThemeSwitcher />
				</div>
			</div>
		</nav>
	);
}
