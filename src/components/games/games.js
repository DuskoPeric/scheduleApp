import React from 'react';
import './games.scss';

const Games = ({name,games}) => {
    return (
        <div className="schedule-group-holder">
            <p className="group-header">{name}</p>
            <div className="games-holder">
            {games.map((game,index)=>
                <div key={index} className="game-holder">
                    <div className="player-holder">
                        <div className="player-name">{game[0]}</div>
                        <div className="result-holder right"></div>
                    </div>
                    <div className="player-holder">
                        <div className="result-holder left"></div>
                        <div className="player-name">{game[1]}</div>
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}

export default Games
