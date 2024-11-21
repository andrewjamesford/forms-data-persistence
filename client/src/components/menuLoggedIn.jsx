export default function MenuLoggedIn({ menuProps, onChange }) {
	const { single, simple, multi } = menuProps;

	return (
		<ul className="list-none gap-2 md:gap-4 flex flex-col items-center md:flex-row">
			<li>
				<a
					href="/single/"
					className={`${single} text-sm text-gray-600 underline`}
				>
					Single Page Form
				</a>
			</li>
			<li>
				<a
					href="/simple/"
					className={`${simple} text-sm text-gray-600 underline`}
				>
					Simple Form
				</a>
			</li>

			<li>
				<a
					href="/multi/1"
					className={`${multi} text-sm text-gray-600 underline`}
				>
					Multi Page Form
				</a>
			</li>
			<li>
				<a href="/" className="text-sm text-gray-600 underline">
					My Sold!
				</a>
			</li>
			<li>
				<button
					type="button"
					onClick={onChange}
					className="text-sm text-gray-600 underline"
				>
					Log out
				</button>
			</li>
		</ul>
	);
}
