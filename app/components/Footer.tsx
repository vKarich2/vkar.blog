import React from 'react'
import Link from 'next/link'

export default function Footer() {
	return (
		<footer className=' w-full mx-auto mt-16 mb-5'>
			<div className='flex justify-around'>
				<h1 className=' font-Oswald font-semibold text-3xl'>vkar.blog</h1>
				<div className='flex flex-col gap-2'>
					<p className=' font-Oswald font-semibold text-xl mb-2'>Explore</p>
					<Link className='text-[#696969] dark:text-[#9c9c9c] font-Quicksand font-normal text-sm opacity-90 hover:opacity-100 transition-opacity duration-300' href={'/'}>Home</Link>
					<Link className='text-[#696969] dark:text-[#9c9c9c] font-Quicksand font-normal text-sm opacity-90 hover:opacity-100 transition-opacity duration-300' href={'/about'}>About</Link>
					<Link className='text-[#696969] dark:text-[#9c9c9c] font-Quicksand font-normal text-sm opacity-90 hover:opacity-100 transition-opacity duration-300' href={'/contact'}>Contact</Link>
					<Link className='text-[#696969] dark:text-[#9c9c9c] font-Quicksand font-normal text-sm opacity-90 hover:opacity-100 transition-opacity duration-300' href={'/portfolio'}>Portfolio</Link>
					<Link className='text-[#696969] dark:text-[#9c9c9c] font-Quicksand font-normal text-sm opacity-90 hover:opacity-100 transition-opacity duration-300' href={'https://www.buymeacoffee.com/vkar'}>Support Me</Link>
				</div>
				<div className='flex flex-col gap-2'>
					<p className=' font-Oswald font-semibold text-xl mb-2'>Follow</p>
					<Link className='text-[#696969] dark:text-[#9c9c9c] font-Quicksand font-normal text-sm opacity-90 hover:opacity-100 transition-opacity duration-300' href={'https://github.com/vKarich2'}>GitHub</Link>
					<Link className='text-[#696969] dark:text-[#9c9c9c] font-Quicksand font-normal text-sm opacity-90 hover:opacity-100 transition-opacity duration-300' href={'https://dribbble.com/vladyslav_kar'}>Dribbble</Link>
					<Link className='text-[#696969] dark:text-[#9c9c9c] font-Quicksand font-normal text-sm opacity-90 hover:opacity-100 transition-opacity duration-300' href={'https://www.instagram.com/vladyslav_kar_dev/'}>Instagram</Link>
					<Link className='text-[#696969] dark:text-[#9c9c9c] font-Quicksand font-normal text-sm opacity-90 hover:opacity-100 transition-opacity duration-300' href={'https://www.linkedin.com/in/vladyslav-karapetov-63295a243/'}>LinkedIn</Link>
				</div>
				<div className='flex flex-col gap-2'>
					<p className=' font-Oswald font-semibold text-xl mb-2'>Contacts</p>
					<a className='text-[#696969] dark:text-[#9c9c9c] font-Quicksand font-normal text-sm opacity-90 hover:opacity-100 transition-opacity duration-300' href={'mailto:vladyslav.karapetov.job@gmail.com'}>vladyslav.karapetov.job@gmail.com</a>
					<a className='text-[#696969] dark:text-[#9c9c9c] font-Quicksand font-normal text-sm opacity-90 hover:opacity-100 transition-opacity duration-300' href={'tel:+4917668147108'}>+49 176 68147108</a>
					<a className='text-[#696969] dark:text-[#9c9c9c] font-Quicksand font-normal text-sm opacity-90 hover:opacity-100 transition-opacity duration-300' href={'tel:+380963232463'}>+38 096 3232463</a>
				</div>
			</div>
			<p className='text-[#696969] dark:text-[#9c9c9c] flex justify-center mt-10 font-Quicksand font-normal text-sm'>&#169; 2024 vkar.blog All Rights Reserved.</p>
		</footer>
	)
}
