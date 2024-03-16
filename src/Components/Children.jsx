import React from 'react';
import Grandchild from './Grandchild';

function Children({message,coins}) {
  return (
    <div>
        <h1>Parent receiving props from grand Parent</h1>
        <hr></hr>
        <Grandchild message={message} coins={coins}/>
    </div>
  )
}

export default Children;
