const bodyValidationMiddleware = (schema) => {
	return (req, res, next) => {
		const { error } = schema.validate(req.body);

		if (error) {
			const { details } = error;
			const message = details.map((detail) => detail.message).join(",");

			res.status(200).json({ message: message });
		} else {
			next();
		}
	};
};

module.exports = bodyValidationMiddleware;
