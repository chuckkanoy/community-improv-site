import React from "react";

import "./Home.css"

function Home() {
    return (
        <>
            {/* button used for splash screen effect
            <button to="/home" className="openingCard" id="openingCard" onClick={() => {
                document.getElementById("openingCard").style.visibility = "hidden";
            }}>
                [NEEDANAME]
            </button>  */}
            <h1>[NEEDANAME]</h1>
            <p>
                &emsp;We are [NEEDANAME], a Fargo based improv troupe focused on having a good laugh 
                and learning as much as we can about the art of improvisation. While we are a 
                group that specializes in improv comedy, we have been known to dabble in more 
                plot-oriented scenes.
            </p>
        </>
    );
}

export default Home;