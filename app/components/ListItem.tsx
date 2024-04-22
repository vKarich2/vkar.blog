import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import getFormattedDate from '@/lib/getFormattedDate';

type Props = {
	post: BlogPost
}

export default function ListItem({ post }: Props) {
	const { id, image, title, date, category, readingDuration, author } = post;
	const formattedDate = getFormattedDate(date);

	return (
		<div className=' flex border rounded-[20px] border-[#696969] w-[820px] h-[260px] transition-all duration-300'>
			<Image className=' rounded-l-[19px]' src={image} alt='post-image' width={460} height={260} sizes='460x260' priority={true} />
			<div className=' ml-[30px] flex flex-col justify-between'>
				<ul>
					<li className='flex flex-col'>
						<div className='flex items-center gap-4 font-Quicksand font-medium text-xs'>
							<p className='flex justify-center items-center bg-[#696969] dark:bg-[#f0f0f0] dark:text-[#1c1c1c] font-Quicksand font-normal text-xs w-[90px] h-5 bg-[#d6d6d6] rounded-full'>{category}</p>
							<div className='w-[0.5px] h-[20px] rounded-full bg-[#1c1c1c] dark:bg-[#f0f0f0]'></div>
							<p className='text-[#1c1c1c] dark:text-[#f0f0f0] my-5'>{formattedDate}</p>
							<div className='w-[0.5px] h-[20px] rounded-full bg-[#1c1c1c] dark:bg-[#f0f0f0]'></div>
							<p className='flex gap-1'>{readingDuration}</p>
						</div>
						<Link className=' max-w-[302px] no-underline text-[#1c1c1c] dark:text-[#f0f0f0] font-Oswald font-semibold text-xl leading-[30px] opacity-90 hover:opacity-100 transition-opacity duration-300' href={`/posts/${id}`}>{title}</Link>
					</li>
				</ul>
				<div>
					<div className=' w-[302px] h-[0.5px] bg-[#696969] rounded-full'></div>
					<div className='flex'>
						<div className='flex items-center gap-5'>
							<Image className=' w-[60px] h-[60px] rounded-full my-5' src={author.image} alt='avatar' width={60} height={60} sizes='60x60' priority={false} />
							<div className='text-[#696969]'>
								<p className='font-Oswald font-semibold text-sm text-[#1c1c1c] dark:text-[#f0f0f0]'>{author.name}</p>
								<p className='font-Quicksand font-normal text-xs'>{author.job}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}