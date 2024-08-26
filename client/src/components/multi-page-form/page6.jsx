import { Helmet } from "react-helmet";
import { usePath } from "crossroad";

import { getPageAndPath } from "../../utils";

export default function PageSix({ values, addListing }) {
  const path = usePath();
  const { page, step } = getPageAndPath(path);
  return (
    <>
      <Helmet>
        <title>React State Form - Review & Submit</title>
      </Helmet>
      <h1 className="mt-4 text-2xl font-bold">Finalise</h1>

      <h2 className="mt-6 text-xl font-bold">
        <a href={`/${page}/1`}>Title & Category</a>
      </h2>
      <div className="mt-3">
        <dl className="grid md:grid-cols-2 border p-4 rounded-md">
          <dt className="text-lg font-semibold">Listing Title</dt>
          <dd className="capitalize">{values.titleCategory.listingTitle}</dd>

          <dt className="text-lg font-semibold">Category</dt>
          <dd className="capitalize">{values.titleCategory.category}</dd>

          <dt className="text-lg font-semibold">Sub Category</dt>
          <dd className="capitalize">{values.titleCategory.subCategory}</dd>

          <dt className="text-lg font-semibold">Sub Title</dt>
          <dd className="capitalize">{values.titleCategory.subTitle}</dd>
        </dl>
      </div>

      <h2 className="mt-6 text-xl font-bold">
        <a href={`/${page}/2`}>Item Details</a>
      </h2>
      <div className="mt-3">
        <dl className="grid md:grid-cols-2 border p-4 rounded-md">
          <dt className="text-lg font-semibold">Description</dt>
          <dd className="capitalize">{values.itemDetails.description}</dd>

          <dt className="text-lg font-semibold">Condition</dt>
          <dd className="capitalize">{values.itemDetails.condition}</dd>
        </dl>
      </div>

      <h2 className="mt-6 text-xl font-bold">
        <a href={`/${page}/3`}>Photos</a>
      </h2>
      <div className="mt-3">
        <dl className="grid md:grid-cols-2 border p-4 rounded-md">
          <dt className="text-lg font-semibold">Photos</dt>
          <dd className="flex flex-wrap gap-2">
            {values.photos.images.map((image) => (
              <img
                key={image.name}
                src={URL.createObjectURL(image)}
                alt={image.name}
                className="w-20 h-20 object-cover rounded-lg border"
              />
            ))}
          </dd>
        </dl>
      </div>

      <h2 className="mt-6 text-xl font-bold">
        <a href={`/${page}/4`}>Price & Payment</a>
      </h2>
      <div className="mt-3">
        <dl className="grid md:grid-cols-2 border p-4 rounded-md">
          <dt className="text-lg font-semibold">Start Price</dt>
          <dd className="capitalize">{values.pricePayment.listingPrice}</dd>

          <dt className="text-lg font-semibold">Reserve Price</dt>
          <dd className="capitalize">{values.pricePayment.reservePrice}</dd>

          <dt className="text-lg font-semibold">Payment Options</dt>
          <dd className="capitalize">{values.pricePayment.paymentOptions}</dd>
        </dl>
      </div>

      <h2 className="mt-6 text-xl font-bold">
        <a href={`/${page}/5`}>Shipping & Pick-up</a>
      </h2>
      <div className="mt-3">
        <dl className="grid md:grid-cols-2 border p-4 rounded-md">
          <dt className="text-lg font-semibold">Pick-up</dt>
          <dd className="capitalize">{values.shipping.pickUp}</dd>

          <dt className="text-lg font-semibold">Shipping Options</dt>
          <dd className="capitalize">{values.shipping.shippingOption}</dd>
        </dl>
      </div>

      <div className="mt-3">
        <button
          onClick={() => {
            addListing();
          }}
          type="button"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        >
          Start Listing
        </button>
      </div>
    </>
  );
}
