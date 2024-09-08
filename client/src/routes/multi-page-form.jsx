import React, { lazy, useState, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import api from "../api";

import BreadCrumbs from "../components/breadCrumbs";
// titleCategory
const PageOne = lazy(() => import("../components/multi-page-form/page1"));
// itemDetails
const PageTwo = lazy(() => import("../components/multi-page-form/page2"));
// pricePayment
const PageThree = lazy(() => import("../components/multi-page-form/page3"));
// shipping
const PageFour = lazy(() => import("../components/multi-page-form/page4"));
// review
const PageFive = lazy(() => import("../components/multi-page-form/page5"));

import Skeleton from "../components/skeleton";
import { listingSchema } from "../models/listingSchema";

export function RenderPage({
	step,
	formState,
	setFormState,
	handleAddListing,
}) {
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
					values={formState.pricePayment}
					setFormState={(newPricePayment) =>
						setFormState({
							...formState,
							pricePayment: newPricePayment,
						})
					}
				/>
			);
		case "4":
			return (
				<PageFour
					values={formState.shipping}
					setFormState={(newShipping) =>
						setFormState({ ...formState, shipping: newShipping })
					}
				/>
			);
		default:
			return <PageFive values={formState} addListing={handleAddListing} />;
	}
}

export default function MultiPageForm({ step }) {
	const [formState, setFormState] = useState(listingSchema);

	const handleAddListing = async () => {
		const listing = {
			listing: formState,
		};
		const response = await api.addListing(listing);

		if (!response.ok) {
			throw new Error("Error adding listing");
		}
		const result = await response.json();

		if (result.error) {
			throw new Error(result.error);
		}

		alert(`${JSON.stringify(result)} listing added`);
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
					<RenderPage
						step={step}
						formState={formState}
						setFormState={setFormState}
						handleAddListing={handleAddListing}
					/>
				</Suspense>
			</>
		</ErrorBoundary>
	);
}
