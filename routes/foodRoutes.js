const express = require("express");
const app = express();
const FoodModel = require("../models/Food.js");

app.use(express.json());

app.get("/foods", async(req, res) => {
    const foods = await FoodModel.find({});
    try {
        res.send(foods);
    } catch (err) {
        res.status(500).send(err);
    }
});


app.post("/food", async(req, res) => {
    const food = new FoodModel(req.body);
    try {
        await food.save();
        res.send(food);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.patch("/food/:id", async(req, res) => {
    try {
        await FoodModel.findByIdAndUpdate(req.params.id, req.body);
        await FoodModel.save();
    } catch (err) {
        res.status(500).send(err);
    }
});

app.delete("/food/:id", async(req, res) => {
    try {
        await FoodModel.findByIdAndDelete(req.params.id);
    } catch (err) {
        res.status(500).send(err);
    }
});



module.exports = app;