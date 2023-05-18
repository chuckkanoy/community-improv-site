import React from "react";
import {Link} from "react-router-dom";

import "./Members.css"
import memberslist from "./members_list.json";

function Games() {
    return (
        <>
            <h1>Members</h1>
            {memberslist.map(member => {
                return (
                    <Link to={`/members/${member.name?.replace(" ", "_").toLowerCase()}`} >
                        <div className="memberCard">
                            {member.name}
                        </div>
                    </Link>
                );
            })}
        </>
    );
}

export default Games;