import Image from 'next/image';

const menu = [
	{
		category: 'Empanadas Venezolanas',
		description: 'Massa feita com farinha de milho, água e sal (frita).',
		items: [
			{
				name: 'Carne moída',
				price: 'R$ 12,00',
				ingredients: 'Carne moída e tempero verde',
			},
			{
				name: 'Carne desfiada',
				price: 'R$ 12,00',
				ingredients: 'Carne desfiada e tempero verde',
			},
			{
				name: 'Frango desfiado',
				price: 'R$ 12,00',
				ingredients: 'Frango desfiado e tempero verde',
			},
			{
				name: 'Presunto e queijo',
				price: 'R$ 12,00',
				ingredients: 'Presunto e queijo e tempero verde',
			},
		],
		image: '/assets/dishes/empanadas.webp',
	},
	{
		category: 'Ronda Venezuelana',
		description:
			'Misto de lanches venezuelanos: Tequeños, Mini empanadas mistas, Mini arepas mistas, Bolinhas de carne, Patacón misto, Maionese verde para acompanhar.',
		items: [
			{
				name: 'Ronda Venezuelana',
				price: 'R$ 35,00',
			},
		],
		image: '/assets/dishes/ronda.webp',
	},
	{
		category: 'Parrilla Mista',
		description:
			'Carne em tiras, frango em tiras, calabresa em rodelas, pimentão em tiras, cebola e alho (todos flambados). Acompanhamentos: Batatas fritas, Polenta frita, Queijo na chapa, Arepitas de banana frita, Maionese verde para acompanhar.',
		items: [
			{
				name: 'Parrilla Mista',
				price: 'R$ 90,00',
			},
		],
		image: '/assets/dishes/parrilla-mista.webp',
	},
	{
		category: 'Arepas Venezuelanas',
		description:
			'Pão feito com farinha de milho, água e sal na chapa, recheado a gosto.',
		items: [
			{
				name: 'Pabellón',
				ingredients:
					'Arepa, queijo, carne desfiada, banana da terra, maionese verde e feijão preto',
				price: 'R$ 26,00',
			},
			{
				name: 'Catira',
				ingredients: 'Arepa, frango desfiado, queijo, maionese verde',
				price: 'R$ 24,00',
			},
			{
				name: 'Pelúa',
				ingredients: 'Arepa, carne desfiada, queijo, maionese verde',
				price: 'R$ 24,00',
			},
			{
				name: 'Americana',
				ingredients: 'Presunto, queijo, maionese verde',
				price: 'R$ 21,00',
			},
			{
				name: 'Arepa Saltada',
				ingredients: 'Carne em tiras, pimentão, cebola, maionese',
				price: 'R$ 24,00',
			},
		],
		image: '/assets/dishes/arepas.webp',
	},
	{
		category: 'Hambúrgueres',
		items: [
			{
				name: 'Hambúrguer da Casa',
				ingredients:
					'Pão, hambúrguer, frango, ovo, bacon, presunto, queijo, tomate, alface, pepino, maionese, ketchup, mostarda e maionese verde. Acompanha fritas e maionese verde.',
				price: 'R$ 39,00',
			},
			{
				name: 'Hambúrguer Tradicional',
				ingredients:
					'Pão, hambúrguer, ovo, presunto, queijo, tomate, alface, maionese, ketchup e mostarda. Acompanha fritas e maionese verde.',
				price: 'R$ 34,00',
			},
			{
				name: 'Hambúrguer de Bacon',
				ingredients:
					'Pão, hambúrguer, bacon, ovo, queijo, alface, maionese, ketchup e mostarda. Acompanha fritas e maionese verde.',
				price: 'R$ 30,00',
			},
			{
				name: 'Hambúrguer Cheddar',
				ingredients:
					'Pão, hambúrguer, queijo cheddar, ovo, presunto, tomate, alface, maionese, ketchup e mostarda. Acompanha fritas e maionese verde.',
				price: 'R$ 33,00',
			},
			{
				name: 'Hambúrguer Vegetariano',
				ingredients: 'VER',
				price: '',
			},
		],
		image: '/assets/dishes/burger.jpg',
	},
	{
		category: 'Porções e Kids',
		items: [
			{
				name: 'Fritas Média (250g)',
				price: 'R$ 15,00',
			},
			{
				name: 'Fritas Grande (500g)',
				price: 'R$ 25,00',
			},
			{
				name: 'Porção Kids',
				ingredients: 'Nuggets, batata sorriso, suco e Kinder Ovo.',
				price: 'R$ 28,00',
			},
			{
				name: 'Hambúrguer Kids',
				ingredients:
					'Hambúrguer, cheddar, maionese, ketchup, batata sorriso, suco e Kinder Ovo.',
				price: 'R$ 35,00',
			},
		],
		image: '/assets/dishes/kids.webp',
	},
	{
		category: 'Sucos Naturais (500ml)',
		items: [
			{ name: 'Morango', price: 'R$ 12,00' },
			{ name: 'Maracujá', price: 'R$ 12,00' },
			{ name: 'Abacaxi com hortelã', price: 'R$ 12,00' },
			{ name: 'Limonada suíça', price: 'R$ 12,00' },
			{ name: 'Limonada c/ hortelã', price: 'R$ 12,00' },
			{ name: 'Laranja', price: 'R$ 12,00' },
			{ name: 'Manga', price: 'R$ 12,00' },
			{ name: 'Goiaba', price: 'R$ 12,00' },
			{ name: 'Acerola', price: 'R$ 12,00' },
			{ name: 'Abacaxi, morango e hortelã', price: 'R$ 12,00' },
			{ name: 'Acerola com laranja', price: 'R$ 12,00' },
		],
		image: '/assets/dishes/sucos.webp',
	},
	{
		category: 'Açaí',
		description:
			'Inclui até 3 ingredientes: Morango, banana, chocolate preto/branco, paçoca, leite em pó, calda de chocolate/morango/caramelo, granola.',
		items: [
			{ name: '300ml', price: 'R$ 16,00' },
			{ name: '400ml', price: 'R$ 20,00' },
			{ name: '500ml', price: 'R$ 25,00' },
		],
		image: '/assets/dishes/acai.webp',
		adicionais: [
			{ name: 'Nutella', price: 'R$ 5,00' },
			{ name: 'Ovomaltine', price: 'R$ 2,00' },
			{ name: 'Doce de leite', price: 'R$ 3,00' },
			{ name: 'Ouro Branco', price: 'R$ 3,00' },
			{ name: 'Sonho de Valsa', price: 'R$ 3,00' },
			{ name: 'Bis', price: 'R$ 3,00' },
			{ name: 'Ferrero Rocher', price: 'R$ 5,00' },
			{ name: 'Coco ralado', price: 'R$ 3,00' },
			{ name: 'Kit Kat', price: 'R$ 3,00' },
		],
	},
	{
		category: 'Xis e Cachorros-quentes',
		items: [
			{
				name: 'Xis Tudo',
				ingredients:
					'Pão, hambúrguer, calabresa, bacon, filé, presunto, ovo, milho, ervilha, ketchup, maionese, batata palha. Acompanha maionese caseira.',
				price: 'R$ 35,00',
			},
			{
				name: 'Xis Frango',
				ingredients:
					'Hambúrguer de frango, queijo, alface, milho, ervilha, tomate, ketchup, batata palha. Acompanha maionese caseira.',
				price: 'R$ 32,00',
			},
			{
				name: 'Cachorro-quente Simples (prensado)',
				ingredients:
					'1 salsicha, milho, ervilha, batata palha, ketchup, maionese. Acompanha maionese caseira.',
				price: 'R$ 16,00',
			},
			{
				name: 'Cachorro-quente Duplo (prensado)',
				ingredients:
					'2 salsichas, milho, ervilha, batata palha, ketchup, maionese. Acompanha maionese caseira.',
				price: 'R$ 18,00',
			},
		],
		image: '/assets/dishes/hotdog.webp',
	},
	{
		category: 'Outros Xis',
		items: [
			{
				name: 'Xis Salada',
				ingredients:
					'Pão, hambúrguer, queijo, tomate, alface, ervilha, ovo, batata palha. Acompanha maionese caseira.',
				price: 'R$ 27,00',
			},
			{
				name: 'Xis Bacon',
				ingredients:
					'Pão, hambúrguer, bacon, queijo, tomate, alface, ervilha, milho, ovo. Acompanha maionese caseira e batata palha.',
				price: 'R$ 33,00',
			},
			{
				name: 'Xis Coração',
				ingredients:
					'Pão, coração de frango, queijo, tomate, ervilha, milho, alface, batata palha, bacon. Acompanha maionese caseira.',
				price: 'R$ 33,00',
			},
			{
				name: 'Xis Calabresa',
				ingredients:
					'Pão, calabresa fatiada, queijo, milho, tomate, alface, ervilha, ketchup, maionese. Acompanha maionese caseira e batata palha.',
				price: 'R$ 32,00',
			},
			{
				name: 'Xis Filé',
				ingredients:
					'Pão, filé, queijo, tomate, alface, milho, ervilha, bacon, ovo, ketchup. Acompanha batata palha.',
				price: 'R$ 35,00',
			},
			{
				name: 'Xis Presunto',
				ingredients:
					'Pão, hambúrguer, presunto, queijo, milho, ervilha, ovo, tomate, alface, ketchup, maionese, batata palha.',
				price: 'R$ 23,00',
			},
		],
		image: '/assets/dishes/xis.webp',
	},
	{
		category: 'Lasanha',
		items: [
			{
				name: 'Lasanha de carne (700g)',
				price: 'R$ 30,00',
			},
		],
		image: '/assets/dishes/welcome-plate.jpg',
	},
];

