import { usePath } from "crossroad";
import { getPageAndPath } from "../utils/getPageAndPath";

export default function Header() {
	const path = usePath();
	const { page } = getPageAndPath(path);

	const single = page === "single" ? "font-bold" : "";
	const simple = page === "simple" ? "font-bold" : "";
	const multi = page === "multi" ? "font-bold" : "";
	return (
		<>
			<header className="flex flex-col md:flex-row justify-between px-4 py-2 bg-white border-b">
				<div className="text-center mb-4 md:space-x-4">
					<a
						href="/"
						className="text-sm text-black text-center inline-flex items-center mt-2"
					>
						<img
							src="/gavel.svg"
							alt="Logo"
							width="32"
							height="32"
							className="inline w-20 md:w-10"
						/>
						<span className="text-3xl md:text-lg">SOLD!</span>
					</a>
				</div>
				<div className="flex flex-col text-center md:flex-row md:text-left gap-4 py-2 md:py-4">
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
							<a href="/" className="text-sm text-gray-600 underline">
								Log out
							</a>
						</li>
					</ul>
				</div>
			</header>
		</>
	);
}
