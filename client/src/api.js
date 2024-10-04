const headers = {
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
};

async function getCategories(parentId = 0) {
	return await fetch(
		`${import.meta.env.VITE_API_URL}/categories?parentId=${parentId}`,
		headers,
	);
}

async function getListings() {
	return await fetch(`${import.meta.env.VITE_API_URL}/listings`, {
		headers,
	});
}

async function getDraftListing(email) {
	return await fetch(`${import.meta.env.VITE_API_URL}/listings/${email}`, {
		headers,
	});
}

async function addListing(listing) {
	return await fetch(`${import.meta.env.VITE_API_URL}/listings`, {
		method: "POST",
		headers,
		body: JSON.stringify(listing),
	});
}

async function saveDraftListing(email, listing) {
	return await fetch(`${import.meta.env.VITE_API_URL}/listings/${email}`, {
		method: "POST",
		headers,
		body: JSON.stringify(listing),
	});
}

export default {
	getCategories,
	getListings,
	addListing,
	saveDraftListing,
	getDraftListing,
};
