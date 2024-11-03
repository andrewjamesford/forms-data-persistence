import { usePath } from "crossroad";

function NavItem({ href, isActive, children }) {
	return (
		<div>
			{isActive ? (
				<a href={href} className={"font-semibold underline"}>
					{children}
				</a>
			) : (
				<span className="text-slate-400">{children}</span>
			)}
			<span className="text-slate-400">&nbsp;&gt;</span>
		</div>
	);
}

export default function BreadCrumbs({ currentStep }) {
	const path = usePath();
	const stepArray = path[0].split("/");
	const step = stepArray[2];
	const page = stepArray[1];

	const steps = [
		{ href: `/${page}/1`, label: "Title & Category" },
		{ href: `/${page}/2`, label: "Item Details" },
		{ href: `/${page}/3`, label: "Price & Payment" },
		{ href: `/${page}/4`, label: "Shipping & Pick-up" },
		{ href: `/${page}/5`, label: "Review & Submit" },
	];

	return (
		<nav className="invisible md:visible flex items-center space-x-2 text-sm text-gray-600">
			{steps.map((item, index) => (
				<NavItem
					key={item.label}
					href={item.href}
					isActive={step === (index + 1).toString()}
				>
					{item.label}
				</NavItem>
			))}
		</nav>
	);
}
