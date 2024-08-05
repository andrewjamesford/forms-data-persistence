require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("node:path");
const fs = require("node:fs");
const categoriesRouter = require("./categories/categories.router");
const listingRouter = require("./listing/listing.router");
const errorHandlerMiddleware = require("./middleware/errorHandlerMiddleware");

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/categories", categoriesRouter);
app.use("/api/listings", listingRouter);

// error handling middleware
app.use(errorHandlerMiddleware);

module.exports = app;
