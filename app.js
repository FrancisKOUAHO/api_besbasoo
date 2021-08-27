const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
PORT = process.env.PORT || 8080;

const authRoutes = require("./src/users/routes/users");
const addressRoutes = require("./src/address/routes/address");
const payementRoutes = require("./src/payement/routes/payement");
const productRoutes = require("./src/products/routes/products");
const categoryRoutes = require("./src/category/routes/category");
const inventoryRoutes = require("./src/inventory/routes/inventory");


mongoose
    .connect(process.env.MONGO_URI, {
        dbName: "themarketbesbasoo",
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

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
    methods: 'GET , PUT, POST, DELETE, PATCH',
}

const app = express();
app.use(cors(corsOptions))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    return res.send({
        error: false,
        message: "Server is healthy",
    });
});

app.use("/users", authRoutes);
app.use("/users/address", addressRoutes);
app.use("/users/payement", payementRoutes);
app.use("/products", productRoutes);
app.use("/products/category", categoryRoutes);
app.use("/products/inventory", inventoryRoutes);

app.listen(PORT, () => {
    console.log("Server started listening on PORT : " + PORT);
});
