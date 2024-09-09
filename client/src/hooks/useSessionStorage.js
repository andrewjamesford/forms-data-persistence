function useSessionStorage(key) {
	const setSessionStorageItem = (value) => {
		try {
			sessionStorage.setItem(key, JSON.stringify(value));
		} catch (error) {
			console.error(error);
		}
	};

	const getSessionStorageItem = () => {
		try {
			const item = sessionStorage.getItem(key);

			if (item === null) return undefined;

			return JSON.parse(item);
		} catch (error) {
			console.error(error);

			return undefined;
		}
	};

	const removeSessionStorageItem = () => {
		try {
			sessionStorage.removeItem(key);
		} catch (error) {
			console.error(error);
		}
	};

	return [
		getSessionStorageItem,
		setSessionStorageItem,
		removeSessionStorageItem,
	];
}

export default useSessionStorage;
