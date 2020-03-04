function playGame(paraName) {
  const name = paraName;
  let score = 0;

  return function() {
    score++;
    return `Hey ${name}, you'r score is ${score}'`;
  };
}

const startGame = playGame("Taylor");
