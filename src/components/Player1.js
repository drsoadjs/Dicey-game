const Player1 = ({ players, active }) => {
    return (
        <div className="player p1 active">
            <div className="header">
                <h1>PLAYER 1</h1>
            </div>
            <div className="score">{players[0].score}</div>
            <div className="currScorehold">
                <p className="curName">CURRENT</p>
                <h3 className="curScore">{players[0].curScore}</h3>
            </div>
        </div>

    );
}

export default Player1;