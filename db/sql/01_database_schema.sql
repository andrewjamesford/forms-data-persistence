BEGIN TRANSACTION;
CREATE TABLE categories (
	id SERIAL PRIMARY KEY,
	name TEXT,
	parent_id INT,
	active BOOLEAN
);
CREATE TABLE listings (
	id SERIAL PRIMARY KEY,
	title text,
	subtitle text,
	description text,
	listingPrice money,
	conditionNew boolean,
	category_id INT REFERENCES categories(id),
	photos UUID [],
	auction boolean,
	buyNowPrice money,
	endDate timeStamp
);
CREATE TABLE photos (image UUID PRIMARY KEY, description text);
COMMIT;