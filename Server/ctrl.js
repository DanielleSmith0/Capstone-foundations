let Sequelize = require("sequelize");
require('dotenv').config();

const {DB_URL} = process.env;

const sequelize = new Sequelize (DB_URL, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
});

module.exports = {
    seed: (req, res) => {
        sequelize.query(`
            DROP TABLE if exists wordList;

            CREATE TABLE wordList (
                id SERIAL PRIMARY KEY,
                word VARCHAR(50) NOT NULL
            );

            INSERT INTO wordList (word)
            values ('run'),
            ('rice'),
            ('rat'),
            ('carrot'),
            ('bird'),
            ('four'),
            ('bear'),
            ('deer'),
            ('bread'),
            ('crayons'),
            ('drive'),
            ('freckles'),
            ('grandpa'),
            ('prince'),
            ('tree'),
            ('rabbit'),
            ('really'),
            ('berry'),
            ('blueberry'),
            ('guitar'),
            ('sit'),
            ('soup'),
            ('salt'),
            ('dance'),
            ('pencil'),
            ('listen'),
            ('bus'),
            ('horse'),
            ('yes'),
            ('scoop'),
            ('slow'),
            ('smell'),
            ('snail'),
            ('spoon'),
            ('stop'),
            ('swim');
            `)
            .then(() => {
                console.log('DB seeded!')
                res.sendStatus(200)
            })
            .catch(err => console.log('error seeding DB', err))
    },


        createWord: (req, res) => {
            let {word} = req.body
            if(word === "") {
            res.status(400).send('Enter a valid word')
            return
        }
        sequelize.query(`
            SELECT word FROM wordList
            WHERE word = '${word}'
        `)       
        .then((dbResult) => {
            if (dbResult[0].length !== 0){
                res.status(400).send('Word already exists')
                return
            }
        sequelize.query(`
            INSERT INTO wordList (word)
            VALUES ('${word}')
            RETURNING *;
        `)
        .then((dbResult) => {
            res.status(200).send(dbResult[0])
        })
        })
    },
        getRandomWord: (req, res) => {
            sequelize.query(`
            SELECT * FROM wordList
        `)
        .then((dbResult) => {
            let practiceWordIndex = Math.floor(Math.random() * dbResult[0].length);
            let practiceWord = dbResult[0][practiceWordIndex];
            res.status(200).send(practiceWord);
        });
    },

        removePracticeWord: (req, res) => {
            console.log(req.params)
            let {wordId} = req.params;

        sequelize.query(`
            DELETE
            FROM wordList
            WHERE id = ${Number(wordId)};
        `)
        .then(() => {
            console.log('Word deleted')
            res.sendStatus(200)
        })
    },
    getWordList: (req, res) => {
        sequelize.query(`
        SELECT * FROM wordList
    `)
    .then((dbResult) => {
        let practiceWordIndex = dbResult[0];
        console.log(practiceWordIndex)
        let wordList = dbResult[0][practiceWordIndex];
        res.status(200).send(wordList);
    });
},
};
