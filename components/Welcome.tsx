// components/Welcome.tsx
import Image from 'next/image';

export default function Welcome() {
	return (
		<section className='py-20 bg-[#f2f4f5] px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10'>
			{/* Imagen del plato */}
			<div className='w-full md:w-1/2 relative'>
				<Image
					src='/assets/dishes/welcome-plate.jpg'
					alt='Welcome Dish'
					width={600}
					height={600}
					className='rounded-tl-xl rounded-br-xl rounded-tr-md rounded-bl-md object-contain mx-auto shadow-lg'
				/>
			</div>

			{/* Texto descriptivo */}
			<div className='w-full md:w-1/2 text-center md:text-left'>
				<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
					Welcome to Our <br />{' '}
					<span className='text-orange-500'>Restaurant</span>
				</h2>
				<p className='text-gray-600 mb-6'>
					Lorem ipsum dolor sit amet consectetur adipiscing elit. Mauris dictum
					magna in quam vulputate, a pretium elit varius.
				</p>
				<button className='bg-orange-500 text-white py-3 px-6 rounded-tl-xl rounded-br-xl rounded-tr-md rounded-bl-md hover:bg-orange-600 transition shadow'>
					Book a table
				</button>
			</div>
		</section>
	);
}
