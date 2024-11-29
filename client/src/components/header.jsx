import { usePath } from "crossroad";
import React, { lazy, Suspense, useState } from "react";
import { getPageAndPath } from "@/utils/getPageAndPath";
import { getLocalStorageItem, setLocalStorageItem } from "@/utils/localStorage";
import Loader from "@/components/loader";
const MenuLoggedIn = lazy(() => import("@/components/menuLoggedIn"));
const MenuLoggedOut = lazy(() => import("@/components/menuLoggedOut"));

export default function Header() {
	const path = usePath();
	const { page } = getPageAndPath(path);
	const storageKey = "isLoggedIn";
	const storageIsLoggedIn = getLocalStorageItem(storageKey) || false;
	const [isLoggedIn, setIsLoggedIn] = useState(storageIsLoggedIn);

	const handleLogout = () => {
		setIsLoggedIn(false);
		setLocalStorageItem(storageKey, false);
	};

	const handleLogin = () => {
		setIsLoggedIn(true);
		setLocalStorageItem(storageKey, true);
	};

	console.log("isLoggedIn", isLoggedIn);

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
					<Suspense fallback={<Loader />}>
						{isLoggedIn ? (
							<MenuLoggedIn
								menuProps={{ single, multi, simple }}
								onChange={() => handleLogout()}
							/>
						) : (
							<MenuLoggedOut onChange={() => handleLogin()} />
						)}
					</Suspense>
				</div>
			</header>
		</>
	);
}
