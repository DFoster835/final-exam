export const changeToValue = (move) => {
  if(move === 0) 
    return "RocK"; 
  if(move === 1)
    return "Paper";
  if(move === 2)
    return "Scissors";
}

export const play = ({player, computer}) => {
    if(player === computer) {
      return "draw"
    }
    else if (player % 3 !== ((computer + 1) % 3)) {
       return "computer"
    }
  else {
      return "player"
  }
}
