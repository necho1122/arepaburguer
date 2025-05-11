export default function HomePage() {
	return (
		<main
			className='min-h-[60vh] bg-[#f2f4f5] flex flex-col items-center justify-center py-20 px-4'
			style={{
				backgroundImage: "url('/assets/pattern/leaves.png')",
				backgroundSize: '120px',
				backgroundRepeat: 'repeat',
				backgroundPosition: 'center',
				opacity: 1,
			}}
		>
			<h1 className='text-4xl md:text-5xl font-bold text-orange-500 mb-6 drop-shadow'>
				Welcome to ArepaBurguer
			</h1>
			<p className='text-gray-700 text-lg max-w-xl text-center mb-8'>
				Experience the best of Venezuelan arepas and burgers in a modern, cozy
				setting.
			</p>
			{/* Puedes agregar un CTA o enlaces a otras secciones */}
		</main>
	);
}
