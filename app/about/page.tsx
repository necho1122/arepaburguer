import Image from 'next/image';

export default function AboutPage() {
	return (
		<main className='relative h-screen top-20 bg-[#f2f4f5] flex flex-col items-center py-20 px-4 overflow-hidden'>
			{/* Imágenes decorativas en el fondo */}
			<div className='absolute inset-0 pointer-events-none z-0'>
				<Image
					src='/assets/pattern/leaves.png'
					alt='Leaf pattern'
					className='absolute top-6 left-6 opacity-10 w-24 sm:w-32 md:w-40 lg:w-52'
					width={220}
					height={220}
				/>
				<Image
					src='/assets/pattern/leaves.png'
					alt='Leaf pattern'
					className='absolute bottom-10 right-6 opacity-10 w-28 sm:w-36 md:w-44 lg:w-56'
					width={250}
					height={250}
				/>
				<Image
					src='/assets/pattern/leaves.png'
					alt='Leaf pattern'
					className='absolute top-1/2 left-1/4 transform -translate-y-1/2 opacity-5 rotate-12 w-32 sm:w-40 md:w-48 lg:w-60'
					width={280}
					height={280}
				/>
				<Image
					src='/assets/pattern/leaves.png'
					alt='Leaf pattern'
					className='absolute top-0 right-0 mt-4 mr-4 opacity-5 rotate-12 w-36 sm:w-44 md:w-52 lg:w-64'
					width={300}
					height={300}
				/>
			</div>

			{/* Conteúdo principal */}
			<h1 className='relative z-10 text-4xl md:text-5xl font-bold text-orange-500 mb-6 drop-shadow'>
				Sobre Nós
			</h1>
			<p className='relative z-10 text-gray-700 text-lg max-w-xl text-center mb-8'>
				A ArepaBurguer é um restaurante moderno que une a tradição venezuelana
				com sabores gourmet. Nossa paixão é servir as melhores arepas e
				hambúrgueres em um ambiente acolhedor.
			</p>
		</main>
	);
}