export default function MenuPage() {
	return (
		<main
			className='min-h-[60vh] bg-[#f2f4f5] flex flex-col items-center py-20 px-4'
			style={{
				backgroundImage: "url('/assets/pattern/dishes-pattern.png')",
				backgroundSize: '120px',
				backgroundRepeat: 'repeat',
				backgroundPosition: 'center',
			}}
		>
			<div className='mb-10 text-center mt-[20px]'>
				<h1
					className='text-4xl md:text-5xl font-extrabold text-orange-500 mb-2 drop-shadow-lg tracking-tight uppercase'
					style={{
						letterSpacing: '0.05em',
						textShadow: '2px 2px 0 #fff7e6, 4px 4px 0 #ffb347',
					}}
				>
					Menu
				</h1>
				<p className='text-lg md:text-xl text-gray-700 italic font-medium mb-2'>
					<span className='inline-block px-3 py-1 bg-orange-100 rounded-full shadow-sm'>
						"Sabor veneziano, paixão em cada mordida"
					</span>
				</p>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl'>
				{menu.map((section, idx) => (
					<div
						key={section.category}
						className='bg-white rounded-tl-xl rounded-br-xl rounded-tr-md rounded-bl-md shadow-lg p-6 flex flex-col items-center text-center transition-transform hover:scale-105'
					>
						{section.image && (
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									width: '150px',
									height: '150px',
									backgroundColor: '#FF6900',
									borderRadius: '50%',
								}}
							>
								<Image
									src={section.image}
									alt={section.category}
									width={140}
									height={140}
									className='rounded-full shadow'
								/>
							</div>
						)}
						<h2 className='text-xl font-bold text-orange-500 mb-2'>
							{section.category}
						</h2>
						{section.description && (
							<p className='text-gray-600 text-sm mb-2'>
								{section.description}
							</p>
						)}
						<ul className='w-full'>
							{section.items.map((item, i) => (
								<li
									key={item.name + i}
									className='mb-3 text-left'
								>
									<div className='flex flex-wrap justify-between items-center gap-x-2'>
										<span className='font-semibold text-gray-800'>
											{item.name}
										</span>
										{item.price && (
											<span className='text-orange-500 font-bold whitespace-nowrap ml-2'>
												{item.price}
											</span>
										)}
									</div>
									{item.ingredients && (
										<p className='text-gray-500 text-xs mt-1'>
											{item.ingredients}
										</p>
									)}
								</li>
							))}
						</ul>
						{section.adicionais && (
							<div className='mt-4 w-full'>
								<p className='font-semibold text-gray-700 mb-1'>Adicionais:</p>
								<ul>
									{section.adicionais.map((add, j) => (
										<li
											key={add.name + j}
											className='flex justify-between text-xs text-gray-600'
										>
											<span>{add.name}</span>
											<span className='text-orange-500 font-bold'>
												{add.price}
											</span>
										</li>
									))}
								</ul>
							</div>
						)}
					</div>
				))}
			</div>
		</main>
	);
}
