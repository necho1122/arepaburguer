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
		category: 'Ronda Venezolana',
		description:
			'Misto de lanches venezuelanos: Tequenhos, Mini empanadas mistas, Mini arepas mistas, Bolinhas de carne, Patacón misto, Maionese verde para acompanhar.',
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
		category: 'Arepas Venezolanas',
		description:
			'Pão feito com farinha de milho, água e sal na chapa, recheado a gosto.',
		items: [
			{
				name: 'Pabellón',
				ingredients:
					'Arepa, queijo, carne desfiada, banana da terra e feijão preto. Acompanha maionese verde.',
				price: 'R$ 26,00',
			},
			{
				name: 'Catira',
				ingredients:
					'Arepa, frango desfiado, queijo. Acompanha maionese verde.',
				price: 'R$ 21,00',
			},
			{
				name: 'Pelúa',
				ingredients: 'Arepa, carne desfiada, queijo. Acompanha maionese verde.',
				price: 'R$ 24,00',
			},
			{
				name: 'Americana',
				ingredients: 'Presunto, queijo. Acompanha maionese verde.',
				price: 'R$ 21,00',
			},
			{
				name: 'Arepa Saltada',
				ingredients:
					'Carne em tiras, pimentão, cebola. Acompanha maionese verde.',
				price: 'R$ 24,00',
			},
		],
		image: '/assets/dishes/arepas.webp',
	},
	{
		category: 'Hambúrguer',
		items: [
			{
				name: 'Hambúrguer da Casa',
				ingredients:
					'Pão, hambúrguer, frango, ovo, bacon, presunto, queijo, tomate, alface, pepino en conserva, maionese, ketchup e mostarda. Acompanha batata frita e maionese verde.',
				price: 'R$ 39,00',
			},
			{
				name: 'Hambúrguer Tradicional',
				ingredients:
					'Pão, hambúrguer, ovo, presunto, queijo, tomate, alface, maionese, ketchup e mostarda. Acompanha batata frita e maionese verde.',
				price: 'R$ 31,00',
			},
			{
				name: 'Hambúrguer de Bacon',
				ingredients:
					'Pão, hambúrguer, bacon, ovo, queijo, alface, tomate, maionese, ketchup e mostarda. Acompanha batata frita e maionese verde.',
				price: 'R$ 30,00',
			},
			{
				name: 'Hambúrguer Cheddar',
				ingredients:
					'Pão, hambúrguer, queijo cheddar, ovo, presunto, tomate, alface, maionese, ketchup e mostarda. Acompanha batata frita e maionese verde.',
				price: 'R$ 33,00',
			},
		],
		image: '/assets/dishes/burger.jpg',
	},
	{
		category: 'Porções Kids',
		items: [
			{
				name: 'Porção Kids (Nuggets)',
				ingredients: 'Nuggets, batata sorriso, suco e Kinder Ovo.',
				price: 'R$ 28,00',
			},
			{
				name: 'Porção Kids (File)',
				ingredients: 'File, batata sorriso, suco e Kinder Ovo.',
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
			{ name: 'Limonada com hortelã', price: 'R$ 12,00' },
			{ name: 'Laranja', price: 'R$ 12,00' },
			{ name: 'Manga', price: 'R$ 12,00' },
			{ name: 'Goiaba', price: 'R$ 12,00' },
			{ name: 'Acerola', price: 'R$ 12,00' },
			{ name: 'Abacaxi, acerola e hortelã', price: 'R$ 12,00' },
			{ name: 'Acerola com laranja', price: 'R$ 12,00' },
		],
		image: '/assets/dishes/sucos.webp',
	},
	{
		category: 'Açaí',
		description:
			'Inclui até 3 ingredientes: Morango, banana, chocolate preto/branco, paçoca, leite condensado leite em pó, calda de chocolate/morango/caramelo, granola.',
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
		category: 'Cachorros-quentes',
		items: [
			{
				name: 'Cachorro-quente Simples (prensado)',
				ingredients:
					'Pão, 1 salsicha, milho, ervilha, ketchup, maionese, molho e batata palha. Acompanha maionese verde.',
				price: 'R$ 16,00',
			},
			{
				name: 'Cachorro-quente Duplo (prensado)',
				ingredients:
					'Pão, 2 salsichas, milho, ervilha, ketchup, maionese, molho e batata palha. Acompanha maionese verde.',
				price: 'R$ 18,00',
			},
		],
		image: '/assets/dishes/hotdog.webp',
	},
	{
		category: 'Xis',
		items: [
			{
				name: 'Xis Salada',
				ingredients:
					'Pão, hambúrguer, queijo, tomate, alface, ervilha, milho, ketchup, maionese, ovo e batata palha. Acompanha maionese verde.',
				price: 'R$ 23,00',
			},
			{
				name: 'Xis Bacon',
				ingredients:
					'Pão, hambúrguer, bacon, queijo, tomate, alface, ervilha, milho, ketchup, maionese, ovo e batata palha. Acompanha maionese verde.',
				price: 'R$ 27,00',
			},
			{
				name: 'Xis Coração',
				ingredients:
					'Pão, coração de frango, queijo, tomate, ervilha, milho, alface, batata palha e bacon. Acompanha maionese verde.',
				price: 'R$ 33,00',
			},
			{
				name: 'Xis Calabresa',
				ingredients:
					'Pão, calabresa fatiada, queijo, milho, tomate, alface, ervilha, ketchup, maionese, ovo e batata palha. Acompanha maionese verde.',
				price: 'R$ 27,00',
			},
			{
				name: 'Xis Filé',
				ingredients:
					'Pão, filé, queijo, tomate, alface, milho, ervilha, bacon, ovo, ketchup, maionese e batata palha. Acompanha maionese verde.',
				price: 'R$ 35,00',
			},
			{
				name: 'Xis Presunto',
				ingredients:
					'Pão, hambúrguer, presunto, queijo, milho, ervilha, ovo, tomate, alface, ketchup, maionese e batata palha. Acompanha maionese verde.',
				price: 'R$ 23,00',
			},
			{
				name: 'Xis Tudo',
				ingredients:
					'Pão, hambúrguer, calabresa, bacon, filé, presunto, coraçao, ovo, milho, ervilha, ketchup, maionese e batata palha. Acompanha maionese verde.',
				price: 'R$ 35,00',
			},
			{
				name: 'Xis Frango',
				ingredients:
					'Pão, Hambúrguer de frango, queijo, alface, milho, ervilha, tomate, maionese, ketchup, ovo e batata palha. Acompanha maionese verde.',
				price: 'R$ 23,00',
			},
		],
		image: '/assets/dishes/xis.webp',
	},
	{
		category: 'Lasanha',
		items: [
			{
				name: 'Lasanha a Bolonhesa (700g)',
				ingredients:
					'Molho de tomate, presunto, molho a bolonhesa, queijo ralado, queijo fatiado',
				price: 'R$ 30,00',
			},
		],
		image: '/assets/dishes/welcome-plate.jpg',
	},
	{
		category: 'Batata Frita',
		items: [
			{
				name: 'Média (250g)',
				price: 'R$ 15,00',
			},
			{
				name: 'Grande (500g)',
				price: 'R$ 25,00',
			},
		],
		image: '/assets/dishes/batata-frita.webp',
	},
	{
		category: 'Refrigerantes',
		description:
			'Diversos sabores em garrafas e latas, incluindo opções com e sem açúcar.',
		items: [
			{ name: 'Fanta Laranja (600 ml)', price: 'R$ 7,00' },
			{ name: 'Fanta Uva (600 ml)', price: 'R$ 7,00' },
			{ name: 'Guaraná Antarctica (600 ml)', price: 'R$ 7,00' },
			{ name: 'Coca-Cola (600 ml)', price: 'R$ 7,00' },
			{ name: 'Coca-Cola sem açúcar (600 ml)', price: 'R$ 7,00' },
			{ name: 'Sprite (600 ml)', price: 'R$ 7,00' },
			{ name: 'Tônica (350 ml)', price: 'R$ 5,00' },
			{ name: 'Tônica sem açúcar (350 ml)', price: 'R$ 5,00' },
			{ name: 'Fanta Uva (lata 350 ml)', price: 'R$ 5,00' },
			{ name: 'Fanta Laranja (lata 350 ml)', price: 'R$ 5,00' },
			{ name: 'Guaraná Antarctica (lata 350 ml)', price: 'R$ 5,00' },
			{ name: 'Sprite (lata 350 ml)', price: 'R$ 5,00' },
			{ name: 'Coca-Cola (lata 350 ml)', price: 'R$ 5,00' },
			{ name: 'Coca-Cola sem açúcar (lata 350 ml)', price: 'R$ 5,00' },
			{ name: 'Pepsi sem açúcar (lata 350 ml)', price: 'R$ 5,00' },
		],
		image: '/assets/dishes/refrigerantes.webp',
	},

	{
		category: 'Refrigerantes 2L e 3L',
		description:
			'Refrigerantes familiares de 2L e 3L, ideais para compartilhar.',
		items: [
			{ name: 'Pepsi (2 L)', price: 'R$ 12,00' },
			{ name: 'Pepsi sem açúcar (2 L)', price: 'R$ 12,00' },
			{ name: 'Pepsi Twist (2 L)', price: 'R$ 12,00' },
			{ name: 'Coca-Cola (2 L)', price: 'R$ 14,00' },
			{ name: 'Coca-Cola sem açúcar (2 L)', price: 'R$ 14,00' },
			{ name: 'Fanta Laranja (2 L)', price: 'R$ 12,00' },
			{ name: 'Fanta Uva (2 L)', price: 'R$ 12,00' },
			{ name: 'Sprite (2 L)', price: 'R$ 12,00' },
			{ name: 'H2O Limão (1,5 L)', price: 'R$ 11,00' },
			{ name: 'H2O Limemeto (1,5 L)', price: 'R$ 11,00' },
			{ name: 'Guaraná antártica (2 L)', price: 'R$ 13.00' },
			{ name: 'Fruki Guaraná (3 L)', price: 'R$ 13,00' },
			{ name: 'Fruki Laranja (3 L)', price: 'R$ 12,00' },
			{ name: 'Guaraná Charrua (2 L)', price: 'R$ 8,00' },
			{ name: 'Sukita Laranja (2 L)', price: 'R$ 11,00' },
			{ name: 'Pepita Guaraná (2 L)', price: 'R$ 6,00' },
			{ name: 'Pepita Laranja (2 L)', price: 'R$ 6,00' },
			{ name: 'Pepita Uva (2 L)', price: 'R$ 6,00' },
			{ name: 'Pepita Limão (2 L)', price: 'R$ 6,00' },
		],
		image: '/assets/dishes/refrigerantes-2l.webp',
	},
	{
		category: 'Cervejas e Chopp',
		description: 'Cervejas nacionais e importadas, além de chopes especiais.',
		items: [
			{ name: 'Brahma Malzbier (350 ml)', price: 'R$ 8,00' },
			{ name: 'Brahma Chopp (473 ml)', price: 'R$ 8,00' },
			{ name: 'Bohemia (473 ml)', price: 'R$ 8,00' },
			{ name: 'Stella Artois (473 ml)', price: 'R$ 9,00' },
			{ name: 'Polar (473 ml)', price: 'R$ 8,00' },
			{ name: 'Skol Pilsen (473 ml)', price: 'R$ 8,00' },
			{ name: 'Corona (473 ml)', price: 'R$ 10,00' },
			{ name: 'Original (473 ml)', price: 'R$ 8,00' },
			{ name: 'Budweiser (473 ml)', price: 'R$ 9,00' },
			{ name: 'Corona Long Neck (330 ml)', price: 'R$ 11,00' },
			{ name: 'Budweiser Long Neck (330 ml)', price: 'R$ 10,00' },
			{ name: 'Stella Artois Long Neck (330 ml)', price: 'R$ 10,00' },
			{ name: 'Skol Beats S Long Neck (330 ml)', price: 'R$ 11,00' },
			{ name: 'Skol Beats GT Long Neck (330 ml)', price: 'R$ 11,00' },
			{ name: 'Chopp Valle Bier Pilsen (1,5 L)', price: 'R$ 19,90' },
			{ name: 'Chopp Valle Bier Malzbier (1,5 L)', price: 'R$ 21,99' },
		],
		image: '/assets/dishes/cerveja.webp',
	},
	{
		category: 'Águas',
		description: 'Águas minerais com e sem gás em diversos volumes.',
		items: [
			{ name: 'Água com gás Da Pedra (2 L)', price: 'R$ 7,00' },
			{ name: 'Água com gás Bamboo (1,5 L)', price: 'R$ 5,00' },
			{ name: 'Água sem gás da Pedra (1,5 L)', price: 'R$ 6,00' },
			{ name: 'Água sem gás Santa Justina (1,5 L)', price: 'R$ 4,00' },
			{ name: 'Água com gás (500 ml)', price: 'R$ 3,00' },
			{ name: 'Água sem gás (500 ml)', price: 'R$ 3,00' },
		],
		image: '/assets/dishes/agua.webp',
	},
];

