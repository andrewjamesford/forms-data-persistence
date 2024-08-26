import express from "express";
const router = express.Router();
import categoriesRepository from "./categories.repository.mjs";

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

export default router;
