const api = {
	getCategories: async (parentId = 0) =>
		await fetch(
			`${import.meta.env.VITE_API_URL}/categories?parentId=${parentId}`,
		),
	getReports: async (accessToken) =>
		await fetch(`${import.meta.env.VITE_API_URL}/reports`, {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${accessToken}`,
			},
		}),
};

export default api;
