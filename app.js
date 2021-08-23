const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
const PORT = process.env.PORT | 5000;

const authRoutes = require("./src/users/routes/users");
const productRoutes = require("./src/products/routes/products");

mongoose
    .connect(process.env.MONGO_URI, {
        dbName: "themarketbesbasoo",
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useNewUrlParser: true
    })
    .then(() => {
        console.log("Database connection Success.");
    })
    .catch((err) => {
        console.error("Mongo Connection Error", err);
    });

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/ping", (req, res) => {
    return res.send({
        error: false,
        message: "Server is healthy",
    });
});

app.use("/users", authRoutes);
app.use("/products", productRoutes);

app.listen(PORT, () => {
    console.log("Server started listening on PORT : " + PORT);
});
