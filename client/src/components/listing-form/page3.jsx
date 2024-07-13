export default function PageThree() {
	return (
		<>
			<h1 className="mt-4 text-2xl font-bold">Photos</h1>
			<div className="mt-6">
				<label
					for="listing-description"
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
			<div className="mt-6">
				<label
					for="category"
					className="block text-sm font-medium text-gray-700"
				>
					Condition
				</label>
				<div className="flex mt-3">
					<input type="radio" id="new" name="condition" value="new" />
					<label for="new" className="ml-2 text-sm text-gray-700">
						New
					</label>
				</div>
				<div className="flex mt-3">
					<input type="radio" id="used" name="condition" value="used" />
					<label for="used" className="ml-2 text-sm text-gray-700">
						Used
					</label>
				</div>
			</div>

			<div className="mt-6">
				<button
					type="button"
					className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
				>
					Next
				</button>
			</div>
		</>
	);
}
