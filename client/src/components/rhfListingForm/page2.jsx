import React, { useState } from "react";
import { usePath } from "crossroad";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";

export default function PageTwo({ values, setFormState }) {
	const path = usePath();
	const stepArray = path[0].split("/");
	const page = stepArray[1];

	const [itemDetails, setItemDetails] = useState(values);

	const changeData = () => {
		setFormState(itemDetails);
	};

	return (
		<>
			<Helmet>
				<title>React State Form - Item Details</title>
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
					className="block w-full px-3 py-2 mt-1 border rounded-md"
					{...register("itemDetails.description", {
						maxLength: 500,
						required: true,
					})}
				/>
				{errors.itemDetails?.description && (
					<span className="text-sm text-red-500">
						This field is required and must be less than 500 characters
					</span>
				)}
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
							{...register("itemDetails.condition", { required: true })}
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
							{...register("itemDetails.condition", { required: true })}
						/>
						<label htmlFor="new" className="ml-2 text-sm text-gray-700">
							New
						</label>
					</div>
				</div>
			</fieldset>

			<div className="mt-6">
				<a
					href={`/${page}/3`}
					className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
				>
					Next
				</a>
			</div>
		</>
	);
}
