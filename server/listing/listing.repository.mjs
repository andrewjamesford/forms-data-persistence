import { query } from "../db.cjs";

export const getListings = async () => {
	try {
		const result = await query(
			`SELECT l.id, l.title, l.sub_title, l.listing_description, l.listing_price, l.condition_new, c.category_name AS category FROM listings l INNER JOIN categories c ON c.id = l.category_id
      `,
		);
		return result.rows ?? [];
	} catch (error) {
		throw new Error(error);
	}
};

export const addListing = async (listingDetails) => {
	try {
		const { titleCategory, itemDetails, photos, pricePayment, shipping } =
			listingDetails;

		const {
			title = "",
			categoryId = 0,
			subTitle = "",
			endDate,
		} = titleCategory;

		const { condition = false, description = "" } = itemDetails;

		const { images = [], heroImage = 0 } = photos;

		const {
			listingPrice = "",
			reservePrice = "",
			creditCardPayment = false,
			bankTransferPayment = false,
			bitcoinPayment = false,
		} = pricePayment;

		const { pickUp = true, shippingOption = "post" } = shipping;

		const result = await query(
			`INSERT INTO listings (
			title, 
			category_id, 
			sub_title, 
			end_date, 
			listing_description, 
			condition_new, 
			listing_price, 
			reserve_price, 
			credit_card_payment, 
			bank_transfer_payment, 
			bitcoin_payment, 
			pick_up, 
			shipping_option)
			VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13);
      `,
			[
				title,
				categoryId,
				subTitle,
				endDate,
				description,
				condition,
				listingPrice,
				reservePrice,
				creditCardPayment,
				bankTransferPayment,
				bitcoinPayment,
				pickUp,
				shippingOption,
			],
		);
		return result.rowCount ?? 0;
	} catch (error) {
		throw new Error(`Error adding listing: ${error.message}`);
	}
};
