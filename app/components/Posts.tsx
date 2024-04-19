import React from 'react'
import { getSortedPostsData } from '@/lib/posts'
import ListItem from './ListItem';

export default function Posts() {
	const posts = getSortedPostsData()
	return (
		<section className=' mt-16'>
			<ul className='grid grid-cols-1 gap-y-10'>
				{posts.map(post => (
					<ListItem key={post.id} post={post} />
				))}
			</ul>
		</section>
	);
}
