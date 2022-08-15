let highScores = localStorage.getItem("highScores");
console.log(highScores);
if (!highScores) {
  highScores = [];
} else {
  highScores = JSON.parse(highScores);
}

const score = localStorage.getItem("correctAns");
var currentScore = document.querySelector("#your-score");
const form = document.getElementById("form");

currentScore.textContent = `Your Score: ${score}`;

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  form.classList.add("hidden");
  const initals = document.getElementById("init");
  highScores.push({ score: score, initals: initals.value });
  createScoreTable(sortScores(highScores));
  console.log(highScores);
  localStorage.setItem("highScores", JSON.stringify(highScores));
}

function sortScores(scores) {
  console.log(scores);
  let sorted = scores.sort(function (a, b) {
    return b.score - a.score;
  });
  console.log(sorted);
  return sorted;
}

function createScoreTable(scores) {
  var scoreTable = document.getElementById("score-table");
  for (let i = 0; i < scores.length; i++) {
    var li = document.createElement("li");
    li.innerHTML = `${scores[i].score} - ${scores[i].initals}`;
    li.classList.add("has-text-white", "high-scores");
    scoreTable.appendChild(li);
  }
}
