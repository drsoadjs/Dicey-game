//import { useState } from "react"
import dice_1 from './images/dice-1.png'
import dice_2 from './images/dice-2.png'
import dice_3 from './images/dice-3.png'
import dice_4 from './images/dice-4.png'
import dice_5 from './images/dice-5.png'
import dice_6 from './images/dice-6.png'

const Buttons = ({ num, generator, hold, newGame }) => {
    const dice = [dice_1, dice_2, dice_3, dice_4, dice_5, dice_6]
    //const[dice, setdice]= useState(dice_{num})


    return (
        <div className="buttons">
            <button className="newgame" onClick={newGame}>
                <span className="load">🔄</span>
                <p>NEW GAME</p>
            </button>
            {num && <img src={dice[num]} alt="dice" className="dice" />}
            <button className="rollDice " onClick={generator}>
                <span>🎲</span>
                <p>ROLL DICE</p>
            </button>
            <button className="hold" onClick={hold}>
                <span>📥</span>
                <p>HOLD</p>
            </button>
        </div>
    );
}

export default Buttons;