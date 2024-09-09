function setSessionStorageItem(key, value) {
	return sessionStorage.setItem(key, JSON.stringify(value));
}

function getSessionStorageItem(key) {
	const item = sessionStorage.getItem(key);

	if (item === null) return undefined;

	return JSON.parse(item);
}
function removeSessionStorageItem(key) {
	sessionStorage.removeItem(key);
	return true;
}
export {
	setSessionStorageItem,
	getSessionStorageItem,
	removeSessionStorageItem,
};
