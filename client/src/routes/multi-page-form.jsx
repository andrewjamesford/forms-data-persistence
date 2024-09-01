import React, { Suspense, lazy } from "react";
import { useUrl } from "crossroad";
import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import api from "../api";

import BreadCrumbs from "../components/breadCrumbs";
// titleCategory
const PageOne = lazy(() => import("../components/multi-page-form/page1"));
// itemDetails
const PageTwo = lazy(() => import("../components/multi-page-form/page2"));
// photos
const PageThree = lazy(() => import("../components/multi-page-form/page3"));
// pricePayment
const PageFour = lazy(() => import("../components/multi-page-form/page4"));
// shipping
const PageFive = lazy(() => import("../components/multi-page-form/page5"));
// review
const PageSix = lazy(() => import("../components/multi-page-form/page6"));

import { listingSchema } from "../models/listingSchema";
import Skeleton from "../components/skeleton";

export default function State({ step }) {
	const [url, setUrl] = useUrl();

	const [formState, setFormState] = useState(listingSchema);

	const handleAddListing = async () => {
		const listing = {
			listing: formState,
		};
		console.log("formState", formState, listing);
		const response = await api.addListing(listing);

		if (!response.ok) {
			throw new Error("Error adding listing");
		}
		const result = await response.json();

		if (result.error) {
			throw new Error(result.error);
		}
		// redirect to listing page
		setUrl("/");
	};

	return (
		<ErrorBoundary
			fallback={<div>Something went wrong</div>}
			onError={(error) => console.error(error)}
		>
			<>
				<BreadCrumbs />
				<Suspense
					fallback={
						<div className="mt-6">
							<Skeleton />
						</div>
					}
				>
					{(() => {
						switch (step) {
							case "1":
								return (
									<PageOne
										values={formState.titleCategory}
										setFormState={(newTitleCategory) =>
											setFormState({
												...formState,
												titleCategory: newTitleCategory,
											})
										}
									/>
								);
							case "2":
								return (
									<PageTwo
										values={formState.itemDetails}
										setFormState={(newItemDetails) =>
											setFormState({
												...formState,
												itemDetails: newItemDetails,
											})
										}
									/>
								);
							case "3":
								return (
									<PageThree
										values={formState.photos}
										setFormState={(newPhotos) =>
											setFormState({ ...formState, photos: newPhotos })
										}
									/>
								);
							case "4":
								return (
									<PageFour
										values={formState.pricePayment}
										setFormState={(newPricePayment) =>
											setFormState({
												...formState,
												pricePayment: newPricePayment,
											})
										}
									/>
								);
							case "5":
								return (
									<PageFive
										values={formState.shipping}
										setFormState={(newShipping) =>
											setFormState({ ...formState, shipping: newShipping })
										}
									/>
								);
							default:
								return (
									<PageSix values={formState} addListing={handleAddListing} />
								);
						}
					})()}
				</Suspense>
			</>
		</ErrorBoundary>
	);
}
