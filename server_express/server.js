const express = require("express");
const connection = require("./sequelize_connect");
const Restaurants = require("./Models/cRestaurant");
const Menus = require("./Models/cMenu");
const MenuItems = require("./Models/cMenuItem");
//const restaurant = require('./JSON/restaurant.sqlite');

const app = express();
const port = 3000;

//app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

Restaurants.hasMany(Menus);
Menus.belongsTo(Restaurants);
Menus.hasMany(MenuItems);
MenuItems.belongsTo(Menus);

connection
  .sync(
  //   {
  //   force: true
  // }
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.error("Unable to connect:", err);
  });

//get all
app.get("/restaurants", async (request, response) => {
  const list = await Restaurants.findAll()
  response.json(list);
});
//get 1 restaurant by id
app.get("/restaurants/:id", async (request, response) => {
  const list = await Restaurants.findByPk(request.params.id)
  response.json(list);
});
//create a restaurant
app.post("/restaurants", async (request, response) => {
  const restaurant = await Restaurants.create({
    name: request.body.name,
    image: request.body.image,
  });
  response.json(request.body);
});
//create a menu
app.post("/menus", async (request, response) => {
  const menu = await Menus.create({
    title: request.body.title,
    RestaurantId: request.body.RestaurantId
  });
  response.status(201).json(menu);
});
//create a menu item
app.post("/menuItem", async (request, response) => {
  const menuItem = await MenuItems.create({
    name: request.body.name,
    price: request.body.price,
    MenuId: request.body.MenuId
  });
  response.status(201).json(menuItem);
});
//update a restaurant
app.put("/restaurants/:id", async(request, response) => {
  const rows = await Restaurants.update({
    name: request.body.name,
    image: request.body.image
  },{
    where: {id: request.params.id}
  })
        response.json(rows);
});
//update a menu
app.put("/menus/:id", async(request, response) => {
  const rows = await Menus.update({
    title: request.body.title,
    RestaurantId: request.body.RestaurantId,
  },{
    where: {id: request.params.id}
  })
        response.json(rows);
});
//update a menu item
app.put("/menuItem/:id", async(request, response) => {
  const rows = await MenuItems.update({
    name: request.body.title,
    price: request.body.price,
    MenuId: request.body.MenuId,
  },{
    where: {id: request.params.id}
  })
        response.json(rows);
});
//delete a restaurant
app.delete("/restaurants/:id", async(request, response) => {
 const Restaurant = await Restaurants.destroy({
    where: { id: request.params.id },
    })
  response.send("Restaurant successfully deleted");
});
//delete a menu
app.delete("/menus/:id", async(request, response) => {
  const menus = await Menus.destroy({
     where: { id: request.params.id },
     })
   response.send("Menu successfully deleted");
 });

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
