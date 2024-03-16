import React from 'react';
import Grandchild from './Grandchild';
import { ValueContext } from '../App';


function Children() {
  return (
    <ValueContext.Consumer>
      {(data) =>(
          <div>
            <p>Reciving data from the parent Component</p>
            <p>Reciving message from the parent:{data.info}</p>
            <Grandchild/>
          </div>
        )}
    </ValueContext.Consumer> 
  )
}

export default Children;