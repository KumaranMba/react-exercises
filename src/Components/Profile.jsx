import React, { useContext } from 'react';
import { Changename } from '../App';



function Profile() {
const {profileName,setProfileName} = useContext(Changename);

let getValue = (e)=>{
    setProfileName(e.target.value);
 }

  return (
    <div>
        
        <input type="text" id='name' value={profileName} onChange={getValue}></input><br></br>
        <label htmlFor='name'>profileName:{profileName}</label>
        
    </div>
  )
}

export default Profile;