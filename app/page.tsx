import Hero from '@/components/Hero';
import SpecialDishes from '@/components/SpecialDishes';
import Welcome from '@/components/Welcome';
import Chef from '@/components/Chef';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
	return (
		<div>
			<Hero />
			<SpecialDishes />
			<Welcome />
			<Chef />
			<Testimonials />
			<Footer />
		</div>
	);
}
