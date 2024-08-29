import express from "express";
const router = express.Router();
import Joi from "joi";
import bodyValidationMiddleware from "../middleware/bodyValidationMiddleware.mjs";
import { addListing, getListings } from "./listing.repository.mjs";
import { end } from "../db.cjs";

router.get("/", async (req, res, next) => {
	try {
		const getListingsResponse = await getListings();

		return res.json(getListingsResponse);
	} catch (err) {
		next(err);
	}
});

const addListingSchema = Joi.object().keys({
	titleCategory: Joi.object({
		title: Joi.string().required(),
		categoryId: Joi.number().greater(0).required(),
		subTitle: Joi.string(),
		endDate: Joi.date().greater("now").less("14 days").required(),
	}).required(),
	itemDetails: Joi.object({
		description: Joi.string().required(),
		condition: Joi.string().required(),
	}).required(),
	photos: Joi.object({
		images: Joi.array().items(Joi.string()),
		heroImage: Joi.number().required(),
	}).required(),
	pricePayment: Joi.object({
		listingPrice: Joi.string().required(),
		reservePrice: Joi.string().required(),
		creditCardPayment: Joi.boolean().required(),
		bankTransferPayment: Joi.boolean().required(),
		bitcoinPayment: Joi.boolean().required(),
		
	}).required(),
	shipping: Joi.object({
		pickUp: Joi.boolean().required(),
		shippingOption: Joi.string().required(),
	}).required(),
});

router.post(
	"/",
	// bodyValidationMiddleware(addListingSchema),
	async (req, res, next) => {
		try {
			const listing = req.body;

			const addListingResponse = await addListing(listing);

			return res.json(addListingResponse);
		} catch (err) {
			next(err);
		}
	},
);

export default router;
