const express = require('express');
const axios = require('axios');
const { Ticker } = require('./models/ticker');
const app = express();
const PORT = 3000;

// Connect to database 
const sequelize = require('./db');

// Fetching the top 10 cryptocurrencies from the WazirX API and storing them in the database
async function fetchAndStoreData() {
    try {
        const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
        const data = Object.values(response.data).slice(0, 10);  

        data.forEach(async (item) => {
            await Ticker.create({
                name: item.name,
                last: item.last,
                buy: item.buy,
                sell: item.sell,
                volume: item.volume,
                base_unit: item.base_unit,
            });
        });
        console.log('Data stored successfully!');
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Fetching the data once when the server starts
fetchAndStoreData();

// Route to send data to the frontend
app.get('/api/tickers', async (req, res) => {
    try {
        const tickers = await Ticker.findAll();
        res.json(tickers);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve data' });
    }
});

app.use(express.static('public'));


sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
});
