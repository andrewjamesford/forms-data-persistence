import { usePath } from "crossroad";

export default function PageOne() {
	const path = usePath();
	const stepArray = path[0].split("/");
	const page = stepArray[1];
	return (
		<>
			<h1 className="mt-4 text-2xl font-bold">What are you listing?</h1>
			<div className="mt-6">
				<label
					htmlFor="listing-title"
					className="block text-sm font-medium text-gray-700"
				>
					Listing title
				</label>
				<input
					id="listing-title"
					placeholder="e.g. iPhone 5c, Red t-shirt"
					className="block w-full px-3 py-2 mt-1 border rounded-md"
					type="text"
					control-id="ControlID-2"
				/>
				<p className="mt-1 text-sm text-gray-500">80 characters remaining</p>
			</div>
			<div className="mt-6">
				<label
					htmlFor="category"
					className="block text-sm font-medium text-gray-700"
				>
					Category
				</label>
				<div className="mt-1">
					<button
						className="w-full px-3 py-2 text-left text-blue-600 border rounded-md"
						type="button"
						id="listing-category"
					>
						Choose category
					</button>
					<p className="mt-1 text-sm text-gray-500">
						We'll suggest a category based on your title, too.
					</p>
				</div>
			</div>
			<div className="mt-6">
				<label
					htmlFor="sub-title"
					className="block text-sm font-medium text-gray-700"
				>
					Subtitle
				</label>
				<input
					id="sub-title"
					placeholder="e.g. iPhone 5c, Red t-shirt"
					className="block w-full px-3 py-2 mt-1 border rounded-md"
					type="text"
					control-id="ControlID-2"
				/>
				<p className="mt-1 text-sm text-gray-500">50 characters remaining</p>
			</div>
			<div className="mt-6">
				<a
					href={`/${page}/2`}
					className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
				>
					Next
				</a>
			</div>
		</>
	);
}
