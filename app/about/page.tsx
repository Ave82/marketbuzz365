import ArticleCard from '@/components/ArticleCard';

export default function page() {
	return (
		<div className='p-4 w-full flex flex-col gap-4'>
			<div className='my-4'>
				<h1>About us page</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, rerum.
					Autem qui illo delectus explicabo eum alias sapiente adipisci voluptas
					voluptate nemo nesciunt cum porro aspernatur cupiditate, repudiandae
					aperiam doloremque.
				</p>
			</div>
			<div className='my-4 grid grid-flow-col gap-4'>
				<ArticleCard />
				<ArticleCard />
				<ArticleCard />
				<ArticleCard />
			</div>
		</div>
	);
}
