const express = require("express");
const Joi = require("joi");
const router = express.Router();
const queryParamValidationMiddleware = require("../middleware/queryParamValidationMiddleware");
const productRepository = require("./categories.repository");
const categoriesRepository = require("./categories.repository");

router.get("/", async (req, res, next) => {
	try {
		const categories = await categoriesRepository.getCategories();

		const responseResults = {
			categories,
		};

		return res.json(responseResults);
	} catch (err) {
		next(err);
	}
});

module.exports = router;
