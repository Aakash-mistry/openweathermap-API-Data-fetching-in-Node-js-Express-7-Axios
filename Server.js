const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const indexRoutes = require("./Routes/index");
const handlebars = require("express-handlebars");
const path = require('path')

// Express handlebars view engine
app.engine(".hbs", handlebars({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", "hbs");


// Connect Static file from public folder (CSS, Javascripts and other)
app.use(express.static(path.join(__dirname, 'public')));

// Setting up JSON app
app.use(express.json());

// Default "/" Route after PORT
app.use("/", indexRoutes);

// PORT Configration
app.listen(PORT, err => {
	if (err) {
		console.log(err);
	}
});
