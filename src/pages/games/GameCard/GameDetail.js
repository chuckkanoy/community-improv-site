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
            <b>Type:</b>
            <p>{type}</p>
            <b>Players:</b>
            <p>{numPlayers}</p>
            <b>Description:</b>
            <p>{description}</p>
        </>
    );
}

export default Games;