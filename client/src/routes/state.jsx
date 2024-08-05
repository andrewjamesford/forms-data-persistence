import { useState } from "react";

import BreadCrumbs from "../components/breadCrumbs";
import PageOne from "../components/listingForm/page1"; // titleCategory
import PageTwo from "../components/listingForm/page2"; // itemDetails
import PageThree from "../components/listingForm/page3"; // photos
import PageFour from "../components/listingForm/page4"; // pricePayment
import PageFive from "../components/listingForm/page5"; // shipping
import PageSix from "../components/listingForm/page6"; // review

export default function State({ step }) {
	const [formState, setFormState] = useState({
		titleCategory: {
			listingTitle: "",
			category: 0,
			subCategory: 0,
			subTitle: "",
		},
		itemDetails: {
			description: "",
			condition: "used",
		},
		photos: {
			images: [],
		},
		pricePayment: {
			listingPrice: "",
			reservePrice: "",
			creditCard: false,
			bankTransfer: false,
			bitcoin: false,
		},
		shipping: {
			pickUp: true,
			shippingOption: "post",
		},
	});

	return (
		<>
			<BreadCrumbs />
			{step === "1" && (
				<PageOne
					values={formState.titleCategory}
					setFormState={(newTitleCategory) =>
						setFormState({ ...formState, titleCategory: newTitleCategory })
					}
				/>
			)}
			{step === "2" && (
				<PageTwo
					values={formState.itemDetails}
					setFormState={(newItemDetails) =>
						setFormState({ ...formState, itemDetails: newItemDetails })
					}
				/>
			)}
			{step === "3" && (
				<PageThree
					values={formState.photos}
					setFormState={(newPhotos) =>
						setFormState({ ...formState, photos: newPhotos })
					}
				/>
			)}
			{step === "4" && (
				<PageFour
					values={formState.pricePayment}
					setFormState={(newPricePayment) =>
						setFormState({ ...formState, pricePayment: newPricePayment })
					}
				/>
			)}
			{step === "5" && (
				<PageFive
					values={formState.shipping}
					setFormState={(newShipping) =>
						setFormState({ ...formState, shipping: newShipping })
					}
				/>
			)}
			{step === "6" && <PageSix values={formState} />}
		</>
	);
}
