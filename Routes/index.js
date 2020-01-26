const express = require("express");
const router = express.Router();
const axios = require("axios").default;
const api =
	"https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22";

router.get("/", (req, res, next) => {
	axios
		.get(api)
		.then(result => {
			// Getting City Name
			const cityName = result.data.name;

			// Couontry Name
			const countryName = result.data.sys.country;

			// Clouds Information
			const coulds = result.data.clouds.all;

			// Getting Temprecher Assist
			const kelvin = -273.15;
			const temp = result.data.main.temp;
			const temprecher = kelvin + temp - 0.000000000000016;

			// wind details
			const speed = result.data.wind.speed;

			// Pressure Calculate
			const pressure = result.data.main.pressure;
			const hpa = pressure / 100000;

			// humidity Calculations
			const humidity = result.data.main.humidity;

			// Sunrise
			const sunrise = result.data.sys.sunrise;

			// Sunset
			const sunset = result.data.sys.sunset;

			// Geo coordinates
			const latitude = result.data.coord.lat;
			const longtitude = result.data.coord.lon;

			// Redering ALl equations
			res.render("index", {
				data: result,
				title: "Weather forcast - OpenWeathermap.org",
				temprecher,
				cityName,
				countryName,
				speed,
				hpa,
				humidity,
				sunrise,
				sunset,
				longtitude,
				latitude
			});
		})
		.catch(err => {
			console.log("ERROR", err);
		});
});

router.get("/api", (req, res, next) => {
	res.redirect(
		"https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22"
	);
});

// Export all routes using router
module.exports = router;
