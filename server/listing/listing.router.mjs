import express from "express";
const router = express.Router();
import Joi from "joi";
import bodyValidationMiddleware from "../middleware/bodyValidationMiddleware.mjs";
import { addListing, getListings } from "./listing.repository.mjs";

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
		listingTitle: Joi.string().required(),
		category: Joi.number().greater(0).required(),
		subCategory: Joi.number().greater(0).required(),
		subTitle: Joi.string(),
	}).required(),
	itemDetails: Joi.object({
		description: Joi.string().required(),
		condition: Joi.string().required(),
	}).required(),
	photos: Joi.object({
		images: Joi.array().items(Joi.string()),
	}).required(),
	pricePayment: Joi.object({
		listingPrice: Joi.string().required(),
		reservePrice: Joi.string().required(),
		creditCard: Joi.boolean().required(),
		bankTransfer: Joi.boolean().required(),
		bitcoin: Joi.boolean().required(),
	}).required(),
	shipping: Joi.object({
		pickUp: Joi.boolean().required(),
		shippingOption: Joi.string().required(),
	}).required(),
});

router.post(
	"/",
	bodyValidationMiddleware(addListingSchema),
	async (req, res, next) => {
		try {
			const { listing } = req.body;

			const addListingResponse = await addListing(listing);

			return res.json(addListingResponse);
		} catch (err) {
			next(err);
		}
	},
);

export default router;
