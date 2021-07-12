const express = require('express');

const app = express();
const port = 3000;

//app.use(express.static('public'));
app.use(express.json());

// app.get("/now", (request, response) => {
//     const date = new Date();
//     response.send(date);
//   });

//   app.get("/flipcoin", (request, response) => {
//     if (Math.random) >= 0.5
//         response.send('heads');
//     else
//     response.send('tails');
//   });

//get
app.get("/restaurant", (request, response) => {
    response.send('Get restaurants');
});
//create
app.post("/restaurant", (request, response) => {
    response.send(request.body.name);
});
//update
app.put("/restaurant", (request, response) => {
    response.send(request.bodynodemon);
});
//delete
app.delete("/restaurant", (request, response) => {
    response.send('Delete a restaurant');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})