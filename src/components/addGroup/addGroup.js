import React,{useState} from 'react'
import Input from '../input/input';
import Button from '../button/button';
import './addGroup.scss'

const AddGroup = ({addGroup}) => {
    const [group, setGroup] = useState('')
    const addNewGroup=()=>{
        if (group!=='') {
            addGroup(group); 
            setGroup('')
        }
    }
    return (
        <div className="group-adder">
            <div className="group-adder-holder">
                <p>Group name</p>
                <Input additionalClasses="upper" type="text" value={group} onChange={(e)=>{setGroup(e.target.value)}} />
                <Button additionalClasses="centered" onClick={addNewGroup}>Add</Button>
            </div>
        </div>
    )
}

export default AddGroup
