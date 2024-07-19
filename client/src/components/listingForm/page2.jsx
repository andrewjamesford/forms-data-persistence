import { usePath } from "crossroad";

export default function PageTwo() {
	const path = usePath();
	const stepArray = path[0].split("/");
	const page = stepArray[1];
	return (
		<>
			<h1 className="mt-4 text-2xl font-bold">Item details</h1>
			<div className="mt-6">
				<label
					htmlFor="listing-description"
					className="block text-sm font-medium text-gray-700"
				>
					Description
				</label>

				<textarea
					id="listing-description"
					className="block w-full px-3 py-2 mt-1 border rounded-md"
				/>
				{/* <p className="mt-1 text-sm text-gray-500">80 characters remaining</p> */}
			</div>
			<fieldset>
				<legend>Condition</legend>
				<div className="mt-6">
					<label
						htmlFor="category"
						className="block text-sm font-medium text-gray-700"
					>
						Condition
					</label>
					<div className="flex mt-3">
						<input
							type="radio"
							id="used"
							name="condition"
							value="used"
							defaultChecked
						/>
						<label htmlFor="used" className="ml-2 text-sm text-gray-700">
							Used
						</label>
					</div>
					<div className="flex mt-3">
						<input type="radio" id="new" name="condition" value="new" />
						<label htmlFor="new" className="ml-2 text-sm text-gray-700">
							New
						</label>
					</div>
				</div>
			</fieldset>

			<div className="mt-6">
				<button
					type="button"
					className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
				>
					Next
				</button>
			</div>
		</>
	);
}
