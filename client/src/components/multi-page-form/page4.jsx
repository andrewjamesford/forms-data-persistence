import { useState } from "react";
import { Helmet } from "react-helmet";
import { usePath, useUrl } from "crossroad";

export default function PageFour({ values, setFormState }) {
	const path = usePath();
	const stepArray = path[0].split("/");
	const page = stepArray[1];
	const step = Number.parseInt(stepArray[2]) || 1;

	const [pricePayment, setPricePayment] = useState(values);
	const [url, setUrl] = useUrl();
	const [checkRequired, setCheckRequired] = useState(true);

	const changeData = () => {
		setFormState(pricePayment);
	};

	const checkPaymentRequired = () => {
		// Check if at least one payment option is selected
		if (
			pricePayment.creditCard ||
			pricePayment.bankTransfer ||
			pricePayment.bitcoin
		) {
			setCheckRequired(false);
		} else {
			setCheckRequired(true);
		}
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
				<title>React State Form - Price & Payment</title>
			</Helmet>
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
						value={pricePayment.listingPrice}
						required={true}
						onChange={(e) => {
							setPricePayment({
								...pricePayment,
								listingPrice: e.target.value,
							});
						}}
						onBlur={changeData}
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
						min={0}
						step={1}
						value={pricePayment.reservePrice}
						onChange={(e) => {
							setPricePayment({
								...pricePayment,
								reservePrice: e.target.value,
							});
						}}
						onBlur={changeData}
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
							type="checkbox"
							id="payment-credit"
							name="payment-type"
							value="credit-card"
							onChange={(e) => {
								setPricePayment({
									...pricePayment,
									creditCard: !pricePayment.creditCard,
								});
								checkPaymentRequired();
							}}
							onBlur={changeData}
							checked={pricePayment.creditCard}
							required={checkRequired}
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
							type="checkbox"
							id="payment-bank"
							name="payment-type"
							value="bank-transfer"
							onChange={(e) => {
								setPricePayment({
									...pricePayment,
									bankTransfer: !pricePayment.bankTransfer,
								});
								checkPaymentRequired();
							}}
							onBlur={changeData}
							checked={pricePayment.bankTransfer}
							required={checkRequired}
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
							type="checkbox"
							id="payment-bitcoin"
							name="payment-type"
							value="bitcoin"
							onChange={(e) => {
								setPricePayment({
									...pricePayment,
									bitcoin: !pricePayment.bitcoin,
								});
								checkPaymentRequired();
							}}
							onBlur={changeData}
							checked={pricePayment.bitcoin}
							required={checkRequired}
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
