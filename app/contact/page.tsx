import Image from 'next/image';

export default function ContactPage() {
	return (
		<main className='relative h-screen top-20 bg-[#f2f4f5] flex flex-col items-center py-20 px-4 overflow-hidden'>
			{/* Fondo decorativo */}
			<div className='absolute inset-0 pointer-events-none z-0'>
				<Image
					src='/assets/pattern/restaurant-plate.svg'
					alt='breakfast image'
					className='absolute top-20 left-6 opacity-10 w-24 sm:w-32 md:w-40 lg:w-52'
					width={220}
					height={220}
				/>
				<Image
					src='/assets/pattern/burger.svg'
					alt='Contact pattern'
					className='absolute bottom-10 right-6 opacity-10 w-28 sm:w-36 md:w-44 lg:w-56'
					width={250}
					height={250}
				/>
				<Image
					src='/assets/pattern/pizza.svg'
					alt='Contact pattern'
					className='absolute top-1/2 left-1/3 transform -translate-y-1/2 opacity-5 rotate-12 w-32 sm:w-40 md:w-48 lg:w-60'
					width={280}
					height={280}
				/>
				<Image
					src='/assets/pattern/vegetables.svg'
					alt='Contact pattern'
					className='absolute top-0 right-0 mt-4 mr-4 opacity-5 rotate-12 w-36 sm:w-44 md:w-52 lg:w-64'
					width={300}
					height={300}
				/>
			</div>

			{/* Contenido principal */}
			<h1 className='relative z-10 text-4xl md:text-5xl font-bold text-orange-500 mb-6 drop-shadow'>
				Contact
			</h1>
			<p className='relative z-10 text-gray-700 text-lg max-w-xl text-center mb-8'>
				Have questions or want to make a reservation? Reach out to us!
			</p>

			{/* Información de contacto */}
			<div className='relative z-10 text-center text-gray-800 space-y-4'>
				<p>
					<strong>Email:</strong> contacto@arepaburguer.com
				</p>
				<p>
					<strong>Teléfono:</strong> +58 412-1234567
				</p>
				<p>
					<strong>Dirección:</strong> Calle Gourmet #123, Caracas, Venezuela
				</p>

				{/* Redes sociales con íconos */}
				<div className='flex flex-wrap justify-center gap-4 sm:gap-6 mt-6 text-orange-500'>
					<a
						href='https://instagram.com/arepaburguer'
						target='_blank'
						rel='noopener noreferrer'
						className='flex items-center space-x-2 hover:underline'
					>
						<Image
							src='/assets/instagram.svg'
							alt='Instagram'
							width={20}
							height={20}
						/>
						<span>Instagram</span>
					</a>
					<a
						href='https://x.com/arepaburguer'
						target='_blank'
						rel='noopener noreferrer'
						className='flex items-center space-x-2 hover:underline'
					>
						<Image
							src='/assets/twitter.svg'
							alt='X'
							width={20}
							height={20}
						/>
						<span>X (Twitter)</span>
					</a>
					<a
						href='https://facebook.com/arepaburguer'
						target='_blank'
						rel='noopener noreferrer'
						className='flex items-center space-x-2 hover:underline'
					>
						<Image
							src='/assets/facebook.svg'
							alt='Facebook'
							width={20}
							height={20}
						/>
						<span>Facebook</span>
					</a>
					<a
						href='https://wa.me/584121234567'
						target='_blank'
						rel='noopener noreferrer'
						className='flex items-center space-x-2 hover:underline'
					>
						<Image
							src='/assets/whatsapp.svg'
							alt='WhatsApp'
							width={20}
							height={20}
						/>
						<span>WhatsApp</span>
					</a>
				</div>
			</div>
		</main>
	);
}
