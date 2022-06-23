const express = require("express");
const router = express.Router();

let recipes = [];

router.get("/:food", (request, response) => {
    let food = request.params.food;
    response.json({
        name: food, 
        instructions: [`tee ${food}`, `tee lisää ${food}`], 
        ingredients: [`${food}-ainekset`, `lisää ${food}-aineksia`]
    });
});

router.post("/", (request, response) => {
    recipes.push(request.body);
    response.send(request.body);
});




module.exports = router;