import ArticleCard from '../components/ArticleCard';

export default function Home() {
	return (
		<div className='p-4'>
			<div>
				<h1>Home of all the hottest share news</h1>
				<ArticleCard />
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
					error, quae quisquam libero ea quos fugiat. Reprehenderit quos, vitae
					fugiat asperiores molestiae veniam perspiciatis alias tempore, aperiam
					animi repellendus facere.
				</p>
				<div className='w-full h-8 bg-red-300'>
					<p>space for AD</p>
				</div>
			</div>
			<div className='my-4'>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
					quibusdam, voluptatibus, voluptate, quos voluptatum quia quae
					accusantium quod, facere quas ipsam. Quisquam quibusdam, voluptatibus,
					voluptate, quos voluptatum quia quae accusantium quod, facere quas
					ipsam.
				</p>
				<ArticleCard />
				<div className='w-full h-8 bg-red-300'>
					<p>space for AD</p>
				</div>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
					quibusdam, voluptatibus, voluptate, quos voluptatum quia quae
					accusantium quod, facere quas ipsam. Quisquam quibusdam, voluptatibus,
					voluptate, quos voluptatum quia quae accusantium quod, facere quas
					ipsam.
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
