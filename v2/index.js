const express = require('express');
const app = express();
const port = 3000;

//Use static files
app.use(express.static('files'));

//Use routing file for routes
require("./routes/firstRoutes")(app);

app.listen(3000, () => {
    console.log("Service listening on port 3000");
  });


