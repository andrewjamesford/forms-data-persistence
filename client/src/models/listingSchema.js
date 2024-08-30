import { addDays, format } from "date-fns";
export const endDate = format(addDays(new Date(), 1), "yyyy-MM-dd");

export const listingSchema = {
	titleCategory: {
		title: "",
		categoryId: 0,
		subCategoryId: 0,
		subTitle: "",
		endDate: endDate,
	},
	itemDetails: {
		description: "",
		condition: false,
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
