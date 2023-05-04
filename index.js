const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
const foodRecipes = require("./Data/ChefsFoodRecipes.json");
const chef = require("./Data/chef.json");
app.use(cors());
app.get("/", (req, res) => {
  res.send("The Chef Recipe Hunting portal is running");
});
app.get("/foodRecipes", (req, res) => {
  res.send(foodRecipes);
});
app.get("/foodRecipes/:id",(req,res)=>{
  const id=req.params.id;
  const selectedRecipes=foodRecipes.find(recipe=>recipe.id===id)
  res.send(selectedRecipes)
})
app.listen(port, () => {
  console.log(`The Chef Recipe Hunting API is running on port: ${port}`);
});
