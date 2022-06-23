const express = require("express");
const router = express.Router();

let recipes = [];


router.post("/", (request, response) => {
    recipes.push(request.body);
    response.send(request.body);
});




module.exports = router;