import React from "react";
import {Link} from "react-router-dom";

import "./Opening.css"

function Opening() {
    return (
        <Link to="/home" className="openingCard">
            [NEEDANAME]
        </Link>
    );
}

export default Opening;