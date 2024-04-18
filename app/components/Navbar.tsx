import React from 'react'
import Link from 'next/link'

export default function Navbar() {
	return (
		<nav className='w-[1280px] h-20 mx-auto mt-[30px] bg-[#f0f0f0] border border-[#696969] rounded-full'>
			<div className=' h-full flex items-center'>
				<Link href='/' className=' ml-11 text-[#1c1c1c no-underline font-semibold text-2xl font-Oswald'>vkar.blog</Link>
				<div className=' ml-[480px] flex gap-x-11'>
					<Link href='/about' className='text-[#1c1c1c] no-underline font-semibold text-xl font-normal font-Quicksand'>About</Link>
					<Link href='/contact' className='text-[#1c1c1c] no-underline font-semibold text-xl font-normal font-Quicksand'>Contact</Link>
					<Link href='/portfolio' className='text-[#1c1c1c] no-underline font-semibold text-xl font-normal font-Quicksand'>Portfolio</Link>
					<Link href='/chat' className='text-[#1c1c1c] no-underline font-semibold text-xl font-normal font-Quicksand'>Chat</Link>
				</div>
			</div>
		</nav>
	);
}
