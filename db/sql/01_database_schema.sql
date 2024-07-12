BEGIN TRANSACTION;
CREATE TABLE categories (
	id SERIAL PRIMARY KEY,
	name TEXT,
	parent_id INT REFERENCES category(id)
);
CREATE TABLE listings (
	id SERIAL PRIMARY KEY,
	title text,
	subtitle text,
	description text,
	listingPrice money,
	conditionNew boolean,
	category_id INT REFERENCES category(id),
	photos UUID [] REFERENCES photos(image),
	auction boolean,
	buyNowPrice money,
	endDate timeStamp
);
CREATE TABLE photos (image UUID PRIMARY KEY,);
COMMIT;