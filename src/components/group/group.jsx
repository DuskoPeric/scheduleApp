import React from 'react'
import AddPlayer from '../addPlayer/addPlayer';
import './group.scss'
import { FaRegTrashAlt } from 'react-icons/fa';


const Group = ({name,players,addPalyer,deletePlayer}) => {
    return (
        <div className="group-holder">
        <p className='group-name'>{name}</p>
        <div className="player-list">
            {players.map((palyer,index)=>(
                <div className="player-holder" key={index}>
                    <p>{palyer}</p>
                    <div className="icon-holder" onClick={()=>{deletePlayer(index)}}>
                    <FaRegTrashAlt />
                    </div>
                    
                </div>
                ))}
                <AddPlayer submitPlayer={addPalyer}/>
        </div>
            
        </div>
    )
}

export default Group
