import MenuCard from '@/components/MenuCard';
import Image from 'next/image';

export default function MenuPage() {
	return (
		<main className='relative min-h-[60vh] bg-[#f2f4f5] flex flex-col items-center justify-center py-20 px-4 overflow-hidden pt-30'>
			{/* Imágenes decorativas */}
			<div className='absolute inset-0 pointer-events-none z-0'>
				<Image
					src='/assets/pattern/leaves.png'
					alt='Leaf pattern'
					className='absolute top-4 left-4 opacity-10 w-24 sm:w-32 md:w-40 lg:w-52'
					width={220}
					height={220}
				/>
				<Image
					src='/assets/pattern/leaves.png'
					alt='Leaf pattern'
					className='absolute bottom-10 right-4 opacity-10 w-28 sm:w-36 md:w-44 lg:w-56'
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

			{/* Contenido principal */}
			<div className='relative z-10 w-full max-w-[1280px]'>
				<h1 className='text-4xl md:text-5xl font-bold text-orange-500 mb-6 drop-shadow text-center'>
					Nuestro Menú
				</h1>
				<p className='text-gray-700 text-lg max-w-xl text-center mx-auto mb-12'>
					Explora nuestra selección de platos venezolanos y hamburguesas
					gourmet, preparados con los ingredientes frescos y de alta calidad.
				</p>
				<section className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					{/* Aperitivos */}
					<MenuCard
						title='Aperitivos'
						image='/assets/dishes/tequenos.jpg'
						items={[
							['Tequeños', 'Queso frito con salsa de aji amarillo ($8.99)'],
							[
								'Cachapas',
								'Tortillas de maíz con queso y salsa de aguacate ($7.99)',
							],
						]}
					/>

					{/* Hamburguesas */}
					<MenuCard
						title='Hamburguesas'
						image='/assets/dishes/burger.jpg'
						items={[
							[
								'Clásica',
								'Hamburguesa con queso, lechuga, tomate y mayonesa ($12.99)',
							],
							['Gourmet', 'Con bacon, queso, lechuga y tomate ($14.99)'],
						]}
					/>

					{/* Postres */}
					<MenuCard
						title='Postres'
						image='/assets/dishes/postre-3-leches.webp'
						items={[
							['Tres Leches', 'Pastel con crema chantillí ($6.99)'],
							['Flan', 'Flan de vainilla con caramelo ($5.99)'],
						]}
					/>

					{/* Bebidas */}
					<MenuCard
						title='Bebidas'
						image='/assets/dishes/papelon.jpg'
						items={[
							['Papelón con limón', 'Refrescante bebida venezolana ($3.50)'],
							['Chicha criolla', 'Bebida de arroz con leche ($4.00)'],
						]}
					/>

					{/* Arepas */}
					<MenuCard
						title='Arepas'
						image='/assets/dishes/arepas.webp'
						items={[
							['Reina Pepiada', 'Pollo con aguacate ($6.99)'],
							['Dominó', 'Caraotas negras y queso blanco ($5.99)'],
						]}
					/>

					{/* Especiales */}
					<MenuCard
						title='Especiales'
						image='/assets/dishes/pabellon.jpg'
						items={[
							[
								'Pabellón criollo',
								'Carne mechada, arroz, caraotas y plátano ($11.99)',
							],
							['Parrilla mixta', 'Variedad de carnes y chorizo ($18.99)'],
						]}
					/>
				</section>
			</div>
		</main>
	);
}
