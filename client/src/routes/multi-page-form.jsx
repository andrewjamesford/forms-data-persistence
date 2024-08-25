import { useUrl } from "crossroad";
import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

import BreadCrumbs from "../components/breadCrumbs";
import PageOne from "../components/multi-page-form/page1"; // titleCategory
import PageTwo from "../components/multi-page-form/page2"; // itemDetails
import PageThree from "../components/multi-page-form/page3"; // photos
import PageFour from "../components/multi-page-form/page4"; // pricePayment
import PageFive from "../components/multi-page-form/page5"; // shipping
import PageSix from "../components/multi-page-form/page6"; // review

import multiFormSchema from "../utils";

export default function State({ step }) {
	const [url, setUrl] = useUrl();

	const [formState, setFormState] = useState(multiFormSchema);

	const addListing = async () => {
		const response = await api.addListing(formState);

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
		<ErrorBoundary fallback={<div>Something went wrong</div>}>
			<>
				<BreadCrumbs />
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
										setFormState({ ...formState, itemDetails: newItemDetails })
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
							return <PageSix values={formState} addListing={addListing} />;
					}
				})()}
			</>
		</ErrorBoundary>
	);
}
