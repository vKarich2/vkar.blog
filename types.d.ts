type BlogPost = {
	image: string,
	id: string,
	title: string,
	date: string,
	category: string,
	readingDuration: string,
	author: {
		name: string,
		job: string,
		image: string,
	}
}

type NewsPost = {
	image: string,
	id: string,
	title: string,
	date: string,
	category: string,
	readingDuration: string
}