// components/Chef.tsx
import Image from 'next/image';

export default function Chef() {
	return (
		<section className='py-20 px-6 bg-[#f2f4f5] max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10'>
			{/* Imagen del Chef */}
			<div className='w-full md:w-1/2 relative'>
				<Image
					src='/assets/chef.jpg'
					alt='Chef at ArepaBurguer'
					width={500}
					height={600}
					className='rounded-tl-xl rounded-br-xl rounded-tr-md rounded-bl-md mx-auto shadow-lg'
				/>
			</div>

			{/* Texto */}
			<div className='w-full md:w-1/2 text-center md:text-left space-y-4'>
				<h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
					Nosso Chef Experiente
				</h2>
				<p className='text-gray-600'>
					Conheça nosso chef principal, que traz anos de experiência e paixão
					para cada prato. Sua expertise culinária garante uma refeição
					deliciosa sempre.
				</p>

				<div className='mt-6'>
					<Image
						src='/assets/signature.png'
						alt='Assinatura'
						width={120}
						height={40}
						className='mb-2'
					/>
					<p className='font-semibold text-gray-800'>Roger Rodríguez</p>
					<p className='text-sm text-gray-500'>Chef Principal</p>
				</div>
			</div>
		</section>
	);
}
