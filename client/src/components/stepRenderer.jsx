import React from "react";
import { lazy } from "react";
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

export default function StepRenderer({
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
			return <PageSix values={formState} addListing={handleAddListing} />;
	}
}
