const changeBtn = document.querySelector(".changeBtn");
const answerBtn = document.querySelector(".answerBtn");
const joke = document.querySelector(".joke");
const answer = document.querySelector(".answer");
const startBtn = document.querySelector(".startBtn");
const emoji_img = document.querySelector(".emoji-img");
let joke_answer = [];
let c = 0;

startBtn.addEventListener("click", function () {
  joke.textContent = joke_answer[c].setup;
  c++;
  startBtn.style.display = "none";
  answerBtn.style.display = "inline";
});

changeBtn.addEventListener("click", function () {
  joke.textContent = joke_answer[c].setup;
  c++;
  if (c == 376) c = 0;
  changeBtn.style.display = "none";
  answerBtn.style.display = "inline";
  answer.style.display = "none";
});

answerBtn.addEventListener("click", function () {
  const img = Math.floor(Math.random() * 10);
  emoji_img.src = `./img/laugh-img-${img}.png`;
  answer.style.display = "inline";
  answer.textContent = joke_answer[c].punchline;
  answerBtn.style.display = "none";
  changeBtn.style.display = "inline";
});

fetch("https://api.sampleapis.com/jokes/goodJokes")
  .then((Response) => Response.json())
  .then((data) => {
    joke_answer = data;
  });
