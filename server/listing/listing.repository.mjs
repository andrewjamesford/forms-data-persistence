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
		const result = await query(
			`INSERT INTO listings (title, category_id, sub_title, end_date, listing_description, condition_new, images, hero_image, listing_price, reserve_price, credit_card_payment, bank_transfer_payment, bitcoin_payment, pick_up, shipping_option)
								VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14);
      `,
			[
				listingDetails.titleCategory.title,
				listingDetails.titleCategory.categoryId,
				listingDetails.titleCategory.subTitle,
				listingDetails.titleCategory.endDate,

				listingDetails.itemDetails.description,
				listingDetails.itemDetails.condition,

				listingDetails.photos.images,
				listingDetails.photos.heroImage,

				listingDetails.pricePayment.listingPrice,
				listingDetails.pricePayment.reservePrice,
				listingDetails.pricePayment.creditCardPayment,
				listingDetails.pricePayment.bankTransferPayment,
				listingDetails.pricePayment.bitcoinPayment,

				listingDetails.shipping.pickUp,
				listingDetails.shipping.shippingOption,
			],
		);
		return result.rows ?? [];
	} catch (error) {
		throw new Error(`Error adding listing: ${error.message}`);
	}
};
