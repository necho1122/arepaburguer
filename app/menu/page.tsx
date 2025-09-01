'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import type { Root2 } from '@/types';

const MENU_ORDER = [
	'Arepas Venezolanas',
	'Empanadas Venezolanas',
	'Ronda Venezolana',
	'Parrilla Mista',
	'Lasanha',
	'Xis',
	'Hambúrguer',
	'Cachorros-quentes',
	'Porções Kids',
	'Açaí',
];

function sortMenu(menu: Root2[]) {
	const orderMap = new Map(MENU_ORDER.map((name, idx) => [name, idx]));
	return [
		...menu
			.filter((section) => orderMap.has(section.category))
			.sort((a, b) => orderMap.get(a.category)! - orderMap.get(b.category)!),
		...menu.filter((section) => !orderMap.has(section.category)),
	];
}

export default function MenuPage() {
	const [menuData, setMenuData] = useState<Root2[]>([]);

	useEffect(() => {
		const fetchMenuData = async () => {
			const response = await fetch('/api/menu/getData');
			const data = await response.json();
			setMenuData(data);
		};

		fetchMenuData();
	}, []);

	const sortedMenu = sortMenu(menuData);

	return (
		<main
			className='min-h-[60vh] bg-[#f2f4f5] flex flex-col items-center py-20 px-4'
			style={{
				backgroundImage: "url('/assets/pattern/dishes-pattern.png')",
				backgroundSize: '70px',
				backgroundRepeat: 'repeat',
				backgroundPosition: 'center',
			}}
		>
			{/* Fondo decorativo */}
			<div
				className='absolute inset-0 pointer-events-none'
				style={{ zIndex: '0', position: 'fixed' }}
			>
				<Image
					src='/assets/pattern/restaurant-plate.svg'
					alt='breakfast image'
					className='absolute top-20 left-6 opacity-10 w-24 sm:w-32 md:w-40 lg:w-52'
					width={220}
					height={220}
				/>
				<Image
					src='/assets/pattern/burger.svg'
					alt='Menu pattern'
					className='absolute bottom-10 right-6 opacity-10 w-28 sm:w-36 md:w-44 lg:w-56'
					width={250}
					height={250}
				/>
				<Image
					src='/assets/pattern/pizza.svg'
					alt='Menu pattern'
					className='absolute top-1/2 left-1/3 transform -translate-y-1/2 opacity-5 rotate-12 w-32 sm:w-40 md:w-48 lg:w-60'
					width={280}
					height={280}
				/>
				<Image
					src='/assets/pattern/vegetables.svg'
					alt='Menu pattern'
					className='absolute top-0 right-0 mt-4 mr-4 opacity-5 rotate-12 w-36 sm:w-44 md:w-52 lg:w-64'
					width={300}
					height={300}
				/>
			</div>
			<div className='mb-10 text-center mt-[20px]'>
				<h1
					className='text-4xl md:text-5xl font-extrabold text-orange-500 mb-2 drop-shadow-lg tracking-tight uppercase'
					style={{
						letterSpacing: '0.05em',
						textShadow: '2px 2px 0 #fff7e6, 4px 4px 0 #ffb347',
					}}
				>
					Cardápio
				</h1>
				<p className='text-lg md:text-xl text-gray-700 italic font-medium mb-2'>
					<span className='inline-block px-3 py-1 bg-orange-100 rounded-full shadow-sm'>
						&quot;Sabor venezuelano, paixão em cada mordida&quot;
					</span>
				</p>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl'>
				{sortedMenu.map((section) => (
					<div
						key={section.id}
						className='bg-white rounded-tl-xl rounded-br-xl rounded-tr-md rounded-bl-md shadow-lg p-6 flex flex-col items-center text-center transition-transform hover:scale-105'
					>
						{section.image && (
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									width: '150px',
									height: '150px',
									backgroundColor: '#FF6900',
									borderRadius: '50%',
								}}
							>
								<Image
									src={section.image}
									alt={section.category}
									width={140}
									height={140}
									className='rounded-full shadow'
								/>
							</div>
						)}
						<h2 className='text-xl font-bold text-orange-500 mb-2 mt-2'>
							{section.category}
						</h2>
						{section.description && (
							<p className='text-gray-600 text-sm mb-2'>
								{section.description}
							</p>
						)}
						<ul className='w-full'>
							{section.items.map((item) => (
								<li
									key={item.id}
									className='mb-3 text-left'
								>
									<div className='flex flex-wrap justify-between items-center gap-x-2'>
										<span className='font-semibold text-gray-800 text-sm'>
											{item.name}
										</span>
										{item.price && (
											<span className='text-orange-500 font-bold whitespace-nowrap ml-2'>
												{item.price}
											</span>
										)}
									</div>
									{item.ingredients && (
										<p className='text-gray-500 text-xs mt-1'>
											{item.ingredients}
										</p>
									)}
								</li>
							))}
						</ul>
						{section.adicionais && (
							<div className='mt-4 w-full'>
								<p className='font-semibold text-gray-700 mb-1'>Adicionais:</p>
								<ul>
									{section.adicionais.map((add) => (
										<li
											key={add.id}
											className='flex justify-between text-xs text-gray-600'
										>
											<span>{add.name}</span>
											<span className='text-orange-500 font-bold'>
												{add.price}
											</span>
										</li>
									))}
								</ul>
							</div>
						)}
					</div>
				))}
			</div>
		</main>
	);
}
