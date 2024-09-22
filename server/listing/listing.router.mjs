import express from "express";
const router = express.Router();
import Joi from "joi";
import bodyValidationMiddleware from "../middleware/bodyValidationMiddleware.mjs";
import {
	addListing,
	getListings,
	getDraftListing,
	addDraftListing,
	updateDraftListing,
} from "./listing.repository.mjs";

/**
 * Get all listings
 *
 * @name GET /listings
 * @function
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @param {Function} next - The next middleware function
 */
router.get("/", async (req, res, next) => {
	try {
		// Call getListings() to retrieve all listings from the database
		const getListingsResponse = await getListings();

		return res.json(getListingsResponse);
	} catch (err) {
		next(err);
	}
});

const addListingSchema = Joi.object().keys({
	listing: Joi.object({
		titleCategory: Joi.object({
			title: Joi.string().required(),
			subTitle: Joi.string(),
			categoryId: Joi.number().greater(0).required(),
			subCategoryId: Joi.number(),
			endDate: Joi.date().greater("now").required(),
		}).required(),
		itemDetails: Joi.object({
			description: Joi.string().required(),
			condition: Joi.boolean().required(),
		}).required(),
		pricePayment: Joi.object({
			listingPrice: Joi.string().required(),
			reservePrice: Joi.string(),
			creditCardPayment: Joi.boolean().required(),
			bankTransferPayment: Joi.boolean().required(),
			bitcoinPayment: Joi.boolean().required(),
		}).required(),
		shipping: Joi.object({
			pickUp: Joi.boolean().required(),
			shippingOption: Joi.string().required(),
		}).required(),
	})
		.required()
		.custom((value) => {
			if (
				value.pricePayment.creditCardPayment === false &&
				value.pricePayment.bankTransferPayment === false &&
				value.pricePayment.bitcoinPayment === false
			) {
				throw new Error("At least one of the payment methods must be selected");
			}
		}),
});

/**
 * Add a new Listing
 *
 * @name POST /listings
 * @function
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @param {Function} next - The next middleware function
 */
router.post(
	"/",
	bodyValidationMiddleware(addListingSchema),
	async (req, res, next) => {
		try {
			const listing = req.body.listing;

			const addListingResponse = await addListing(listing);

			return res.json(addListingResponse);
		} catch (err) {
			console.error(err);
			next(err);
		}
	},
);

/**
 * Save draft listing
 *
 * @name POST /listings/:email
 * @function
 * @param {string} req.params.email - The email of the user to save their draft listing for
 * @param {Object} req.body.listing - The draft listing data to be saved
 * @param {Object} res - The response object
 * @param {Function} next - The next middleware function
 */
router.post("/:email", async (req, res, next) => {
	try {
		const email = req?.params?.email;
		const draft = req?.body?.listing;

		// Call getListingByEmail() to check if the user already has a saved listing
		const listings = await getDraftListing(email);

		if (listings !== null && listings !== undefined && listings.length <= 0) {
			// If no existing listing is found, call addDraftListing() to create a new draft listing for the user
			const addDraftListingResponse = await addDraftListing(draft, email);

			if (addDraftListingResponse !== null) return res.json(true);
		}
		// If an existing listing is found, call updateDraftListing() to update the draft listing with the new data
		const updateDraftListingResponse = await updateDraftListing(draft, email);

		if (updateDraftListingResponse !== null) return res.json(true);

		return res.json(false);
	} catch (err) {
		console.error(err);
		next(err);
	}
});

/**
 * Get draft listing by email address
 *
 * @name GET /listings/:email
 * @function
 * @param {string} req.params.email - The email of the user to get their draft listing from
 * @param {Object} res - The response object
 * @param {Function} next - The next middleware function
 */
router.get("/:email", async (req, res, next) => {
	try {
		const email = req.params.email;
		const listings = await getDraftListing(email);
		return res.json(listings);
	} catch (err) {
		console.error(err);
		next(err);
	}
});

export default router;
