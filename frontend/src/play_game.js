import React, {useEffect, useState} from 'react';
import {postGame} from './api';
import {play} from './game_helper';
import gameResults from './game_results';
import gameHistory from './game_history';
import './ui/play_game.css';
import './ui/button.css'
import notification from './notification';

export default function playGame({gameState}) {
    const [playerMove, setPlayerMove] = useState(-1);
    const [computerMove, setComputerMove] = useState(-1);
    const [showButton, setShowButton] = useState(true);
    const [notificationMessage, setNotificationMessage] = useState("");
    const [notificationStyle, setNotificationStyle] = useState("");
    const [showNotificationMessage, setShowNotificationMessage] = useState(false)


    useEffect(() => {
        async function submitGame() {
            const data = {
                winner: play({player: playerMove, computer: computerMove}),
                playerMove,
                computerMove
            }
            if (playerMove !== -1) {
                await postGame(data).then(response => {
                        if (data.winner === "computer") {
                            setNotificationStyle("lose")
                            setNotificationMessage("COMPUTER WIN")
                        }
                        else if (data.winner === "player") {
                            setNotificationStyle("winner")
                            setNotificationMessage("PLAYER WIN")
                        }
                        else if (data.winner === "draw") {
                            setNotificationStyle("draw")
                            setNotificationMessage("DRAW")
                        }
                    })
            }
        }
        submitGame().then(_ => {
                setPlayerMove(-1)
            })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showButton])

    const computerPlay = () => {
        setComputerMove(Math.floor(Math.random() * 3));
        setShowButton(false)
    }

    const playerPlay = (event) => {
        setPlayerMove(Number(event.target.value))
        setShowButton(true);
    }

    return (
        <>
            {showNotificationMessage && <Notification message={notificationMessage} styleName={notificationStyle} />}
            <div className="mainDiv">
                <div className="buttonDiv">
                    {
                        showButton && <button className="button" onClick={handlePlayClick}>Play</button>
                    }

                </div>
                {
                    !showButton && (
                        <div className="selectDiv">
                            <select defaultValue={-1} onChange={(e) => handleSelectionChange(e)}>
                                <option value={-1} className="selected">Select Option</option>
                                <option value={0}>ROCK</option>
                                <option value={1}>PAPER</option>
                                <option value={2}>SCISSORS</option>
                            </select>
                        </div>
                    )
                }
            </div>
            <viewResults refresh={playerMove} />
            <gameHistory refresh={playerMove} />
        </>
    )

}
