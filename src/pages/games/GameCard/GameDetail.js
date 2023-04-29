import React, {useState, useEffect} from "react";

import "./GameDetail.css"
import gamesList from "..//games_list.json"
import { useNavigate, useParams } from "react-router-dom";

function Games() {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [numPlayers, setNumPlayers] = useState("");

    var {gameName} = useParams();
    var history = useNavigate();

    useEffect(() => {
        gamesList.forEach((game) => {
            console.log(game.name, gameName)
            if(game.name?.toLowerCase() === gameName) {
                setName(game.name);
                setType(game.type);
                setDescription(game.description);
                setNumPlayers(game.numPlayers);
            }
        });

    }, [gameName, history]);

    return (
        <>
            <h1>{name}</h1>
            <table>
                <tr>
                    <td><b>Type:</b></td>
                    <td>{type}</td>
                </tr>
                <tr>
                    <td><b>Players:</b></td>
                    <td>{numPlayers}</td>
                </tr>
                <tr>
                    <td><b>Description:</b></td>
                    <td>{description}</td>
                </tr>
            </table>
        </>
    );
}

export default Games;