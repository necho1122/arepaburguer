// components/Hero.tsx
import Image from 'next/image';

export default function Hero() {
	return (
		<section
			id='home'
			className='relative w-full bg-[#f2f4f5] py-28 px-6 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto'
		>
			{/* Texto principal */}
			<div className='lg:w-1/2 space-y-6 text-center lg:text-left'>
				<h1 className='text-4xl md:text-5xl font-bold text-gray-900 leading-tight'>
					Welcome to <br />
					<span className='text-orange-500'>ArepaBurguer</span>
				</h1>
				<p className='text-gray-600 text-base md:text-lg'>
					Discover the perfect blend of Venezuelan arepas and gourmet burgers.
				</p>

				{/* Botones */}
				<div className='flex justify-center lg:justify-start gap-4'>
					<button className='bg-orange-500 text-white px-6 py-2 rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm shadow hover:bg-orange-600 transition'>
						Order Now
					</button>
					<button className='border border-orange-500 text-orange-500 px-6 py-2 rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm hover:bg-orange-100 transition'>
						View Menu
					</button>
				</div>

				{/* Íconos sociales */}
				<div className='flex justify-center lg:justify-start gap-4 mt-6'>
					<Image
						src='/assets/facebook.svg'
						alt='Facebook'
						width={24}
						height={24}
					/>
					<Image
						src='/assets/instagram.svg'
						alt='Instagram'
						width={24}
						height={24}
					/>
					<Image
						src='/assets/twitter.svg'
						alt='Twitter'
						width={24}
						height={24}
					/>
				</div>
			</div>

			{/* Imagen Hero */}
			<div className='lg:w-1/2 mt-10 lg:mt-0 relative'>
				<Image
					src='/assets/hero-restaurant.jpg' // reemplaza con tu imagen real
					alt='Restaurant interior'
					width={500}
					height={600}
					className='rounded-xl shadow-xl z-10 relative'
				/>
				<Image
					src='/assets/arepaburguer-logo.png' // imagen del logo del restaurante
					alt='ArepaBurguer Logo'
					width={250}
					height={250}
					className='absolute -bottom-12 -left-12 z-20'
				/>
			</div>
		</section>
	);
}
