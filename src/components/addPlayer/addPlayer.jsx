import React,{useState} from 'react'
import Input from '../input/input';
import Button from '../button/button';
import './addPlayer.scss'
import { ImPlus } from 'react-icons/im';


const AddPlayer = ({submitPlayer}) => {
    const [player, setPlayer] = useState('')
    const addNewPlayer=()=>{
        if(player){
            submitPlayer(player);
            setPlayer('')
        }
        
    }
    return (
        <div className="player-form">
           <Input additionalClasses="wi-200" type="text" value={player} onChange={(e)=>{setPlayer(e.target.value)}}/>
           <div className="plus-holder" onClick={addNewPlayer}><ImPlus /></div>
        </div>
    )
}

export default AddPlayer
