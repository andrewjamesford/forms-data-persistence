export const multiFormSchema = {
	titleCategory: {
		title: "",
		categoryId: 0,
		subTitle: "",
		endDate: "",
	},
	itemDetails: {
		listingDescription: "",
		condition: "used",
	},
	photos: {
		images: [],
		heroImage: 0,
	},
	pricePayment: {
		listingPrice: "",
		reservePrice: "",
		creditCardPayment: false,
		bankTransferPayment: false,
		bitcoinPayment: false,
	},
	shipping: {
		pickUp: true,
		shippingOption: "post",
	},
};

export function getPageAndPath(path) {
	const stepArray = path[0]?.split("/");
	const page = stepArray[1] || "state";
	const step = Number.parseInt(stepArray[2]) || 1;
	return { page, step };
}
