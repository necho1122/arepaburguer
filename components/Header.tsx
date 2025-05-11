// components/Header.tsx
'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => setMenuOpen(!menuOpen);

	const navLinks = [
		{ name: 'Home', href: '/' },
		{ name: 'Menu', href: '/menu' },
		{ name: 'About', href: '/about' },
		{ name: 'Contact', href: '/contact' },
	];

	return (
		<header className='fixed top-0 left-0 w-full bg-[#f2f4f5] z-50 shadow-md'>
			<div className='max-w-7xl mx-auto flex items-center justify-between px-6 py-4'>
				{/* Logo */}
				<Link
					href='/'
					className='flex items-center gap-2'
				>
					<Image
						src='/assets/logo.svg'
						alt='Logo'
						width={100}
						height={50}
					/>
				</Link>

				{/* Desktop Nav */}
				<nav className='hidden md:flex items-center gap-8'>
					{navLinks.map((link) => (
						<Link
							key={link.name}
							href={link.href}
							className='text-gray-700 hover:text-orange-500 font-medium transition-colors'
						>
							{link.name}
						</Link>
					))}
				</nav>

				{/* CTA */}
				<div className='hidden md:block'>
					<a
						href='#'
						className='bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm transition-colors shadow'
					>
						Book Now
					</a>
				</div>

				{/* Mobile Menu Icon */}
				<button
					className='md:hidden text-gray-700'
					onClick={toggleMenu}
				>
					{menuOpen ? <X size={28} /> : <Menu size={28} />}
				</button>
			</div>

			{/* Mobile Menu Dropdown */}
			<div
				className={clsx(
					'md:hidden transition-all duration-300 overflow-hidden bg-white px-6',
					menuOpen ? 'max-h-96 py-4' : 'max-h-0 py-0'
				)}
			>
				<nav className='flex flex-col gap-4'>
					{navLinks.map((link) => (
						<Link
							key={link.name}
							href={link.href}
							className='text-gray-700 hover:text-orange-500 font-medium'
							onClick={() => setMenuOpen(false)}
						>
							{link.name}
						</Link>
					))}
					<a
						href='#'
						className='mt-4 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm text-center shadow transition-colors'
						onClick={() => setMenuOpen(false)}
					>
						Book Now
					</a>
				</nav>
			</div>
		</header>
	);
}
