import React from 'react';

function NavBar() {
    return (
        <nav className="navbar">

        <div className="col">
            <a href="https://www.linkedin.com/in/casey-medford-a7a411169?trk=people-guest_profile-result-card_result-card_full-click" target="_blank"><h2>LinkedIn</h2> </a> 
        </div>

        <div className="col">
            <h1>Casey Medford</h1>
        </div>

        <div className="col">
            <a href="https://github.com/casamed" target="_blank"> <h2>GitHub</h2> </a> 
        </div>

        </nav>
    )
}

export default NavBar;