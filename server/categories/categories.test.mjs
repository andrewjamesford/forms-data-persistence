import path from "node:path";
import { getCategories } from "./categories.repository.mjs";

import db from "../db";

describe("getCategories", () => {
	beforeEach(() => {
		// Set up any necessary mocks or variables here
	});

	afterEach(() => {
		// Clean up any mocks or variables here
	});

	test("should return an array", () => {
		expect(Array.isArray(getCategories())).toBe(true);
	});

	test("should return the correct number of categories", async () => {
		const mockData = [
			{ id: 1, name: "Category1" },
			{ id: 2, name: "Category2" },
		];
		jest.spyOn(db, "query").mockResolvedValue(mockData);
		const categories = await getCategories();
		expect(categories).toHaveLength(2);
	});

	test("should return an empty array if no categories exist", async () => {
		jest.spyOn(db, "query").mockResolvedValue([]);
		const categories = await getCategories();
		expect(categories).toEqual([]);
	});

	test("should handle errors correctly", async () => {
		const mockError = new Error("Database error");
		jest.spyOn(db, "query").mockRejectedValueOnce(mockError);
		await expect(getCategories()).rejects.toThrow(mockError);
	});
});
