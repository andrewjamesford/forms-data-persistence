const db = require("../db");

module.exports = {
	getCategories: async () => {
		try {
			const result = await db.query(
				"SELECT c.id, c.name, c.parent_id FROM categories c ORDER BY c.name",
			);
			return result.rows;
		} catch (error) {
			throw Error(error);
		}
	},
};
