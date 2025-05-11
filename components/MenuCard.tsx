import Image from 'next/image';

function MenuCard({
	title,
	image,
	items,
}: {
	title: string;
	image: string;
	items: [string, string][];
}) {
	return (
		<div className='bg-white shadow-lg rounded-tl-xl rounded-br-xl rounded-tr-md rounded-bl-md p-6 text-left transition-transform hover:scale-105'>
			<Image
				src={image}
				alt={title}
				width={500}
				height={300}
				className='rounded-md mb-4 w-full object-cover'
			/>
			<h2 className='text-2xl font-bold text-gray-900 mb-2'>{title}</h2>
			<ul>
				{items.map(([name, desc], index) => (
					<li
						key={index}
						className='py-2 border-b border-gray-200'
					>
						<span className='font-semibold text-gray-900'>{name}</span>
						<span className='text-gray-600'> {desc}</span>
					</li>
				))}
			</ul>
		</div>
	);
}

export default MenuCard;
