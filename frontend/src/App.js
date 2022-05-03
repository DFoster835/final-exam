function gameResults(props) {
 const games = props.games
 if(games && games.length > 0) {
  
  
 return (<>
  <ul>
   {games.map(function(game) {
    return (<li>
          <span>winner: {game,winner} </span>
          <span>player played: {movesDict[game,moves,player]} </span>
          <span>computer played: {movesDict[game,moves,computer]} </span>
         </li>)
      })}
     </ul>
  </>)
 }
  
}

const gameData = [
  {
    "id": 1,
    "winner": "player",
    "moves": {
      "player": 0,
      "computer": 2
    },
    "playedAt": "Thu, 29 Apr 2021 22:50:27 GMT"
  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Rock, Paper, Scissors</h1>
      </header>
    </div>
  );
}

export default App;
