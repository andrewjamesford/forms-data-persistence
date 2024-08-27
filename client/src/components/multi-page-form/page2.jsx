import React, { useState } from "react";
import { usePath, useUrl } from "crossroad";
import { Helmet } from "react-helmet";
import { getPageAndPath } from "../../utils";

export default function PageTwo({ values, setFormState }) {
	const path = usePath();
	const { page, step } = getPageAndPath(path);

	const [itemDetails, setItemDetails] = useState(values);
	const [url, setUrl] = useUrl();

	const changeData = () => {
		setFormState(itemDetails);
	};

	const nextForm = () => {
		setUrl(`/${page}/${step + 1}`);
	};

	const previousForm = () => {
		changeData();
		setUrl(`/${page}/${step - 1}`);
	};

	const handleSubmit = () => {
		changeData();
		nextForm();
	};

	return (
		<form onSubmit={handleSubmit}>
			<Helmet>
				<title>Multi Page Form - Item Details</title>
			</Helmet>
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
					className="block w-full px-3 py-2 mt-1 border rounded-md invalid:text-red-600"
					value={itemDetails.description}
					onChange={(e) => {
						setItemDetails({ ...itemDetails, description: e.target.value });
					}}
					onBlur={changeData}
					required={true}
					maxLength={500}
					minLength={10}
				/>
			</div>
			<fieldset>
				<legend className="sr-only">Condition</legend>
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
							checked={itemDetails.condition === "used"}
							onChange={(e) => {
								setItemDetails({ ...itemDetails, condition: "used" });
							}}
							onBlur={changeData}
						/>
						<label htmlFor="used" className="ml-2 text-sm text-gray-700">
							Used
						</label>
					</div>
					<div className="flex mt-3">
						<input
							type="radio"
							id="new"
							name="condition"
							value="new"
							checked={itemDetails.condition === "new"}
							onChange={(e) => {
								setItemDetails({ ...itemDetails, condition: "new" });
							}}
							onBlur={changeData}
						/>
						<label htmlFor="new" className="ml-2 text-sm text-gray-700">
							New
						</label>
					</div>
				</div>
			</fieldset>

			<div className="mt-6 grid md:grid-flow-col md:w-1/2 gap-2">
				<button
					type="button"
					onClick={previousForm}
					className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-primary/30 h-10 px-4 py-2"
				>
					Previous
				</button>

				<button
					type="submit"
					className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
				>
					Next
				</button>
			</div>
		</form>
	);
}
