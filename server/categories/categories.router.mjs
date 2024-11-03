/**
 * Express router to handle categories related requests.
 * @module categoriesRouter
 */

import express from "express";
const router = express.Router();
import { getCategories } from "./categories.repository.mjs";

/**
 * Route serving categories.
 * @name get/categories
 * @function
 * @memberof module:categoriesRouter
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 * @param {Object} req - Express request object
 * @param {Object} req.query - Query parameters
 * @param {number} [req.query.parentId=0] - Parent category ID
 * @param {Object} res - Express response object
 * @param {function} next - Express next middleware function
 * @returns {JSON} - JSON response with categories
 */
router.get("/", async (req, res, next) => {
	try {
		const parentId = req?.query?.parentId || 0;
		const categories = await getCategories(parentId, true);

		const responseResults = {
			categories,
		};

		return res.json(responseResults);
	} catch (err) {
		next(err);
	}
});

export default router;
