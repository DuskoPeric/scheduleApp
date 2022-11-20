import React,{useState} from 'react'
import Input from '../input/input';
import Button from '../button/button';
import './addPlayer.scss'
import { ImPlus } from 'react-icons/im';


const AddPlayer = ({submitPlayer}) => {
    const [player, setPlayer] = useState('')
    return (
        <div className="player-form">
           <Input additionalClasses="wi-200" type="text" value={player} onChange={(e)=>{setPlayer(e.target.value)}}/>
           <div className="plus-holder"><ImPlus onClick={()=>{submitPlayer(player);setPlayer('')}} /></div>
        </div>
    )
}

export default AddPlayer
