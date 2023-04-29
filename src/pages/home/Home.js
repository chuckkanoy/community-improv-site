import React from "react";
import {Link} from "react-router-dom"

import "./Home.css"

function Home() {
    return (
        <>
            {/* button used for splash screen effect
            <button to="/home" className="openingCard" id="openingCard" onClick={() => {
                document.getElementById("openingCard").style.visibility = "hidden";
            }}>
                Imp Mob Comedy
            </button>  */}
            <h1>Imp Mob Comedy</h1>
            <p>
                We are Imp Mob Comedy, a Fargo Moorehead based improv troupe focused on having a 
                good laugh and learning as much as we can about the art of improvisation. If you 
                would like to know more about our club, head to the&nbsp;<Link to="/about">About
                </Link> section. We look forward to entertaining you very soon.
            </p>
            {/*TODO: add contact information*/}
        </>
    );
}

export default Home;