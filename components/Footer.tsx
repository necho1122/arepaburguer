// components/Footer.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
	return (
		<footer className='bg-[#1b1b1b] text-gray-300 py-16 px-6'>
			<div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12'>
				{/* Coluna 1 - Logo + descrição */}
				<div>
					<Image
						src='/assets/logo.svg'
						alt='Logo'
						width={150}
						height={50}
						className='mb-4'
					/>
					<p className='text-sm text-gray-400'>
						Um restaurante moderno e aconchegante oferecendo uma experiência
						gastronômica inesquecível.
					</p>
				</div>

				{/* Coluna 2 - Navegação */}
				<div>
					<h3 className='text-lg font-semibold text-white mb-4'>
						Links Rápidos
					</h3>
					<ul className='space-y-2 text-sm'>
						<li>
							<Link
								href='/'
								className='hover:text-orange-500'
							>
								Início
							</Link>
						</li>
						<li>
							<Link
								href='/menu'
								className='hover:text-orange-500'
							>
								Cardápio
							</Link>
						</li>
						<li>
							<Link
								href='/reservas'
								className='hover:text-orange-500'
							>
								Reservas
							</Link>
						</li>
						<li>
							<Link
								href='/contact'
								className='hover:text-orange-500'
							>
								Contato
							</Link>
						</li>
					</ul>
				</div>

				{/* Coluna 3 - Contato + Redes */}
				<div>
					<h3 className='text-lg font-semibold text-white mb-4'>Contato</h3>
					<p className='text-sm text-gray-400 mb-4'>
						Bento Gonçalves, RS
						<br />
						+55 54 96650797
						<br />
						rogerrodfiguez465@gmail.com
					</p>

					<div className='flex gap-4 mt-4'>
						<Link
							href='https://www.facebook.com/profile.php?id=61578078020664'
							aria-label='Facebook'
							target='_blank'
							rel='noopener noreferrer'
						>
							<Image
								src='/assets/facebook.svg'
								alt='Facebook'
								width={24}
								height={24}
							/>
						</Link>
						<Link
							href='https://instagram.com/arepaburguer1'
							aria-label='Instagram'
							target='_blank'
							rel='noopener noreferrer'
						>
							<Image
								src='/assets/instagram.svg'
								alt='Instagram'
								width={24}
								height={24}
							/>
						</Link>
						<Link
							href='https://wa.me/555496650797'
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
						</Link>
					</div>
				</div>
			</div>

			<div className='text-center text-xs text-gray-500 mt-12'>
				© {new Date().getFullYear()} ArepaBurguer. Todos os direitos
				reservados.
			</div>
		</footer>
	);
}
