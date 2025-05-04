// components/Hero.tsx
import Image from 'next/image';

export default function Hero() {
	return (
		<section
			id='home'
			className='relative w-full bg-white py-28 px-6 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto'
		>
			{/* Texto principal */}
			<div className='lg:w-1/2 space-y-6 text-center lg:text-left'>
				<h1 className='text-4xl md:text-5xl font-bold text-gray-900 leading-tight'>
					We provide the <br />
					<span className='text-primary'>best food</span> for you
				</h1>
				<p className='text-gray-600 text-base md:text-lg'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nisi eu
					magna amet hac.
				</p>

				{/* Botones */}
				<div className='flex justify-center lg:justify-start gap-4'>
					<button className='bg-primary text-white px-6 py-2 rounded-md shadow hover:bg-orange-600 transition'>
						Book Table
					</button>
					<button className='border border-gray-400 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-100 transition'>
						Menu
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
					src='/assets/arepaburguer-logo.jpg' // imagen del plato sobrepuesta
					alt='Food dish'
					width={250}
					height={250}
					className='absolute -bottom-12 -left-12 z-20'
				/>
			</div>
		</section>
	);
}
