let database = [];

const practiceWords = ["cookie", "shirt", "skills"];

module.exports = {
    createWord: (req, res) => {

        let newWord = req.body.word

        for(let i = 0; i < database.length; i++) {
            let currentWord = database[i].word;
            if (currentWord === newWord){
                res.status(400).send('Word already exists')
            }else if(newWord === "") {
                res.status(400).send('Enter a valid word')
            }else{
                database.push(req.body);
                practiceWords.push(req.body);
                res.status(200).send(database);
            };
        };
    },
    getRandomWord: (req, res) => {      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * practiceWords.length);
        let practiceWord = practiceWords[randomIndex];
      
        res.status(200).send(practiceWord);
    },
    removePracticeWord: (req, res) => {
        let {wordRemoved} = req.params;

        let index

        for(let i = 0; i < database.length; i++) {
            let currentWord = practiceWords[i].goal;
            if (currentInput === wordRemoved){
                index = i;
            };

        };
        database.splice(index, 1);
        res.status(200).send(database);
    }

};
