'use client';

// components/Hero.tsx
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Hero() {
	const [logoSize, setLogoSize] = useState(200);

	useEffect(() => {
		function handleResize() {
			if (window.innerWidth < 480) {
				setLogoSize(100);
			} else if (window.innerWidth < 768) {
				setLogoSize(140);
			} else {
				setLogoSize(200);
			}
		}
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<section
			id='home'
			className='relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden md:mt-0'
		>
			{/* Imagen de fondo */}
			<Image
				src='/assets/hero-restaurant.jpg'
				alt='Restaurant background'
				fill
				style={{ objectFit: 'cover', objectPosition: 'center' }}
				className='z-0 opacity-60'
				priority
			/>
			{/* Overlay oscuro */}
			<div className='absolute inset-0 bg-black/70 z-10' />

			{/* Contenido centrado */}
			<div className='relative z-20 flex flex-col items-center text-center px-6 mt-30'>
				<Image
					src='/assets/arepaburguer-logo.png'
					alt='Logo ArepaBurguer'
					width={logoSize}
					height={logoSize}
				/>
				<h1 className='text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4'>
					ArepaBurguer
				</h1>
				<p className='text-lg md:text-2xl text-gray-100 mb-8 max-w-2xl'>
					A perfeita fusão da tradição venezuelana com hambúrgueres gourmet.
					Sinta a diferença!
				</p>
				<div className='flex gap-4'>
					<Link href='https://wa.me/555496650797'>
						<button className='hover:cursor-pointer bg-orange-500 text-white px-8 py-3 rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm shadow hover:bg-orange-600 transition text-lg font-semibold'>
							Pedir agora
						</button>
					</Link>
					<Link href='/menu'>
						<button className='hover:cursor-pointer border border-orange-500 text-orange-500 px-8 py-3 rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm hover:bg-orange-100 transition text-lg font-semibold bg-white/80'>
							Ver cardápio
						</button>
					</Link>
				</div>
				<div className='flex gap-4 mt-8'>
					<a
						href='https://www.facebook.com/profile.php?id=61578078020664'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Image
							src='/assets/facebook.svg'
							alt='Facebook'
							width={32}
							height={32}
							className='invert-[.9]'
						/>
					</a>
					<a
						href='https://www.instagram.com/arepaburguer1/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Image
							src='/assets/instagram.svg'
							alt='Instagram'
							width={32}
							height={32}
							className='invert-[.9]'
						/>
					</a>
				</div>
			</div>
		</section>
	);
}
