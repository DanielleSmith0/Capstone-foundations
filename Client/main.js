const wordDisplay = document.getElementById('word-display');
const getRandomWordBtn = document.getElementById("get-random-word-button");

// const correctBtn = document.querySelector("#correct-button");
// const practiceBtn = document.querySelector("#practice-button");

const postCreateWord = document.getElementById("post-word-form");
const createWordInput = document.getElementById("post-new-word-input");

// const addToCustomBtn = document.querySelector(".addToCustomList");

// const getWordListBtn = document.getElementById("get-word-list-button");
// const removeWordBtn = document.querySelector(".removeWordButton");

postCreateWord.addEventListener("submit", (event) => {
    event.preventDefault()

    let maBod = {
        word: createWordInput.value
    };

    axios.post("http://localhost:7417/word", maBod)
    .then((result) => {
        alert("word added")
        console.log(result.data)
    })
    .catch(() => {
        console.log("backend didn't work I guess")
    })
});

const getRandomWord = () => {
    axios.get("http://localhost:7417/api/word")
        .then(({data}) => {
            wordDisplay.innerHTML = ''
            correctBtn.classList.remove('hide');
            practiceBtn.classList.remove('hide');

            data.forEach(word => {
                let wordHtml = makeWordDisplayCard(word)
                wordDisplay.innerHTML += wordHtml
            })
    });
};

const makeWordDisplayCard = (word) => {
    return `
        <div class="wordStyle">
        <h3>${word.word}</h3>
        <button class = "correct-button" onclick="removePracticeWord(${word.id})">Correct!</button>
        <button class = "practice-button" onclick="getRandomWord()">"Practice Later"</button>
        </div>
    `
};

getRandomWordBtn.addEventListener("click", getRandomWord);

const removePracticeWord = (id) => {
    let wordRemoved = word.value

    axios.delete("http://localhost:7417/word/" + wordRemoved)
    .then((result) => {
        alert(word + "is no longer being practiced")
        console.log(result.data)
    });
};