import React from "react";
import {Link} from "react-router-dom";

import "./NavBar.css";

const pages = [
    "Home",
    "Events",
    "About",
    "Games List"
]

function NavBar() {
    return (
        <div className="navContainer">
            {pages.map(page => {
                return (
                    <Link className="navLink" to={`/${page.toLowerCase().replace(' ', '')}`} key={page}>{page}</Link>
                )
            })}
        </div>
    );
}

export default NavBar;