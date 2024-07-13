export default function BreadCrumbs() {
	return (
		<nav className="flex items-center space-x-2 text-sm text-gray-600">
			<a href="/state/1" className="font-semibold">
				Title &amp; category
			</a>
			<span>&gt;</span>
			<a href="/state/2">Item details</a>
			<span>&gt;</span>
			<a href="/state/3">Photos</a>
			<span>&gt;</span>
			<a href="/state/4">Price &amp; payment</a>
			<span>&gt;</span>
			<a href="/state/5">Shipping &amp; pick-up</a>
			<span>&gt;</span>
			<a href="/state/6">Promote</a>
		</nav>
	);
}
