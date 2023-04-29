import React from "react";
import {Link} from "react-router-dom";

import "./Games.css"
import gamesList from "./games_list.json";

function Games() {
    return (
        <>
            <h1>Games We Play</h1>
            {gamesList.map(game => {
                return (
                    <Link to={`/gameslist/${game.name?.toLowerCase()}`}>
                        <div className="gameCard">
                            <table>
                                <tr>
                                    <td><b>Name:</b></td>
                                    <td>{game.name}</td>
                                </tr>
                                <tr>
                                    <td><b>Type:</b></td>
                                    <td>{game.type}</td>
                                </tr>
                                <tr>
                                    <td><b>Players:</b></td>
                                    <td>{game.numPlayers}</td>
                                </tr>
                            </table>
                        </div>
                    </Link>
                );
            })}
        </>
    );
}

export default Games;