import React from 'react'

const Games = ({name,games}) => {
    return (
        <div>
            <p>{name}</p>
            {games.map((game,index)=><p key={index}><span>{game[0]}</span>:<span>{game[1]}</span></p>)}
        </div>
    )
}

export default Games
