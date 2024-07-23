import { usePath } from "crossroad";
export default function PageFour() {
	const path = usePath();
	const stepArray = path[0].split("/");
	const page = stepArray[1];
	return (
		<>
			<h1 className="mt-4 text-2xl font-bold">Price &amp; Payment</h1>
			<div className="mt-6">
				<label
					htmlFor="listing-price"
					className="block text-sm font-medium text-gray-700"
				>
					Start price
				</label>
				<span className="flex">
					<span className="pt-3 pr-2 text-lg">$</span>
					<input
						id="listing-price"
						placeholder="$10.00"
						className="block w-full px-3 py-2 mt-1 border rounded-md"
						type="number"
						min={1}
						step={1}
					/>
				</span>
				{/* <p className="mt-1 text-sm text-gray-500">80 characters remaining</p> */}
			</div>
			<div className="mt-6">
				<label
					htmlFor="listing-reserve"
					className="block text-sm font-medium text-gray-700"
				>
					Reserve price (optional)
				</label>
				<span className="flex">
					<span className="pt-3 pr-2 text-lg">$</span>
					<input
						id="listing-reserve"
						placeholder="$10.00"
						className="block w-full px-3 py-2 mt-1 border rounded-md"
						type="number"
						min={1}
						step={1}
					/>
				</span>
				{/* <p className="mt-1 text-sm text-gray-500">80 characters remaining</p> */}
			</div>
			<fieldset>
				<legend className="sr-only">Payment options</legend>
				<div className="mt-6">
					<label
						htmlFor="category"
						className="block text-sm font-medium text-gray-700"
					>
						Payment options
					</label>
					<div className="flex mt-3">
						<input
							type="radio"
							id="payment-credit"
							name="payment-type"
							value="new"
							defaultChecked
						/>
						<label
							htmlFor="payment-credit"
							className="ml-2 text-sm text-gray-700"
						>
							Credit Card
						</label>
					</div>
					<div className="flex mt-3">
						<input
							type="radio"
							id="payment-bank"
							name="payment-type"
							value="used"
						/>
						<label
							htmlFor="payment-bank"
							className="ml-2 text-sm text-gray-700"
						>
							Bank Transfer
						</label>
					</div>
					<div className="flex mt-3">
						<input
							type="radio"
							id="payment-bitcoin"
							name="payment-type"
							value="used"
						/>
						<label
							htmlFor="payment-bitcoin"
							className="ml-2 text-sm text-gray-700"
						>
							Bitcoin
						</label>
					</div>
				</div>
			</fieldset>

			<div className="mt-6">
				<a
					href={`/${page}/5`}
					className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
				>
					Next
				</a>
			</div>
		</>
	);
}
