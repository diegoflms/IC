let wins = 0, losses = 0, draws = 0, percentageWin = 0, totalGames = 0;

function jogarPPT(op) {

  let randomInt = Math.floor(Math.random() * 3);

  const options = ["pedra", "papel", "tesoura"];
  let result;

  if (op === randomInt) {
    result = "Empatou!";
    draws++;
  } else if (
    (op === 0 && randomInt === 2) ||
    (op === 1 && randomInt === 0) ||
    (op === 2 && randomInt === 1)
  ) {
    result = "Você ganhou!";
    wins++;
  } else {
    result = "Você perdeu!";
    losses++;
  }

  document.getElementById("resHeading").innerHTML = result;
  document.getElementById("resultado").innerHTML = `Você escolheu ${options[op]}. O computador escolheu ${options[randomInt]}.`;

  totalGames = wins + losses + draws;
  percentageWin = Math.round(wins / totalGames * 100);

  printResultado();
}

function reiniciar() {
  wins = 0, losses = 0, draws = 0, percentageWin = 0, totalGames = 0;
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("resHeading").innerHTML = "";
  printResultado();
}

function printResultado() {
  document.getElementById("wins").innerHTML = "Vitórias: " + wins;
  document.getElementById("losses").innerHTML = "Derrotas: " + losses;
  document.getElementById("draws").innerHTML = "Empates: " + draws;
  document.getElementById("percentageWin").innerHTML = "Percentual de vitória: " + percentageWin + "%";
}