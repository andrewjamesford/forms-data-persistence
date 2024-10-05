import React, { lazy, useState, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import api from "../api";
import { generateUUID } from "src/utils/generateUUID";
import { getLocalStorageItem } from "src/utils/localStorage";
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

	const handleLoadDraft = async (email) => {
		try {
			const response = await api.getDraftListing(email);
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			const result = await response.json();

			if (!result || result.length === 0) {
				throw new Error("No draft record found");
			}

			const draftValues = result[0]?.draft || {};

			setFormState((prevState) => {
				const newState = {
					...prevState,
					titleCategory: draftValues.titleCategory || prevState.titleCategory,
					itemDetails: draftValues.itemDetails || prevState.itemDetails,
					pricePayment: draftValues.pricePayment || prevState.pricePayment,
					shipping: draftValues.shipping || prevState.shipping,
				};
				console.log("New form state:", newState);
				return newState;
			});

			console.log("Draft loaded successfully:", draftValues);
		} catch (error) {
			console.error("Error loading draft:", error.message);
		}
	};

	console.log("Listing form state:", formState);
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
					{step === "1" && (
						<PageOne
							values={formState.titleCategory}
							setFormState={(newTitleCategory) =>
								setFormState({
									...formState,
									titleCategory: newTitleCategory,
								})
							}
							handleLoadDraft={handleLoadDraft}
						/>
					)}
					{step === "2" && (
						<PageTwo
							values={formState.itemDetails}
							setFormState={(newItemDetails) =>
								setFormState({
									...formState,
									itemDetails: newItemDetails,
								})
							}
						/>
					)}
					{step === "3" && (
						<PageThree
							values={formState.pricePayment}
							setFormState={(newPricePayment) =>
								setFormState({
									...formState,
									pricePayment: newPricePayment,
								})
							}
						/>
					)}
					{step === "4" && (
						<PageFour
							values={formState.shipping}
							setFormState={(newShipping) =>
								setFormState({ ...formState, shipping: newShipping })
							}
						/>
					)}
					{step === "5" && (
						<PageFive values={formState} addListing={handleAddListing} />
					)}
				</Suspense>
			</>
		</ErrorBoundary>
	);
}
