import React, { lazy, useState, Suspense, useEffect } from "react";
import api from "../api";
import { getLocalStorageItem } from "../utils/localStorage";

import BreadCrumbs from "../components/breadCrumbs";
// titleCategory
import PageOne from "../components/multi-page-form/page1";
// itemDetails
import PageTwo from "../components/multi-page-form/page2";
// pricePayment
import PageThree from "../components/multi-page-form/page3";
// shipping
import PageFour from "../components/multi-page-form/page4";
// review
import PageFive from "../components/multi-page-form/page5";

import { listingSchema } from "../models/listingSchema";

export default function MultiPageForm({ step }) {
	const userID = getLocalStorageItem("userId");
	// Add userId to formState
	const [formState, setFormState] = useState({
		...listingSchema,
		titleCategory: {
			...listingSchema.titleCategory,
			userId: userID,
		},
	});

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

	const handleLoadDraft = async (userId) => {
		try {
			const response = await api.getDraftListing(userId);
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

	const saveDraft = async () => {
		const listing = {
			listing: formState,
		};
		if (!formState) {
			throw new Error("No form state to save");
		}
		const response = await api.saveDraftListing(userID, listing);
		if (!response.ok) {
			throw new Error("Error saving draft");
		}
		const result = await response.json();
		if (result.error) {
			throw new Error(result.error);
		}
		console.log("Draft saved successfully");
	};

	console.log("Listing form state:", formState, step);
	return (
		<>
			<BreadCrumbs currentStep={step} />
			{step === "1" && (
				<PageOne
					values={formState.titleCategory}
					setFormState={(newTitleCategory) => {
						setFormState({
							...formState,
							titleCategory: newTitleCategory,
						});
						saveDraft();
					}}
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
		</>
	);
}
