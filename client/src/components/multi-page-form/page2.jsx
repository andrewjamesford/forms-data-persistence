import { usePath, useUrl } from "crossroad";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { getPageAndPath } from "../../utils/getPageAndPath";

export default function PageTwo({ values, setFormState }) {
	const path = usePath();
	const { page, step } = getPageAndPath(path);

	const [itemDetails, setItemDetails] = useState(values);
	const [, setUrl] = useUrl();

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
		<form onSubmit={handleSubmit} noValidate className="group">
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
					className="block w-full px-3 py-2 mt-1 border rounded-md invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-600 peer"
					value={itemDetails.description}
					onChange={(e) => {
						const value = e.target.value ?? "";
						setItemDetails({ ...itemDetails, description: value });
					}}
					onBlur={changeData}
					required={true}
					maxLength={500}
					minLength={10}
					placeholder="Describe your item"
				/>
				<span className="mt-1 hidden text-sm text-red-600 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
					Please enter a description of 10-500 characters
				</span>
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
							value={false}
							checked={itemDetails.condition === false}
							onChange={() => {
								setItemDetails({ ...itemDetails, condition: false });
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
							value={true}
							checked={itemDetails.condition === true}
							onChange={() => {
								setItemDetails({ ...itemDetails, condition: true });
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
					onClick={changeData}
					className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 group-invalid:pointer-events-none group-invalid:opacity-30"
				>
					Next
				</button>
			</div>
		</form>
	);
}
