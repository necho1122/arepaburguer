import Hero from '@/components/Hero';
import Header from '@/components/Header';
import SpecialDishes from '@/components/SpecialDishes';
import Welcome from '@/components/Welcome';
import Chef from '@/components/Chef';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
	return (
		<div>
			<Header />
			<Hero />
			<SpecialDishes />
			<Welcome />
			<Chef />
			<Testimonials />
			<Footer />
		</div>
	);
}
