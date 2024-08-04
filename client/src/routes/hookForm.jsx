import { useState } from "react";

import BreadCrumbs from "../components/listingForm/breadCrumbs";
import PageOne from "../components/listingForm/page1"; // titleCategory
import PageTwo from "../components/listingForm/page2"; // itemDetails
import PageThree from "../components/listingForm/page3"; // photos
import PageFour from "../components/listingForm/page4"; // pricePayment
import PageFive from "../components/listingForm/page5"; // shipping
import PageSix from "../components/listingForm/page6"; // review

export default function HookForm({ step }) {
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
			listingPrice: 0,
			reservePrice: 0,
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
		<div>
			<BreadCrumbs />
			{step === "1" && <PageOne />}
			{step === "2" && <PageTwo />}
			{step === "3" && <PageThree />}
			{step === "4" && <PageFour />}
			{step === "5" && <PageFive />}
			{step === "6" && <PageSix />}
		</div>
	);
}
