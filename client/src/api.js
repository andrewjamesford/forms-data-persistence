async function getCategories(parentId = 0) {
	return await fetch(
		`${import.meta.env.VITE_API_URL}/categories?parentId=${parentId}`,
		{
			headers: {
				"Content-Type": "application/json",
			},
		},
	);
}

async function getListings() {
	return await fetch(`${import.meta.env.VITE_API_URL}/listings`, {
		headers: {
			"Content-Type": "application/json",
		},
	});
}

async function addListing(listing) {
	return await fetch(`${import.meta.env.VITE_API_URL}/listings`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(listing),
	});
}

export default {
	getCategories,
	getListings,
	addListing,
};
