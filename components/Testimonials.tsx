// components/Testimonials.tsx
import Image from 'next/image';

const testimonials = [
	{
		name: 'Sophia Moore',
		role: 'Blogueira de Gastronomia',
		image: '/assets/clients/client.svg',
		comment:
			'Experiência absolutamente fantástica! Os sabores estavam incríveis e o atendimento foi de primeira. Recomendo muito!',
	},
	{
		name: 'Lucas Brown',
		role: 'Chef & Crítico',
		image: '/assets/clients/client.svg',
		comment:
			'O ambiente e os pratos fizeram desta noite algo inesquecível. Verdadeira arte culinária em cada mordida.',
	},
	{
		name: 'Emily White',
		role: 'Vlogueira de Viagens',
		image: '/assets/clients/client.svg',
		comment:
			'Uma das melhores experiências gastronômicas que tive este ano. Aconchegante, elegante e muito saboroso!',
	},
];

export default function Testimonials() {
	return (
		<section className='py-20 bg-[#f2f4f5] px-6 max-w-7xl mx-auto text-center'>
			<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
				O que dizem nossos clientes
			</h2>
			<p className='text-gray-600 mb-12 max-w-xl mx-auto'>
				Veja o que as pessoas que já provaram nossos pratos acharam da
				experiência.
			</p>

			<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
				{testimonials.map((t, i) => (
					<div
						key={i}
						className='bg-white shadow-lg rounded-tl-xl rounded-br-xl rounded-tr-md rounded-bl-md p-6 text-left transition-transform hover:scale-105'
					>
						<div className='flex items-center gap-4 mb-4'>
							<Image
								src={t.image}
								alt={`Foto de ${t.name}`}
								width={50}
								height={50}
								className='rounded-full shadow'
							/>
							<div>
								<p className='font-semibold text-gray-900'>{t.name}</p>
								<p className='text-sm text-gray-500'>{t.role}</p>
							</div>
						</div>
						<p className='text-gray-700 italic'>&quot;{t.comment}&quot;</p>
					</div>
				))}
			</div>
		</section>
	);
}
