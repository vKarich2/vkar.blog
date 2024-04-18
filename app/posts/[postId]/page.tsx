import React from 'react'
import { getPostData, getSortedPostsData } from '@/lib/posts'
import { notFound } from 'next/navigation'
import getFormattedDate from '@/lib/getFormattedDate';
import Link from 'next/link';

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

	const { title, date, contentHtml } = await getPostData(postId);

	const pubDate = getFormattedDate(date);

	return (
		<main className='px-6 prose prose-xl prose-slate dark:prose-invert mx-auto text-[#1c1c1c]'>
			<h1 className='text-3xl mt-4 mb-0 pt-10 text-[#1c1c1c]'>{title}</h1>
			<p className='mt-0 text-[#696969]'>{pubDate}</p>
			<article>
				<section className='text-[#696969]' dangerouslySetInnerHTML={{ __html: contentHtml }} />
				<p>
					<Link className='text-[#1c1c1c]' href='/'> &#8592; Back to home</Link>
				</p>
			</article>
		</main>
	);
}
