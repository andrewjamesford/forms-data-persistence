const api = {
	getCategories: async (parentId = 0) =>
		await fetch(
			`${import.meta.env.VITE_API_URL}/categories?parentId=${parentId}`,
			{
				headers: {
					"Content-Type": "application/json",
				},
			},
		),
	getListings: async () =>
		await fetch(`${import.meta.env.VITE_API_URL}/listings`, {
			headers: {
				"Content-Type": "application/json",
			},
		}),
	addListing: async (listing) =>
		await fetch(`${import.meta.env.VITE_API_URL}/listings`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: { listing: JSON.stringify({ listing }) },
		}),
};

export default api;
