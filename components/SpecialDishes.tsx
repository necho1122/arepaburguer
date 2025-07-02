// components/SpecialDishes.tsx
import Image from 'next/image';

const dishes = [
	{
		name: 'Arepas Venezolanas',
		desc: 'Pão feito com farinha de milho, água e sal na chapa, recheado a gosto.',
		price: 'R$26.00',
		rating: 4.8,
		image: '/assets/dishes/arepas.webp',
	},
	{
		name: 'Parrilla Mista',
		desc: 'Carne em tiras, frango em tiras, calabresa em rodelas, pimentão em tiras, cebola e alho (todos flambados). Acompanhamentos: Batatas fritas, Polenta frita, Queijo na chapa, Arepitas de banana frita, Maionese verde para acompanhar.',
		price: 'R$90.00',
		rating: 4.5,
		image: '/assets/dishes/parrilla-mista.webp',
	},
	{
		name: 'Hambúrgueres',
		desc: 'Pão, hambúrguer, frango, ovo, bacon, presunto, queijo, tomate, alface, pepino, maionese, ketchup, mostarda e maionese verde. Acompanha fritas e maionese verde.',
		price: 'R$39.00',
		rating: 4.7,
		image: '/assets/dishes/burger.jpg',
	},
];

export default function SpecialDishes() {
	return (
		<section
			className='py-20 bg-[#f2f4f5] px-6 max-w-7xl mx-auto text-center'
			id='menu'
		>
			<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
				Nossos Pratos Especiais
			</h2>
			<p className='text-gray-600 mb-10 max-w-xl mx-auto'>
				Aproveite uma variedade de refeições deliciosas cuidadosamente
				preparadas pelos nossos melhores chefs.
			</p>

			<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
				{dishes.map((dish, idx) => (
					<div
						key={idx}
						className='bg-white shadow-lg rounded-tl-xl rounded-br-xl rounded-tr-md rounded-bl-md p-6 flex flex-col items-center text-center transition-transform hover:scale-105'
					>
						<Image
							src={dish.image}
							alt={`Dish: ${dish.name}`}
							width={120}
							height={120}
							className='mb-4 rounded-full shadow'
						/>
						<h3 className='text-xl font-semibold text-gray-900 mb-2'>
							{dish.name}
						</h3>
						<p className='text-gray-500 text-sm mb-4'>{dish.desc}</p>
						<div className='flex items-center justify-between w-full px-4 text-gray-700 font-medium'>
							<span>{dish.price}</span>
							<span className='flex items-center gap-1'>⭐ {dish.rating}</span>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
