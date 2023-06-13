require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const PORT = 4000;

const foodRouter = require("./routes/foodRoutes.js");
app.use(foodRouter);


mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("DB connected"))
    .catch((err) => console.log(err));


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
});

