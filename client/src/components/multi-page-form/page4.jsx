import { usePath, useUrl } from "crossroad";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { getPageAndPath } from "../../utils/getPageAndPath";

export default function PageFour({
	values,
	setFormState,
	handleLoadDraft,
	draftAvailable,
}) {
	const path = usePath();
	const { page, step } = getPageAndPath(path);

	const [shipping, setShipping] = useState(values);
	const [url, setUrl] = useUrl();

	const changeData = () => {
		setFormState(shipping);
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
		<form onSubmit={handleSubmit} noValidate>
			<h1 className="mt-4 text-2xl font-bold">Shipping & pick-up</h1>
			<fieldset>
				<legend className="sr-only">Pick up?</legend>

				<div className="mt-6">
					<label
						htmlFor="category"
						className="block text-sm font-medium text-gray-700"
					>
						Pick up?
					</label>
					<div className="flex mt-3">
						<input
							type="radio"
							id="pick-up-true"
							name="pick-up"
							value="true"
							checked={shipping.pickUp === true}
							onChange={(e) => {
								setShipping({ ...shipping, pickUp: true });
							}}
							onBlur={changeData}
						/>
						<label
							htmlFor="pick-up-true"
							className="ml-2 text-sm text-gray-700"
						>
							Yes
						</label>
					</div>
					<div className="flex mt-3">
						<input
							type="radio"
							id="pick-up-false"
							name="pick-up"
							value="false"
							checked={shipping.pickUp === false}
							onChange={(e) => {
								setShipping({ ...shipping, pickUp: false });
							}}
							onBlur={changeData}
						/>
						<label
							htmlFor="pick-up-false"
							className="ml-2 text-sm text-gray-700"
						>
							No
						</label>
					</div>
				</div>
			</fieldset>

			<fieldset>
				<legend className="sr-only">Shipping options</legend>
				<div className="mt-6">
					<label
						htmlFor="shipping-option"
						className="block text-sm font-medium text-gray-700"
					>
						Shipping options
					</label>

					<div className="flex mt-3">
						<input
							type="radio"
							id="shipping-option-courier"
							name="shipping-option"
							value="courier"
							checked={shipping.shippingOption === "courier"}
							onChange={(e) => {
								setShipping({ ...shipping, shippingOption: "courier" });
							}}
							onBlur={changeData}
						/>
						<label
							htmlFor="shipping-option-courier"
							className="ml-2 text-sm text-gray-700"
						>
							Courier
						</label>
					</div>

					<div className="flex mt-3">
						<input
							type="radio"
							id="shipping-option-post"
							name="shipping-option"
							value="post"
							checked={shipping.shippingOption === "post"}
							onChange={(e) => {
								setShipping({ ...shipping, shippingOption: "post" });
							}}
							onBlur={changeData}
						/>
						<label
							htmlFor="shipping-option-free"
							className="ml-2 text-sm text-gray-700"
						>
							Post
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
				{draftAvailable && (
					<button
						type="button"
						onClick={() => handleLoadDraft(values.titleCategory.userId)}
						className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-secondary text-primary hover:bg-primary/20 h-10 px-4 py-2	 border border-card-primary/"
					>
						Load Draft
					</button>
				)}
			</div>
		</form>
	);
}
