import { usePath } from "crossroad";

function NavItem({ href, isActive, children }) {
	return (
		<div>
			<a href={href} className={isActive ? "font-semibold" : ""}>
				{children}
			</a>
			<span>&nbsp;&gt;</span>
		</div>
	);
}

export default function BreadCrumbs() {
	const path = usePath();
	const stepArray = path[0].split("/");
	const step = stepArray[2];
	const page = stepArray[1];

	const steps = [
		{ href: `/${page}/1`, label: "Title & Category" },
		{ href: `/${page}/2`, label: "Item Details" },
		{ href: `/${page}/3`, label: "Photos" },
		{ href: `/${page}/4`, label: "Price & Payment" },
		{ href: `/${page}/5`, label: "Shipping & Pick-up" },
		{ href: `/${page}/6`, label: "Review & Submit" },
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
