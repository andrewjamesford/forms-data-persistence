import { query } from "../db.cjs";

export async function getCategories(parentId, active = true) {
	try {
		const result = await query(
			"SELECT c.id, c.category_name, c.parent_id FROM categories c WHERE c.parent_id = $1 AND c.active = $2 ORDER BY c.category_name",
			[parentId, active],
		);
		return result.rows;
	} catch (error) {
		throw new Error(error);
	}
}
