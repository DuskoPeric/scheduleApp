import React,{useState,useEffect} from 'react'
import Group from '../group/group';
import AddGroup from '../addGroup/addGroup';
import Button from '../button/button';
import Games from '../games/games';
import './layout.scss'
import { AiOutlinePrinter } from 'react-icons/ai';


const Layout = () => {
    const [edit, setEdit] = useState(true);
    const [groups, setGroups] = useState([]);
    const [schedule, setSchedule] = useState([]);
    const [openAdder, setOpenAdder] = useState(false)

    useEffect(() => {
        console.log('run')
        const storageGroups=localStorage.getItem("groups");
        const storageSchedule=localStorage.getItem("games");
        if(storageGroups!==null){
            console.log(JSON.parse(storageGroups))
            setGroups(JSON.parse(storageGroups))
        }
        if (storageSchedule!==null) {
            setSchedule(JSON.parse(storageSchedule))
        }
    }, []);

    const removePlayer=(player,i)=>{
        let copyGroups=[...groups];
        copyGroups[i].players.splice(player,1)
        return copyGroups;
    }

    const deleteGroup=(i)=>{
        let copyGroups=[...groups];
        copyGroups.splice(i,1);
        setGroups(copyGroups);
    }

    const addPlayer=(player,i)=>{
        let copyGroups=[...groups];
        copyGroups[i].players.push(player);
        setGroups(copyGroups)
        localStorage.setItem("groups", JSON.stringify(copyGroups));
      }

    const addGroup=(name)=>{
        setGroups([...groups,
            {name,players:[]}
        ])
        localStorage.setItem("groups", JSON.stringify([...groups,
            {name,players:[]}
        ]));
        setOpenAdder(false);
    }

    const getSchedule=(number, playersArr)=> {
        var resultArr = [];
        if (!playersArr) {
          playersArr = [];
          for (var i = 1; i <= number; i += 1) {
            playersArr.push(i);
          }
        } else {
          playersArr = playersArr.slice();
        }
    
        if (number % 2 === 1) {
          playersArr.push(this);
          number += 1;
        }
        for (var j = 0; j < number - 1; j += 1) {
          resultArr[j] = [];
          for (var k = 0; k < number / 2; k += 1) {
            if (playersArr[k] !== this && playersArr[number - 1 - k] !== this) {
              resultArr[j].push([playersArr[k], playersArr[number - 1 - k]]);
            }
          }
          playersArr.splice(1, 0, playersArr.pop());
        }
        return resultArr;
      }

      const generateGroups=()=>{
          const games=[];
          for (let i = 0; i < groups.length; i++) {
                const scheduledGames=getSchedule(groups[i].players.length,groups[i].players);
                let sortedGames=[]
                for (let j = 0; j < scheduledGames.length; j++) {
                     for (let k = 0; k < scheduledGames[j].length; k++) {
                         sortedGames.push(scheduledGames[j][k]);
                     }
                }
                console.log(sortedGames)
              const scheduleObj={
                  name:groups[i].name,
                  games:sortedGames
              }

              games.push(scheduleObj)
          }
          setSchedule(games);
          localStorage.setItem("games", JSON.stringify(games));
          setEdit(false)
      }

    return (
        <div>
            <div className="header">
                <Button additionalClasses={edit?'active':''} onClick={()=>{setEdit(true)}}>Edit</Button>
                {schedule.length>0 && <Button additionalClasses={!edit?'active':''} onClick={()=>{setEdit(false)}}>Schedule</Button>}
                {!edit && <Button additionalClasses="icon-btn-holder" onClick={()=>{window.print()}}><AiOutlinePrinter/></Button>}
            </div>
            {edit && <div className="general-holder">
                <div className='groups-holder'>
                  {/*  */}
                    {groups.map((group,index)=><Group key={index} name={group.name} players={group.players} addPalyer={(player)=>{addPlayer(player,index)}} deletePlayer={(player)=>{setGroups(removePlayer(player,index))}} deleteGroup={()=>{deleteGroup(index)}} />)}
                    <div className="addnewgroup-holder">
                        {openAdder && <AddGroup addGroup={addGroup}/>}
                        {!openAdder && <div className="add-holder" onClick={()=>{setOpenAdder(true)}}><div className="add-btn" ><p>+</p></div></div>}
                        
                    </div>
                </div>

                {groups.length>0 &&<Button additionalClasses="larger" onClick={generateGroups}>Generate Schedule</Button>}
            </div>}
            {!edit &&<div className="schedule-holder">
                {schedule.map((group, index)=><Games key={index} name={group.name} games={group.games}/>)}
            </div>}
        </div>
    )
}

export default Layout
