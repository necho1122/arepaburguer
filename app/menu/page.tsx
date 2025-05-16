import MenuCard from '@/components/MenuCard';
import Image from 'next/image';
import data from '@/data/data.json';

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
					gourmet, preparados con ingredientes frescos y de alta calidad.
				</p>
				<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
					Arepas
				</h2>
				<section className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					{data.menu.arepas.map((arepa, index) => (
						<MenuCard
							key={index}
							title={arepa.nombre as string}
							image={'/assets/dishes/arepas.webp'}
							items={arepa.ingredientes.map((ingredient) => [ingredient, ''])}
							acompanamientos={''}
							price={arepa.precio as number}
						/>
					))}
				</section>
				<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4 mt-12'>
					Empanadas
				</h2>
				<section className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					{data.menu.empanadas.map((empanada, index) => (
						<MenuCard
							key={index}
							title={empanada.nombre as string}
							image={'/assets/dishes/empanadas.webp'}
							items={[]}
							acompanamientos={''}
							price={empanada.precio as number}
						/>
					))}
				</section>
				<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4 mt-12'>
					Hamburguers
				</h2>
				<section className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					{data.menu.hamburguesas.map((hamburguesa, index) => (
						<div key={index}>
							<MenuCard
								title={hamburguesa.nombre as string}
								image={'/assets/dishes/burger.jpg'}
								items={hamburguesa.ingredientes.map((ingredient) => [
									ingredient,
									'',
								])}
								acompanamientos={`acompanamientos: ${hamburguesa.acompanamientos},`}
								price={hamburguesa.precio as number}
							/>
						</div>
					))}
				</section>
				<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4 mt-12'>
					Combos
				</h2>
				<section className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					{data.menu.combos.map((combo, index) => (
						<MenuCard
							key={index}
							title={combo.nombre as string}
							image={'/assets/dishes/combo.jpg'}
							items={[]}
							acompanamientos={''}
							price={combo.precio as number}
						/>
					))}
				</section>
			</div>
		</main>
	);
}
