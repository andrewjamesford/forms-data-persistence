const express = require("express");
const router = express.Router();
const reportRepository = require("./listing.repository");
const bodyValidationMiddleware = require("../middleware/bodyValidationMiddleware");
const Joi = require("joi");

router.get("/", async (req, res, next) => {
	try {
		const getListingsResponse = await reportRepository.getListings();

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

			const addListingResponse = await reportRepository.addListing(listing);

			return res.json(addListingResponse);
		} catch (err) {
			next(err);
		}
	},
);

module.exports = router;
