export function getPageAndPath(path) {
	const stepArray = path[0]?.split("/");
	const page = stepArray[1] || "state";
	const step = Number.parseInt(stepArray[2]) || 1;
	return { page, step };
}
