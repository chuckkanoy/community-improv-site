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
                Imp Mob Improv
            </button>  */}
            <img src={`${process.env.PUBLIC_URL}/imp_mob_improv.jpg`} className="logo" alt="logo"/>
            <p>
                We are Imp Mob Improv, a Fargo Moorhead based improv troupe focused on having a 
                good laugh and learning as much as we can about the art of improvisation. If you 
                would like to know more about our club, head to the&nbsp;<Link to="/about">About
                </Link> section. We look forward to entertaining you very soon.
            </p>
            <h3>Socials 📢</h3>
            You can find us on the following social media!<br/>
            Facebook -&gt; 
            <a href="https://www.facebook.com/profile.php?id=100092431854456">
                Imp Mob Improv
            </a>
            <br/>
            Instagram -&gt; 
            <a href="https://www.instagram.com/impmob.improv/">
                impmob.improv
            </a>
            <br/>
            Email -&gt; 
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=impmob.comedy@gmail.com&su=Imp%20Mob%20Improv%20Inquiry">
                impmob.comedy@gmail.com
            </a>
        </>
    );
}

export default Home;