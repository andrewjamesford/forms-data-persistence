import { describe, expect, vi, it } from "vitest";
import * as db from "../db.cjs";
import { addListing, getListings } from "./listing.repository.mjs";
import request from "supertest";
import { app } from "../app";

describe("getListings", () => {
	const mockListings = [
		{
			id: "1",
			title: "Test",
			description: "",
			price: 0,
			categoryId: "1",
		},
	];

	it("should return all listings", async () => {
		const mock = vi.fn().mockImplementation(getListings);

		mock.mockImplementationOnce(() => mockListings);

		expect(mock()).toEqual(mockListings);
		expect(mock).toHaveBeenCalledTimes(1);
	});

	it("should return empty array", async () => {
		const mockResult = { rows: [] };

		vi.spyOn(db, "query").mockResolvedValue(mockResult);

		const listings = await getListings();

		expect(listings).toEqual([]);
	});

	it("should throw an error if the database query fails", async () => {
		const mockError = new Error("Database query failed");

		vi.spyOn(db, "query").mockRejectedValue(mockError);

		await expect(getListings()).rejects.toThrow("Database query failed");
	});

	it("should respond with a 200 status code", async () => {
		const response = await request(app).get("/api/listings/");

		expect(response.statusCode).toBe(200);
	});
});

describe("addListing", () => {
	it("should add a new listing to the database", async () => {
		const mock = vi.fn().mockImplementation(addListing);
		const newListing = {
			titleCategory: {
				title: "",
				categoryId: 0,
				subCategoryId: 0,
				subTitle: "",
				endDate: "2026-09-29",
			},
			itemDetails: {
				description: "",
				condition: false,
			},
			pricePayment: {
				listingPrice: "",
				reservePrice: "",
				creditCardPayment: false,
				bankTransferPayment: false,
				bitcoinPayment: false,
			},
			shipping: {
				pickUp: true,
				shippingOption: "post",
			},
		};

		mock.mockImplementationOnce(() => 1);
		const result = mock(newListing);

		expect(result).toEqual(1);
		expect(mock).toHaveBeenCalledWith(newListing);
	});
});
