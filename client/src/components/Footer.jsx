const Footer = () => {
	return (
		<footer className="px-4 py-2 bg-gray-100">
			<div className="flex items-center space-x-2 text-sm">
				<div
					className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80"
					data-v0-t="badge"
				>
					New
				</div>
				<p className="text-gray-600">Welcome to the new-look Trade Me</p>
				<a href="/" className="text-blue-600">
					Learn more
				</a>
				<a href="/" className="text-blue-600">
					Tell us what you think
				</a>
			</div>
		</footer>
	);
};

export default Footer;
