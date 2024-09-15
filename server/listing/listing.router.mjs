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

router.get("/", async (req, res, next) => {
	try {
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

router.post("/:email", async (req, res, next) => {
	try {
		const email = req.params.email;
		const draft = req.body.draft;

		const listings = await getListingByEmail(email);

		if (listings === null || listings === undefined) {
			const addDraftListingResponse = await addDraftListing(draft, email);

			return addDraftListingResponse;
		}
		const updateDraftListingResponse = await updateDraftListing({
			draft,
			email,
		});
		return updateDraftListingResponse;
	} catch (err) {
		console.error(err);
		next(err);
	}
});

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
