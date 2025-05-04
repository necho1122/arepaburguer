// components/Footer.tsx
import Image from 'next/image';

export default function Footer() {
	return (
		<footer className='bg-[#1b1b1b] text-gray-300 py-16 px-6'>
			<div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12'>
				{/* Columna 1 - Logo + descripción */}
				<div>
					<Image
						src='/assets/logo.svg'
						alt='Logo'
						width={150}
						height={50}
						className='mb-4'
					/>
					<p className='text-sm text-gray-400'>
						A modern and cozy restaurant offering an unforgettable dining
						experience.
					</p>
				</div>

				{/* Columna 2 - Navegación */}
				<div>
					<h3 className='text-lg font-semibold text-white mb-4'>Quick Links</h3>
					<ul className='space-y-2 text-sm'>
						<li>
							<a
								href='#'
								className='hover:text-orange-500'
							>
								Home
							</a>
						</li>
						<li>
							<a
								href='#'
								className='hover:text-orange-500'
							>
								Menu
							</a>
						</li>
						<li>
							<a
								href='#'
								className='hover:text-orange-500'
							>
								Reservations
							</a>
						</li>
						<li>
							<a
								href='#'
								className='hover:text-orange-500'
							>
								Contact
							</a>
						</li>
					</ul>
				</div>

				{/* Columna 3 - Contacto + Redes */}
				<div>
					<h3 className='text-lg font-semibold text-white mb-4'>Contact Us</h3>
					<p className='text-sm text-gray-400 mb-4'>
						123 Flavor Street, Caxias do Sul, RS
						<br />
						(55) 99999-9999
						<br />
						contact@tastybites.com
					</p>

					<div className='flex gap-4 mt-4'>
						<a
							href='#'
							aria-label='Facebook'
						>
							<Image
								src='/assets/facebook.svg'
								alt='Facebook'
								width={24}
								height={24}
							/>
						</a>
						<a
							href='#'
							aria-label='Instagram'
						>
							<Image
								src='/assets/instagram.svg'
								alt='Instagram'
								width={24}
								height={24}
							/>
						</a>
						<a
							href='#'
							aria-label='X (Twitter)'
						>
							<Image
								src='/assets/twitter.svg'
								alt='X'
								width={24}
								height={24}
							/>
						</a>
					</div>
				</div>
			</div>

			<div className='text-center text-xs text-gray-500 mt-12'>
				© {new Date().getFullYear()} TastyBites. All rights reserved.
			</div>
		</footer>
	);
}
