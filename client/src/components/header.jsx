const Header = () => {
	return (
		<>
			<header className="flex items-center justify-between px-4 py-2 bg-white border-b">
				<div className="flex items-center space-x-4">
					<a href="/" className="text-sm text-black">
						<img src="/gavel.svg" alt="Logo" width="32" height="32" />
						SOLD!
					</a>
					<nav className="hidden space-x-4 md:flex pl-8">
						<a href="/state/1" className="text-sm text-gray-600">
							React State
						</a>
						<a href="/hook-form/1" className="text-sm text-gray-600">
							Hook Form
						</a>
					</nav>
				</div>
				<div className="flex items-center space-x-4">
					<div className="px-4">
						<input
							placeholder="Search all of Sold!"
							className="px-2 py-1 text-sm border rounded-md"
							type="text"
							control-id="ControlID-1"
						/>
					</div>

					<a href="/" className="text-sm text-gray-600">
						Start a listing
					</a>
					<a href="/" className="text-sm text-gray-600">
						My Sold!
					</a>
					<span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
						{/* <img
							className="aspect-square h-full w-full"
							src="/placeholder-user.jpg"
							alt="User profile"
						/> */}
					</span>
					<a href="/" className="text-sm text-gray-600">
						Log out
					</a>
				</div>
			</header>
		</>
	);
};

export default Header;
