export default function PageSix({ values }) {
	return (
		<>
			<h1 className="mt-4 text-2xl font-bold">Finalise</h1>

			<h2 className="mt-6 text-xl font-bold">Title & Category</h2>
			<div className="mt-6">
				<dl className="grid md:grid-cols-2">
					<dt className="text-lg font-semibold">Listing Title</dt>
					<dd>{values.titleCategory.listingTitle}</dd>

					<dt className="text-lg font-semibold">Category</dt>
					<dd>{values.titleCategory.category}</dd>

					<dt className="text-lg font-semibold">Sub Category</dt>
					<dd>{values.titleCategory.subCategory}</dd>

					<dt className="text-lg font-semibold">Sub Title</dt>
					<dd>{values.titleCategory.subTitle}</dd>
				</dl>
			</div>

			<h2 className="mt-6 text-xl font-bold">Item Details</h2>
			<div className="mt-6">
				<dl className="grid md:grid-cols-2">
					<dt className="text-lg font-semibold">Description</dt>
					<dd>{values.itemDetails.description}</dd>

					<dt className="text-lg font-semibold">Condition</dt>
					<dd>{values.itemDetails.condition}</dd>
				</dl>
			</div>

			<h2 className="mt-6 text-xl font-bold">Photos</h2>
			<div className="mt-6">
				<dl className="grid md:grid-cols-2">
					<dt className="text-lg font-semibold">Photos</dt>
					<dd>{values.photos.images}</dd>
				</dl>
			</div>

			<h2 className="mt-6 text-xl font-bold">Price & Payment</h2>
			<div className="mt-6">
				<dl className="grid md:grid-cols-2">
					<dt className="text-lg font-semibold">Start Price</dt>
					<dd>{values.pricePayment.listingPrice}</dd>

					<dt className="text-lg font-semibold">Reserve Price</dt>
					<dd>{values.pricePayment.reservePrice}</dd>

					<dt className="text-lg font-semibold">Payment Options</dt>
					<dd>{values.pricePayment.paymentOptions}</dd>
				</dl>
			</div>

			<h2 className="mt-6 text-xl font-bold">Shipping & Pick-up</h2>
			<div className="mt-6">
				<dl className="grid md:grid-cols-2">
					<dt className="text-lg font-semibold">Pick-up</dt>
					<dd>{values.shipping.pickUp}</dd>

					<dt className="text-lg font-semibold">Shipping Options</dt>
					<dd>{values.shipping.shippingOption}</dd>
				</dl>
			</div>

			<div className="mt-6">
				<button
					type="button"
					className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
				>
					Start Listing
				</button>
			</div>
		</>
	);
}
