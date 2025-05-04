export default function Logo({ className = '' }: { className?: string }) {
	return (
		<div className={`text-primary text-2xl font-bold ${className}`}>
			Restaurant
		</div>
	);
}