export default function MenuPage() {
	return (
		<main
			className='min-h-[60vh] bg-[#f2f4f5] flex flex-col items-center py-20 px-4'
			style={{
				backgroundImage: "url('/assets/pattern/dishes-pattern.png')",
				backgroundSize: '70px',
				backgroundRepeat: 'repeat',
				backgroundPosition: 'center',
			}}
		>
			{/* Fondo decorativo */}
			<div
				className='absolute inset-0 pointer-events-none'
				style={{ zIndex: '0', position: 'fixed' }}
			>
				<Image
					src='/assets/pattern/restaurant-plate.svg'
					alt='breakfast image'
					className='absolute top-20 left-6 opacity-10 w-24 sm:w-32 md:w-40 lg:w-52'
					width={220}
					height={220}
				/>
				<Image
					src='/assets/pattern/burger.svg'
					alt='Menu pattern'
					className='absolute bottom-10 right-6 opacity-10 w-28 sm:w-36 md:w-44 lg:w-56'
					width={250}
					height={250}
				/>
				<Image
					src='/assets/pattern/pizza.svg'
					alt='Menu pattern'
					className='absolute top-1/2 left-1/3 transform -translate-y-1/2 opacity-5 rotate-12 w-32 sm:w-40 md:w-48 lg:w-60'
					width={280}
					height={280}
				/>
				<Image
					src='/assets/pattern/vegetables.svg'
					alt='Menu pattern'
					className='absolute top-0 right-0 mt-4 mr-4 opacity-5 rotate-12 w-36 sm:w-44 md:w-52 lg:w-64'
					width={300}
					height={300}
				/>
			</div>
			<div className='mb-10 text-center mt-[20px]'>
				<h1
					className='text-4xl md:text-5xl font-extrabold text-orange-500 mb-2 drop-shadow-lg tracking-tight uppercase'
					style={{
						letterSpacing: '0.05em',
						textShadow: '2px 2px 0 #fff7e6, 4px 4px 0 #ffb347',
					}}
				>
					Cardápio
				</h1>
				<p className='text-lg md:text-xl text-gray-700 italic font-medium mb-2'>
					<span className='inline-block px-3 py-1 bg-orange-100 rounded-full shadow-sm'>
						&quot;Sabor venezuelano, paixão em cada mordida&quot;
					</span>
				</p>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl'>
				{menu.map((section) => (
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
						<h2 className='text-xl font-bold text-orange-500 mb-2 mt-2'>
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
										<span className='font-semibold text-gray-800 text-sm'>
											{item.name}
										</span>
										{item.price && (
											<span className='text-orange-500 font-bold whitespace-nowrap ml-2'>
												{item.price}
											</span>
										)}
									</div>
									{'ingredients' in item && item.ingredients && (
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
