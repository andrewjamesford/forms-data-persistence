const db = require("../db");

module.exports = {
	getCategories: async (parentId, active = true) => {
		try {
			const result = await db.query(
				"select c.id, c.name, c.parent_id from categories c where c.parent_id = $1 and c.active = $2 order by c.name",
				[parentId, active],
			);
			return result.rows;
		} catch (error) {
			throw Error(error);
		}
	},
};
