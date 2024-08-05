const db = require("../db");

module.exports = {
	getCategories: async (parentId, active = true) => {
		try {
			const result = await db.query(
				"SELECT c.id, c.name, c.parent_id FROM categories c WHERE c.parent_id = $1 AND c.active = $2 ORDER BY c.name",
				[parentId, active],
			);
			return result.rows;
		} catch (error) {
			throw Error(error);
		}
	},
};
