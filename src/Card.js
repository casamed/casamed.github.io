import React from 'react';
import getTime from './GetTime';
function Card() {
    {

        
    }
    return (
            
            <div className="Card-Holder">

                <div className="row align-items-center">
                    <div className="col"> </div>
                    <div className="col-5"id="Cabin-Countdown">
                        <h1>Cabin Countdown!</h1>
                        <h1 id="span"><getTime/> </h1>
                    </div>
                    <div className="col"> </div>
                </div>
            </div>
    )
}

export default Card;