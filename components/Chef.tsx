// components/Chef.tsx
import Image from 'next/image';

export default function Chef() {
	return (
		<section className='py-20 px-6 bg-[#fff9f0] max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10'>
			{/* Imagen del Chef */}
			<div className='w-full md:w-1/2 relative'>
				<Image
					src='/assets/chef.jpg'
					alt='Chef Image'
					width={500}
					height={600}
					className='rounded-lg mx-auto'
				/>
			</div>

			{/* Texto */}
			<div className='w-full md:w-1/2 text-center md:text-left space-y-4'>
				<h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
					Our Experienced Chef
				</h2>
				<p className='text-gray-600'>
					Meet our head chef, who brings years of experience and passion to
					every dish. His culinary expertise ensures a delightful meal every
					time.
				</p>

				<div className='mt-6'>
					<Image
						src='/assets/signature.png'
						alt='Signature'
						width={120}
						height={40}
						className='mb-2'
					/>
					<p className='font-semibold text-gray-800'>John Doe</p>
					<p className='text-sm text-gray-500'>Head Chef</p>
				</div>
			</div>
		</section>
	);
}
