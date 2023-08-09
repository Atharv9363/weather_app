const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8080; // Use the port specified by Render or default to 8080

const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/', async (req, res) => {
    const { city } = req.body;

    if (city.length < 1) {
        return res.status(400).json({ message: "City name is incorrect" });
    } else {
        try {
            const weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.api_key}&units=metric`);
            res.send(weather.data);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error fetching weather data" });
        }
    }
});

// Remove the hostname parameter
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
