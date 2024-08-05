const listingFormObject = {
	titleCategory: {
		title: "",
		categoryId: 0,
		subTitle: "",
		endDate: "",
	},
	itemDetails: {
		listingDescription: "",
		conditionNew: "used",
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

export default listingFormObject;
