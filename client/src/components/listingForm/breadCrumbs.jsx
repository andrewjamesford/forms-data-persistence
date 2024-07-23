import { usePath } from "crossroad";

export default function BreadCrumbs() {
	const path = usePath();
	const stepArray = path[0].split("/");
	const step = stepArray[2];
	const page = stepArray[1];
	return (
		<nav className="flex items-center space-x-2 text-sm text-gray-600 text-">
			<a href={`/${page}/1`} className={step === "1" ? "font-semibold" : ""}>
				Title &amp; Category
			</a>
			<span>&gt;</span>
			<a href={`/${page}/2`} className={step === "2" ? "font-semibold" : ""}>
				Item Details
			</a>
			<span>&gt;</span>
			<a href={`/${page}/3`} className={step === "3" ? "font-semibold" : ""}>
				Photos
			</a>
			<span>&gt;</span>
			<a href={`/${page}/4`} className={step === "4" ? "font-semibold" : ""}>
				Price &amp; Payment
			</a>
			<span>&gt;</span>
			<a href={`/${page}/5`} className={step === "5" ? "font-semibold" : ""}>
				Shipping &amp; Pick-up
			</a>
			<span>&gt;</span>
			<a href={`/${page}/6`} className={step === "6" ? "font-semibold" : ""}>
				Finalise
			</a>
		</nav>
	);
}
