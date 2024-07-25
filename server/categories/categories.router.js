const express = require("express");
const Joi = require("joi");
const router = express.Router();
const queryParamValidationMiddleware = require("../middleware/queryParamValidationMiddleware");
const productRepository = require("./categories.repository");
const categoriesRepository = require("./categories.repository");

router.get("/", async (req, res, next) => {
	try {
		const parentId = req?.query?.parentId || 0;
		const categories = await categoriesRepository.getCategories(parentId);

		const responseResults = {
			categories,
		};

		return res.json(responseResults);
	} catch (err) {
		next(err);
	}
});

module.exports = router;
