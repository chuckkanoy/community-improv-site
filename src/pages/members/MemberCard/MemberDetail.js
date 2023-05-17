import React, {useState, useEffect} from "react";

import "./MemberDetail.css"
import membersList from "..//members_list.json"
import { useNavigate, useParams } from "react-router-dom";

function Games() {
    const [name, setName] = useState("");
    const [bio, setBio] = useState("");

    var {memberName} = useParams();
    var history = useNavigate();

    useEffect(() => {
        membersList.forEach((member) => {
            console.log(member.name, member.bio, memberName)
            if(member.name?.toLowerCase().replace(" ", "_") === memberName) {
                setName(member.name);
                if(member.bio) {
                    setBio(member.bio)
                }
            }
        });

    }, [memberName, history]);

    var bioComponent = () =>  bio !== "" ? <p>{bio}</p> : <p>Please get your bio in &lt;3</p>;

    return (
        <>
            <h1>{name}</h1>
            {bioComponent()}
        </>
    );
}

export default Games;