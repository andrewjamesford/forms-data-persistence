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
	category_id INT REFERENCES categories(id),
	sub_category_id INT REFERENCES categories(id),
	sub_title text,
	description text,
	listingPrice money,
	reservePrice money,
	conditionNew boolean,
	photos UUID [],
	endDate timeStamp
);
CREATE TABLE photos (image UUID PRIMARY KEY, description text);
COMMIT;