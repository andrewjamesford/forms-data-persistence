import { setLocalStorageItem } from "../utils/localStorage";

export default function MenuLoggedOut() {
	const handleLogin = () => {
		setLocalStorageItem("isLoggedIn", true);
	};

	return (
		<ul className="list-none gap-2 md:gap-4 flex flex-col items-center md:flex-row">
			<li>
				<button
					type="button"
					onClick={handleLogin}
					className="text-sm text-gray-600 underline"
				>
					Log In
				</button>
			</li>
		</ul>
	);
}
