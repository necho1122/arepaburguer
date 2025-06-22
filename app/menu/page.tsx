import React from 'react';

export default function MenuPage() {
	return (
		<div className='min-h-screen bg-[#fef6f0] text-[#1a1a1a] font-sans px-6 py-10'>
			<div className='max-w-6xl mx-auto'>
				<header className='text-center mb-12'>
					<h1 className='text-5xl font-black text-orange-600 tracking-wide mb-2'>
						Menú
					</h1>
					<h2 className='text-3xl font-bold uppercase'>Restaurant</h2>
					<p className='text-gray-600 max-w-lg mx-auto mt-2'>
						Auténtica comida venezolana, hecha con amor y sabor tradicional.
					</p>
				</header>

				<div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
					{/* BEST PIZZA / EMPANADAS */}
					<section className='bg-white shadow-xl rounded-3xl p-6 border-t-8 border-orange-500'>
						<h3 className='text-2xl font-extrabold text-center text-orange-600 mb-4'>
							Empanadas
						</h3>
						{[
							['Carne moída e tempero verde', 12],
							['Carne desfiada e tempero verde', 12],
							['Frango desfiado e tempero verde', 12],
							['Presunto e queijo', 12],
						].map(([name, price]) => (
							<div
								className='flex justify-between py-2 border-b last:border-none'
								key={name}
							>
								<span className='font-medium'>{name}</span>
								<span className='text-orange-500 font-semibold'>
									{typeof price === 'number' ? `R$ ${price.toFixed(2)}` : price}
								</span>
							</div>
						))}
						<div className='text-center text-sm mt-4 text-gray-500 italic'>
							Massa de milho frita
						</div>
					</section>

					{/* SPECIAL BURGUER */}
					<section className='bg-[#1a1a1a] text-white shadow-xl rounded-3xl p-6 relative border-t-8 border-orange-500'>
						<h3 className='text-2xl font-extrabold text-center text-orange-500 mb-4'>
							Special Burger
						</h3>
						{[
							['Da Casa', 39],
							['Tradicional', 34],
							['Bacon', 30],
							['Cheddar', 33],
							['Vegetariano', 'ver'],
						].map(([name, price]) => (
							<div
								className='flex justify-between py-2 border-b border-gray-700 last:border-none'
								key={name}
							>
								<span>{name}</span>
								<span>
									{typeof price === 'number' ? `R$ ${price.toFixed(2)}` : price}
								</span>
							</div>
						))}
						<div className='mt-6 text-sm text-center text-gray-400'>
							Extras disponíveis mediante pedido
						</div>
					</section>

					{/* SANDWICHES / AREPAS */}
					<section className='bg-white shadow-xl rounded-3xl p-6 border-t-8 border-orange-500'>
						<h3 className='text-2xl font-extrabold text-center text-orange-600 mb-4'>
							Arepas
						</h3>
						{[
							['Pabellón', 26],
							['Catira', 24],
							['Pelúa', 24],
							['Americana', 21],
							['Saltada', 24],
						].map(([name, price]) => (
							<div
								className='flex justify-between py-2 border-b last:border-none'
								key={name}
							>
								<span className='font-medium'>{name}</span>
								<span className='text-orange-500 font-semibold'>
									{typeof price === 'number' ? `R$ ${price.toFixed(2)}` : price}
								</span>
							</div>
						))}
						<div className='text-center text-sm mt-4 text-gray-500 italic'>
							Pão de milho na chapa recheado
						</div>
					</section>
				</div>

				<div className='flex justify-center items-center gap-6 mt-14'>
					<div className='bg-orange-500 text-white px-4 py-2 rounded-full font-bold shadow-lg'>
						Bebida Grátis!
					</div>
				</div>

				<footer className='text-center mt-14 text-sm text-gray-400'>
					Preços sujeitos a alteração. Imagens meramente ilustrativas.
				</footer>
			</div>
		</div>
	);
}
