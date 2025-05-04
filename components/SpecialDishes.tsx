// components/SpecialDishes.tsx
import Image from 'next/image';

const dishes = [
	{
		name: 'Lamp with Sauce',
		desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
		price: '$12.50',
		rating: 4.8,
		image: '/assets/dishes/arepas.webp',
	},
	{
		name: 'Fried Chicken',
		desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
		price: '$10.00',
		rating: 4.5,
		image: '/assets/dishes/empanadas.webp', // updated image path
	},
	{
		name: 'Special Soup and Creamer',
		desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
		price: '$9.75',
		rating: 4.7,
		image: '/assets/dishes/burger.jpg', // updated image path
	},
];

export default function SpecialDishes() {
	return (
		<section
			className='py-20 bg-white px-6 max-w-7xl mx-auto text-center'
			id='menu'
		>
			<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
				Our Special Dishes
			</h2>
			<p className='text-gray-600 mb-10 max-w-xl mx-auto'>
				Enjoy a variety of delicious meals carefully prepared by our top chefs.
			</p>

			<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
				{dishes.map((dish, idx) => (
					<div
						key={idx}
						className='bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center'
					>
						<Image
							src={dish.image}
							alt={dish.name}
							width={120}
							height={120}
							className='mb-4'
						/>
						<h3 className='text-xl font-semibold text-gray-900 mb-2'>
							{dish.name}
						</h3>
						<p className='text-gray-500 text-sm mb-4'>{dish.desc}</p>
						<div className='flex items-center justify-between w-full px-4 text-gray-700 font-medium'>
							<span>{dish.price}</span>
							<span className='flex items-center gap-1'>⭐ {dish.rating}</span>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
