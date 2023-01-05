import { useState } from 'react';
import './App.css';
import Buttons from './components/Buttons';
import Player1 from './components/Player1';
import Player2 from './components/Player2';

function App() {
  const [num, setnum] = useState('')
  //const [data, setData] = useState('')
  const [players, setPlayers] = useState([{ name: 'player 1', score: 0, curScore: 0, id: 1 }, { name: 'player 2', score: 0, curScore: 0, id: 2 }])
  // const [score, setScore] = useState('')
  //const [curScore, setCurScore] = useState('')
  const [active, setactive] = useState(0)
  const [playing, setplaying] = useState(true);

  const change = () => {
    const change = active ? 0 : 1;
    setactive(change)
    document.querySelector('.p1').classList.toggle('active')
    document.querySelector('.p2').classList.toggle('active')
  }


  const generator = () => {
    //1.  GENERATE YOUR RANDOM NUMBER AND UPDATE YOUR STATES AND DICE
    const value = Math.round(Math.random() * 5)
    setnum(value)

    //2. UPDATE THE CURRENT USER CURSCORE
    if (value) {
      players[active].curScore = players[active].curScore + value + 1
    } else {
      players[active].curScore = 0
      change();

    }

  }
  //console.log(players[active].curScore)
  // console.log(active)
  //console.log(num)
  //console.log(data)

  const hold = () => {
    players[active].score += players[active].curScore
    //if (players[active].curScore >= 20) {
    // 1 remover roll dice


    // show that the current player won
    setplaying(false)

    //} else {
    // change the active player
    change();

    //}
    setnum('')
    players[active].curScore = 0
  }
  console.log(players[active].score)

  const newGame = () => {
    players[0].curScore = 0;
    players[1].curScore = 0;
    players[0].score = 0;
    players[1].score = 0;
    setnum('');
    //setactive(0);
    console.log(players[1].score, players[1].score,)

  }

  return (
    <div className="App">
      <div className="content">
        <div className="play">
          <Player1 players={players} />
          <Player2 players={players} />
        </div>
        <Buttons num={num} generator={generator} hold={hold} newGame={newGame} />
      </div>
    </div>
  );
}

export default App;
