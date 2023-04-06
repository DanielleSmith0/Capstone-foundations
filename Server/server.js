let express = require("express");
let cors = require("cors");
let Sequelize = require("sequelize");
require('dotenv').config();

const {DB_URL} = process.env;

const sequelize = newSequelize (CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
});

const app = express();

app.use(cors());

app.use(express.json());

const {
    createWord,
    getRandomWord,
    removePracticeWord
} = require("./ctrl")

app.post("/word", createWord);

app.get("/api/word", getRandomWord);

app.delete('/word/:wordRemoved', removePracticeWord);

app.listen(7417, () => {
    console.log("app is up on 7417");
});