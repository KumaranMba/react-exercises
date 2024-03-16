import React, { createContext, useState } from 'react';
import Profile from './Components/Profile';

const Changename = createContext();

function App() {
const [profileName,setProfileName] = useState('');

  return (
    <div>
          <h1>App component</h1>
          <Changename.Provider value={{profileName, setProfileName}} >
            <Profile/>
          </Changename.Provider>
    </div>
  )
}

export {App as default,Changename};