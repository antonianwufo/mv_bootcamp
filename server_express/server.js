const express = require("express");
const Handlebars = require('handlebars')
const expressHandlebars = require('express-handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const connection = require("./sequelize_connect");
const Restaurants = require("./Models/cRestaurant");
const Menus = require("./Models/cMenu");
const MenuItems = require("./Models/cMenuItem");
//const restaurant = require('./JSON/restaurant.sqlite');

const app = express();
const port = 3000;

//app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// relationships between models
Restaurants.hasMany(Menus);
Menus.belongsTo(Restaurants);
Menus.hasMany(MenuItems);
MenuItems.belongsTo(Menus);

connection
  .sync(
    {
  //resets data and rebuilds tables
    // force: true
  })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.error("Unable to connect:", err);
  });

/* app = use express commands
   get = express command equivalent to read/select
   post = express command equivalent to create
   put = express command equivalent to update
   delete = express command for delete
   findByPk = uses the primary key as the 
   findOne = will retrieve the first matching record. Must be used with where clause
   findAll = retrieves all records from model. No parameters passed
   route = refers to how an application’s endpoints (URIs) respond to client requests
   "/ "  = sets the uri (Uniform Resource Identifier)/endpoint to use for the route
   async = more than one command executed and one must wait for the other
   await = wait for this action to complete before moving on
   request = parameters requested for the route e.g. user inputted data
   response = the data that we want to return
   const = variable. Not required if we don't use it!
   .status(xxx) = the status code to return if success/fail
   .statusCode = xxx = the code to return. Returned seperately/not used with .json
   res.sendStatus()	= Set the response status code and send its string representation as the response body
   .json = format used to return data 
   include = join to
   request.body.xxx = sets user inputted data as parameters
*/
/**************************               GET Requests         *******************************************/
//get all restaurants and associated menus

app.get("/restaurants", async (request, response) => {
  const list = await Restaurants.findAll();
  if (!Restaurants) {
    return response.status(404).send("No restaurants found");
  }
  await Restaurants.findAll({
    include: [Menus],
  });
  response.status(200).json(list);
});

//get all restaurants and associated menus and items
app.get("/restaurantsMM", async (request, response) => {
  const list = await Restaurants.findAll({
    include: [
      {
        model: Menus,
        attributes: { exclude: ["id", "title"] },
        include: [
          {
            model: MenuItems,
            attributes: { exclude: ["id", "MenuId"] },
          },
        ],
      },
    ],
  });
  response.json(list);
});

//get all menus and associated items
app.get("/menus", async (request, response) => {
  const list = await Menus.findAll();
  if (!list) {
    return response.status(404).send("No menus found");
  }
  await Menus.findAll({
    include: [MenuItems],
  });
  response.status(200).json(list);
});

//get all menu items and associated menus
app.get("/menuItems", async (request, response) => {
  const list = await MenuItems.findAll();
  if (!list) {
    return response.status(404).send("No items found");
  }
  await MenuItems.findAll({
    include: [Menus],
  });
  response.status(200).json(list);
});

//get 1 restaurant by id
app.get("/restaurants/:id", async (request, response) => {
  const list = await Restaurants.findByPk(request.params.id);
  if (!list) {
    return response.status(404).send("Restaurant does not exist");
  }
  await Restaurants.findByPk(request.params.id);
  response.status(200).json(list);
});

//get 1 restaurant by id and its menus
app.get("/restaurants/:id/menus", async (request, response) => {
  const list = await Restaurants.findOne({
    where: { id: request.params.id },
  });
  if (!list) {
    return response.status(404).send("Restaurant does not exist");
  }
  await Restaurants.findOne({
    where: { id: request.params.id },
    include: [Menus],
  });
  response.status(200).json(list);
});

//get 1 menu by id and its menu items
app.get("/menus/:id/menu-items", async (request, response) => {
  const list = await Menus.findOne({
    where: { id: request.params.id },
  });
  if (!list) {
    return response.status(404).send("Restaurant does not exist");
  }
  await Menus.findOne({
    where: { id: request.params.id },
    include: [MenuItems],
  });
  response.status(200).json(list);
});
/**************************               POST Requests         *******************************************/
//create a restaurant
app.post("/restaurants", async (request, response) => {
  const restaurant = await Restaurants.create({
    name: request.body.name,
    image: request.body.image,
  });
  response.status(201).json(restaurant);
});

//create a restaurant
app.post("/restaurants", async (request, response) => {
  const restaurant = await Restaurants.create({
    name: request.body.name,
    image: request.body.image,
  });
  response.status(201).json(restaurant);
  response.redirect('/')
});

