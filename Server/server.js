require('dotenv').config();

const {PORT} = process.env;

let express = require("express");
let cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const {
    seed,
    createWord,
    getRandomWord,
    removePracticeWord,
    // getWordList
} = require("./ctrl")

app.post("/word", createWord);

app.get("/word", getRandomWord);

app.delete('/word/:wordId', removePracticeWord);

// app.get("/wordList", getWordList);

app.post('/seed', seed);

app.listen(PORT, () => {
    console.log("app is up on " + PORT);
});