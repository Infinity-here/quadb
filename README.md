# Hodlinfo Clone - Cryptocurrency Dashboard

This project is a clone of the Hodlinfo dashboard using Node.js, Express, PostgreSQL, and Axios. It fetches data from the WazirX API, stores the top 10 cryptocurrencies in the database, and displays them on a web page using HTML and CSS.

## Features

- Fetches top 10 cryptocurrency details from the [WazirX API](https://api.wazirx.com/api/v2/tickers)
- Stores name, last price, buy price, sell price, volume, and base unit in PostgreSQL
- Displays the data on a responsive webpage using HTML and CSS
- Allows users to dynamically fetch and update cryptocurrency data in real-time

---

## Prerequisites

To run this application, you need to have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14.x or higher)
- [PostgreSQL](https://www.postgresql.org/) (v12.x or higher)
- [Git](https://git-scm.com/)

---

## Installation Steps

### 1. Clone the Repository

First, clone the project repository:

```bash
git clone https://github.com/yourusername/hodlinfo-clone.git
cd hodlinfo-clone
