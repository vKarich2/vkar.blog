import React from 'react'
import { getPostData, getSortedPostsData } from '@/lib/posts'
import { notFound } from 'next/navigation'
import getFormattedDate from '@/lib/getFormattedDate';
import Link from 'next/link';
import Image from 'next/image';


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

	const { image, title, date, category, readingDuration, author, contentHtml } = await getPostData(postId);

	const pubDate = getFormattedDate(date);

	return (
		<main className=' w-full mx-auto transition-all duration-300'>
			<div className='w-[1320px] flex flex-col items-center'>
				<Image className='mt-10 rounded-2xl' src={image} alt='Image' width={900} height={500} sizes='900x500' priority={true} />
				<h1 className='font-Oswald font-semibold text-3xl text-[#1c1c1c] dark:text-[#f0f0f0] mt-10'>{title}</h1>
				<div className='flex items-center justify-center gap-4 mt-6 font-Quicksand font-medium text-sm'>
					<p className='flex justify-center items-center bg-[#696969] dark:bg-[#f0f0f0] dark:text-[#1c1c1c] w-[100px] h-6 bg-[#d6d6d6] rounded-full'>{category}</p>
					<div className='w-[0.5px] h-[20px] rounded-full bg-[#1c1c1c] dark:bg-[#f0f0f0]'></div>
					<p className='text-[#1c1c1c] dark:text-[#f0f0f0]'>{pubDate}</p>
					<div className='w-[0.5px] h-[20px] rounded-full bg-[#1c1c1c] dark:bg-[#f0f0f0]'></div>
					<p className='flex gap-2'>{readingDuration}</p>
				</div>
				<article className='max-w-[900px] prose-p:text-[#696969] prose-p:dark:text-[#9c9c9c] font-Quicksand font-normal prose prose-headings:text-[#1c1c1c] dark:prose-headings:text-[#f0f0f0] prose-headings:font-Oswald prose-headings:font-medium prose-headings:text-2xl prose-headings:opacity-100 prose-img:mx-auto prose-img:rounded-2xl prose-img:w-[1320px] prose-li:text-[#696969] prose-li:dark:text-[#9c9c9c] prose-strong:dark:text-[#f0f0f0]'>
					<section className='text-[#1c1c1c] my-10 text-lg leading-relaxed' dangerouslySetInnerHTML={{ __html: contentHtml }} />
					<div className=' w-full h-[0.5px] bg-[#696969] dark:bg-[#9c9c9c] rounded-full mb-10'></div>	
				</article>	
			</div>
			<div className='flex flex-col max-w-[900px] ml-[210px]'>
				<div className='flex'>
					<Image className='rounded-full' src={author.image} alt='Author' width={75} height={75} sizes='75x75' priority={false} />
					<div className='flex flex-col justify-center ml-5 text-[#696969] dark:text-[#9c9c9c]'>
						<p className='font-Oswald font-semibold text-lg text-[#1c1c1c] dark:text-[#f0f0f0]'>{author.name}</p>
						<p className='font-Quicksand font-normal text-md'>{author.job}</p>
					</div>
				</div>
				<Link className='text-[#1c1c1c] dark:text-[#f0f0f0] font-Oswald font-semibold text-lg opacity-90 hover:opacity-100 transition-opacity duration-300 dark:text-[#f0f0f0] no-underline my-10' href='/'> &#128072; Back to home</Link>
			</div>
		</main>
	);
}
