const db = require("../db");

module.exports = {
	getCategories: async () => {
		try {
			const result = db.query(
				"select c.id, c.name, c.parent_id from categories c",
			);
			return result.rows;
		} catch (error) {
			throw Error(error);
		}
	},
};
