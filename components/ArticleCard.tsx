/* eslint-disable @next/next/no-img-element */
import { CardTitle, CardContent, Card } from '@/components/ui/card';
import Link from 'next/link';

export default function ArticleCard() {
	//missing the props - waiting to see the data structure
	return (
		<Link
			href='#'
			className='h-full w-full relative overflow-hidden border-none'
		>
			<Card className='h-full w-full relative overflow-hidden border-none'>
				<img
					alt='News Image'
					className='absolute inset-0 w-full h-full object-cover'
					src='https://www.jeffbullas.com/wp-content/uploads/2023/04/best-AI-art-generator.jpg'
				/>
				<div className='absolute inset-0 bg-black/60' />
				<CardContent className='relative z-10 p-6'>
					<CardTitle className='text-white text-2xl font-bold mb-2'>
						Exciting News Title
					</CardTitle>
					<p className='text-gray-300 mb-4'>January 21, 2024</p>
					<hr className='border-gray-500 mb-4' />
					<p className='text-white hover:text-priamry'>Read More</p>
				</CardContent>
			</Card>
		</Link>
	);
}
