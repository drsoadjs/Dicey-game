const Player2 = ({ players, active }) => {
    return (
        <div className="player p2">
            <div className="header">
                <h1>PLAYER 2</h1>
            </div>
            <div className="score">{players[1].score}</div>
            <div className="currScorehold">
                <p className="curName">CURRENT</p>
                <h3 className="curScore">{players[1].curScore}</h3>
            </div>
        </div>
    );
}

export default Player2;