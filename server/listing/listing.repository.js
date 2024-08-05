const db = require("../db");

module.exports = {
	getListings: async () => {
		try {
			const result = await db.query(
				`select l.id, l.title, l.subtitle, l.description, l.listingprice, l.conditionnew, c."name" as category from listings l inner join categories c on c.id = l.category_id 
        `,
			);
			return result.rows;
		} catch (error) {
			throw Error(error);
		}
	},
	addListing: async (listingDetails) => {
		try {
			const result = await db.query(
				`insert into listings (title, subtitle, description, listingprice, conditionnew, category_id, parent_id)
VALUES ($1, $2, $3, $4, $5, $6, $7);
        `,
				[
					listingDetails.titleCategory.listingTitle,
					listingDetails.titleCategory.parent_id,
					listingDetails.titleCategory.category,
					listingDetails.titleCategory.subTitle,
					listingDetails.itemDetails.description,
					listingDetails.pricePayment.listingprice,
					listingDetails.pricePayment.reservePrice,
					listingDetails.itemDetails.condition,
					listingDetails.photos.images,
					listingDetails.parent_id,
				],
			);
			return result.rows;
		} catch (error) {
			throw Error(error);
		}
	},
};
