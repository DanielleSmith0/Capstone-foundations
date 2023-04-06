const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const left = document.getElementById("left");


const showPage1Btn = document.getElementById("showPage1Btn");
const showPage2Btn = document.getElementById("showPage2Btn");


const wordDisplay = document.getElementById('word-display');
const getRandomWordBtn = document.getElementById("get-random-word-button");

const postCreateWord = document.getElementById("post-word-form");
const createWordInput = document.getElementById("post-new-word-input");

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
        alert("Word already exists")
        console.log("Word already exists")
    })
});

const getRandomWord = () => {
    axios.get("http://localhost:7417/word")
        .then(({data}) => {
            wordDisplay.innerHTML = ''
            console.log(data)
            const wordHtml = makeWordDisplayCard(data)
            wordDisplay.innerHTML += wordHtml
    });
};

const makeWordDisplayCard = (word) => {
    return `
        <div class="wordStyle">
            <h1 id = word>${word.word}</h1>
            <div id = buttons>
                <button class = "correct-button" onclick="removePracticeWord(${word.id}, '${word.word}')">Correct!</button>
                <button class = "practice-button" onclick="getRandomWord()">Practice Again Later</button>
            </div>
        </div>
    `
};

getRandomWordBtn.addEventListener("click", getRandomWord);

const removePracticeWord = (wordId, word) => {

    axios.delete("http://localhost:7417/word/" + wordId)
    .then((result) => {
        alert(word + " is done being practiced");
        console.log(result.data);
        getRandomWord();
    });
};

// function showPage1 () {
//     page1.classList.remove("hide")
//     left.classList.remove("hide")
//     page2.classList.add("hide")
// }

// showPage1Btn.addEventListener("click", showPage1) 

// function showPage2 () {
//     page2.classList.remove("hide")
//     page1.classList.add("hide")
//     left.classList.add("hide")
//     getWordList()
// }

// showPage2Btn.addEventListener("click", showPage2) 

// getRandomWordBtn.addEventListener("click", getRandomWord);

// const getWordList = () => {
//     axios.get("http://localhost:7417/wordList")
//         .then(({data}) => {
//             wordDisplay.innerHTML = ''
//             console.log(data)
//             const wordHtml = makeWordDisplayCard(data)
//             wordDisplay.innerHTML += wordHtml
//     });
// };

// const makeWordDisplayCard = (word) => {
//     return `
//         <div class="wordStyle">
//             <h3>${word.word}</h3>
//             <div id = buttons>
//                 <button class = "correct-button" onclick="removePracticeWord(${word.id}, '${word.word}')">Correct!</button>
//                 <button class = "practice-button" onclick="getRandomWord()">Practice Again Later</button>
//             </div>
//         </div>
//     `
// };