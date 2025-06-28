import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Header from '@/components/Header';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'ArepaBurguer | Venezuelan Gourmet Fusion',
	description:
		'ArepaBurguer fusiona la tradición venezolana con sabores gourmet. Disfruta de nuestras arepas, hamburguesas y platos caseros en un ambiente acogedor.',
	applicationName: 'ArepaBurguer',
	keywords: [
		'ArepaBurguer',
		'arepas gourmet',
		'hamburguesas Caracas',
		'comida venezolana',
		'comida rápida gourmet',
		'mejores arepas',
		'burger gourmet Venezuela',
	],
	authors: [{ name: 'ArepaBurguer', url: 'https://arepaburguer.com' }],
	colorScheme: 'light',
	creator: 'ArepaBurguer Dev Team',
	publisher: 'ArepaBurguer',
	openGraph: {
		title: 'ArepaBurguer | Venezuelan Gourmet Fusion',
		description:
			'Tradición y sabor gourmet en cada mordisco. Visítanos en Caracas y disfruta de nuestras especialidades venezolanas.',
		url: 'https://arepaburguer.com',
		siteName: 'ArepaBurguer',
		images: [
			{
				url: 'https://arepaburguer.com/assets/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'ArepaBurguer restaurant photo',
			},
		],
		locale: 'pt-BR',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Header />
				{children}
			</body>
		</html>
	);
}
