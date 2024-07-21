const api = {
	getCategories: async () =>
		await fetch(`${import.meta.env.VITE_API_URL}/categories`),
	getReports: async (accessToken) =>
		await fetch(`${import.meta.env.VITE_API_URL}/reports`, {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${accessToken}`,
			},
		}),
};

export default api;
