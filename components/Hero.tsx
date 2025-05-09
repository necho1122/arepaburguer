// components/Hero.tsx
import Image from 'next/image';

export default function Hero() {
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
				className='z-0 opacity-60 bg-black/80 bg-white/80'
				priority
			/>
			{/* Overlay oscuro */}
			<div className='absolute inset-0 bg-black/70 z-10' />

			{/* Contenido centrado */}
			<div className='relative z-20 flex flex-col items-center text-center px-6 mt-20'>
				<Image
					src='/assets/arepaburguer-logo.png'
					alt='ArepaBurguer Logo'
					width={120}
					height={120}
					className='mb-6 rounded-full bg-white/80 p-2 shadow-lg'
				/>
				<h1 className='text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4'>
					ArepaBurguer
				</h1>
				<p className='text-lg md:text-2xl text-gray-100 mb-8 max-w-2xl'>
					The perfect blend of Venezuelan tradition and gourmet burgers. Taste
					the difference!
				</p>
				<div className='flex gap-4'>
					<button className='bg-orange-500 text-white px-8 py-3 rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm shadow hover:bg-orange-600 transition text-lg font-semibold'>
						Order Now
					</button>
					<button className='border border-orange-500 text-orange-500 px-8 py-3 rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm hover:bg-orange-100 transition text-lg font-semibold bg-white/80'>
						View Menu
					</button>
				</div>
				<div className='flex gap-4 mt-8'>
					<Image
						src='/assets/facebook.svg'
						alt='Facebook'
						width={32}
						height={32}
						className='invert-[.9]'
					/>
					<Image
						src='/assets/instagram.svg'
						alt='Instagram'
						width={32}
						height={32}
						className='invert-[.9]'
					/>
					<Image
						src='/assets/twitter.svg'
						alt='Twitter'
						width={32}
						height={32}
						className='invert-[.9]'
					/>
				</div>
			</div>
		</section>
	);
}
