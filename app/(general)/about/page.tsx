import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'About page',
	description: "About page for Freddy's first project",
	keywords: ['About', 'Freddy', 'information'],
}

export default function AboutPage() {
	return (
		<>
			<span className="text-7xl">About page</span>
		</>
	)
}