//create a menu
app.post("/menus", async (request, response) => {
  const menu = await Menus.create({
    title: request.body.title,
    RestaurantId: request.body.RestaurantId,
  });
  response.status(201).json(menu);
});

//create a menu item
app.post("/menuItem", async (request, response) => {
  const menuItem = await MenuItems.create({
    name: request.body.name,
    price: request.body.price,
    MenuId: request.body.MenuId,
  });
  response.status(201).json(menuItem);
});
/**************************               PUT Requests         *******************************************/
//update a restaurant
app.put("/restaurants/:id", async (request, response) => {
  const rows = await Restaurants.update(
    {
      name: request.body.name,
      image: request.body.image,
    },
    {
      where: { id: request.params.id },
    }
  );
  response.status(200).json(rows);
});

//update a menu
app.put("/menus/:id", async (request, response) => {
  const rows = await Menus.update(
    {
      title: request.body.title,
      RestaurantId: request.body.RestaurantId,
    },
    {
      where: { id: request.params.id },
    }
  );
  response.status(200).json(rows);
});

//update a menu item
app.put("/menuItem/:id", async (request, response) => {
  const rows = await MenuItems.update(
    {
      name: request.body.title,
      price: request.body.price,
      MenuId: request.body.MenuId,
    },
    {
      where: { id: request.params.id },
    }
  );
  response.status(200).json(rows);
});
/**************************               DELETE Requests         *******************************************/
//delete a restaurant
app.delete("/restaurants/:id", async (request, response) => {
  const restaurant = await Restaurants.findByPk(request.params.id);
  if (!restaurant) {
    return response.status(404).send("Restaurant does not exist");
  }
  await Restaurants.destroy({
    where: { id: request.params.id },
  });
  response.status(200).send(rows + "Restaurant successfully deleted");
});

//delete a menu
app.delete("/menus/:id", async (request, response) => {
  const menus = await Menus.findByPk(request.params.id);
  if (!menus) {
    return response.status(404).send("Menu does not exist");
  }
  await Menus.destroy({
    where: { id: request.params.id },
  });
  response.status(200).send(rows + "Menu successfully deleted");
});

//delete a menu item
app.delete("/menuItem/:id", async (request, response) => {
  const menuItem = await MenuItems.findByPk(request.params.id);
  if (!menuItem) {
    return response.status(404).send("Item does not exist");
  }
  await MenuItems.destroy({
    where: { id: request.params.id },
  });
  response.status(200).send(rows + "Menu item successfully deleted");
});

/**************************               Rendering         *******************************************/
// setup our templating engine
const handlebars = expressHandlebars({
  handlebars: allowInsecurePrototypeAccess(Handlebars)
})
app.engine('handlebars', handlebars)
app.set('view engine', 'handlebars')

// serve static assets from the public/ folder
app.use(express.static('public'));

// this route returns HTML for all the restaurants
app.get('/web/restaurants', async (req, res) => {
  const restaurants = await Restaurants.findAll()
  res.render('restaurants', { restaurants })
  //console.log(restaurants)
})
// this route returns HTML for a single restaurant
app.get('/web/restaurants/:id', async (req, res) => {
  const restaurant = await Restaurants.findByPk(req.params.id)
  res.render('restaurant', { restaurant })
  //console.log(restaurant)
})
// this route returns HTML for a single restaurant and its menus
app.get("/web/restaurants/:id/menus", async (request, response) => {
  const restaurant = await Restaurants.findOne({
		where: { id: request.params.id },
		include: [
			{
				model: Menus,
				include: [MenuItems],
			},
		],
	});

  console.log(restaurant)
  //response.json(restaurant)
  response.render('restaurant', { restaurant })
});
// this route deletes a restaurant when the 'Delete' link is clicked
app.get('/web/dRestaurants/:id/delete', async (request, response) => {
  await Restaurants.findByPk(request.params.id);
  await Restaurants.destroy({
    where: { id: request.params.id },
  });
  response.send('Restaurant successfully deleted')
  console.log(id)
});
// this route links to a form where a new restaurant can be created
app.get("/web/aRestaurants", async (request, response) => {
  const restaurant = await Restaurants.create(request.body);
  response.render('newrestaurant', { restaurant }).json(restaurant).send("Restaurant added");
  //response.redirect('/restaurants')
});
/**************************               Listen         *******************************************/
//used to bind and listen the connections on the specified host and port
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
