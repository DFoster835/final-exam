
const isValidMove = (move) => {
	// TODO: complete implementation
	// HINT: Number has methods to check if a value is an integer
	return typeof move === 'number' && [0,1,2].includes(move)
}

/*
	moves: {"player": number, "computer": number }
*/
const play = ({player, computer}) => {
	// TODO: complete implementation
	if (!isValidMove(player) || !isValidMove(computer)) return undefined;
	
	if (player === computer) {
		return "draw"
	}
	else if (player % 3 !== ((computer + 1) % 3)) {
		return "computer win"
	}
	else {
		return "player win"
	}
}

const isWinnerValid = (winner) => {
	return typeof winner === 'string' && ["player win", "computer win", "draw"].includes(winner);
	
}

module.exports = {
	play,
	isValidMove,
	isWinnerInputValid
}
