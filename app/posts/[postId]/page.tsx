import React from 'react'
import { getPostData, getSortedPostsData } from '@/lib/posts'
import { notFound } from 'next/navigation'
import getFormattedDate from '@/lib/getFormattedDate';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/app/components/Footer';

export function generateStaticParams(){
	const posts = getSortedPostsData();

	return posts.map((post) => ({
		postId: post.id,

	}))
}

export function generateMetadata({ params }: { params: {postId: string}}) {
	const posts = getSortedPostsData();
	const { postId } = params;

	const post = posts.find(post => post.id === postId);

	if(!post){
		return {
			title: 'Post Not Found',
		}
	}

	return {
		title: post.title,
	}
}

export default async function Post({ params }: { params: {postId: string}}) {
	const posts = getSortedPostsData();
	const { postId } = params;

	if(!posts.find(post => post.id === postId)){
		return notFound();
	}

	const { image, title, date, category, time, author, contentHtml } = await getPostData(postId);

	const pubDate = getFormattedDate(date);

	return (
		<main className=' w-full mx-auto '>
			<div className='w-[1320px] flex flex-col items-center'>
				<Image className='mt-10 rounded-2xl' src={image} alt='Image' width={900} height={500} />
				<h1 className='font-Oswald font-semibold text-3xl text-[#1c1c1c] dark:text-[#f0f0f0] mt-10'>{title}</h1>
				<div className='flex items-center justify-center gap-4 mt-6 font-Quicksand font-medium text-sm'>
					<p className='flex justify-center items-center bg-[#696969] dark:bg-[#f0f0f0] dark:text-[#1c1c1c] w-[100px] h-6 bg-[#d6d6d6] rounded-full'>{category}</p>
					<div className='w-[0.5px] h-[20px] rounded-full bg-[#1c1c1c] dark:bg-[#f0f0f0]'></div>
					<p className='text-[#1c1c1c] dark:text-[#f0f0f0]'>{pubDate}</p>
					<div className='w-[0.5px] h-[20px] rounded-full bg-[#1c1c1c] dark:bg-[#f0f0f0]'></div>
					<div className='flex gap-2'>
						<p>&#128214;</p>
						<p>{time}</p>
					</div>
				</div>
				<article className='max-w-[900px] prose-p:opacity-60 font-Quicksand font-normal prose prose-h3:text-[#1c1c1c] dark:prose-h3:text-[#f0f0f0] prose-h3:font-Oswald prose-h3:font-medium prose-h3:text-2xl prose-h3:opacity-100'>
					<section className='dark:text-[#f0f0f0] text-[#1c1c1c] my-10 text-lg leading-relaxed' dangerouslySetInnerHTML={{ __html: contentHtml }} />
					<Link className='text-[#1c1c1c] font-Oswald font-semibold text-lg opacity-90 hover:opacity-100 transition-opacity duration-300 dark:text-[#f0f0f0] no-underline pb-4' href='/'> &#8592; Back to home</Link>
				</article>
			</div>
			<Footer />
		</main>
	);
}
