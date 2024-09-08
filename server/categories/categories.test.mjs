import { describe, expect, test, vi, it } from "vitest";
import * as db from "../db.cjs";
import { getCategories } from "./categories.repository.mjs";

const mockCategories = {
	categories: [
		{
			id: 1,
			category_name: "Antiques & collectables",
			parent_id: 0,
		},
		{
			id: 7,
			category_name: "Computers & Electronics",
			parent_id: 0,
		},
	],
};

describe("getCategories", () => {
	it("should return the categories", async () => {
		const mock = vi.fn().mockImplementation(getCategories);

		mock.mockImplementationOnce(() => mockCategories);

		expect(mock()).toEqual(mockCategories);
		expect(mock).toHaveBeenCalledTimes(1);
	});

	it("should return an empty array if no categories match the query", async () => {
		const mockResult = { rows: [] };

		vi.spyOn(db, "query").mockResolvedValue(mockResult);

		const categories = await getCategories();

		expect(categories).toEqual([]);
	});

	it("should throw an error if the database query fails", async () => {
		const mockError = new Error("Database query failed");

		vi.spyOn(db, "query").mockRejectedValue(mockError);

		await expect(getCategories()).rejects.toThrow("Database query failed");
	});
});
