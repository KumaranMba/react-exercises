import React, { useContext } from 'react';
import Grandchild from './Grandchild';
import { Messagecontext } from '../App';

function Children() {
  // const {message,coins} = useContext(Messagecontext);

  return (
      <Messagecontext.Consumer>
        { (data) =>(
        <div>
          <h1>Parent receiving props from grand Parent</h1>
          <hr></hr>
          <p>Receiving data from the parent:{data.message} </p>
          <Grandchild/>
        </div>
        )

        }
      </Messagecontext.Consumer>
  )
}

export default Children;
