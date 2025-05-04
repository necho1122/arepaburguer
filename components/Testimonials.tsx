// components/Testimonials.tsx
import Image from 'next/image';

const testimonials = [
	{
		name: 'Sophia Moore',
		role: 'Food Blogger',
		image: '/assets/clients/client.svg',
		comment:
			'Absolutely fantastic experience! The flavors were amazing and the service was top-notch. Highly recommend!',
	},
	{
		name: 'Lucas Brown',
		role: 'Chef & Critic',
		image: '/assets/clients/client.svg',
		comment:
			'The ambience and the dishes made this a night to remember. True culinary artistry in every bite.',
	},
	{
		name: 'Emily White',
		role: 'Travel Vlogger',
		image: '/assets/clients/client.svg',
		comment:
			'One of the best dining experiences I’ve had this year. Cozy, elegant, and so flavorful!',
	},
];

export default function Testimonials() {
	return (
		<section className='py-20 bg-[#fff9f0] px-6 max-w-7xl mx-auto text-center'>
			<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
				What Our Clients Say
			</h2>
			<p className='text-gray-600 mb-12 max-w-xl mx-auto'>
				Hear from the people who’ve dined with us and loved every moment of it.
			</p>

			<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
				{testimonials.map((t, i) => (
					<div
						key={i}
						className='bg-white shadow-lg rounded-xl p-6 text-left'
					>
						<div className='flex items-center gap-4 mb-4'>
							<Image
								src={t.image}
								alt={t.name}
								width={50}
								height={50}
								className='rounded-full'
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
