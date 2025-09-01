'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import type { Root2 } from '@/types';

const SPECIAL_CATEGORIES = [
	'Arepas Venezolanas',
	'Parrilla Mista',
	'Ronda Venezolana',
];

export default function SpecialDishes() {
	const [dishes, setDishes] = useState<Root2[]>([]);

	useEffect(() => {
		const fetchSpecialDishes = async () => {
			const res = await fetch('/api/menu/getData');
			const data: Root2[] = await res.json();
			const specials = data.filter((d) =>
				SPECIAL_CATEGORIES.includes(d.category)
			);
			setDishes(specials);
		};
		fetchSpecialDishes();
	}, []);

	return (
		<section
			className='py-20 bg-[#f2f4f5] px-6 max-w-7xl mx-auto text-center'
			id='menu'
		>
			<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
				Nossos Pratos Especiais
			</h2>
			<p className='text-gray-600 mb-10 max-w-xl mx-auto'>
				Aproveite uma variedade de refeições deliciosas cuidadosamente
				preparadas pelos nossos melhores chefs.
			</p>

			<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
				{dishes.map((dish) => (
					<div
						key={dish.id}
						className='bg-white shadow-lg rounded-tl-xl rounded-br-xl rounded-tr-md rounded-bl-md p-6 flex flex-col items-center text-center transition-transform hover:scale-105'
					>
						<Image
							src={dish.image}
							alt={`Categoria: ${dish.category}`}
							width={120}
							height={120}
							className='mb-4 rounded-full shadow'
						/>
						<h3 className='text-xl font-semibold text-gray-900 mb-2'>
							{dish.category}
						</h3>
						<p className='text-gray-500 text-sm mb-4'>{dish.description}</p>
						<ul className='w-full'>
							{dish.items.map((item) => (
								<li
									key={item.id}
									className='mb-2'
								>
									<span className='font-semibold text-gray-800'>
										{item.name}
									</span>
									{item.price && (
										<span className='ml-2 text-orange-500 font-bold'>
											{item.price}
										</span>
									)}
									{item.ingredients && (
										<p className='text-gray-500 text-xs'>{item.ingredients}</p>
									)}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
}
