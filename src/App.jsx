import React from 'react';
import { useRef } from 'react';

function App() {

  const rows = useRef();

 const changeBackground =()=>{
     const rowsRef = rows.current.querySelectorAll(" tbody tr");
     rowsRef.forEach((row,index)=>{
      console.log(index);
        if(index % 2 === 0){
          row.style.backgroundColor="green";
        }
     })
 }

  return (
    <div>
          <table ref={rows}>
              <thead>
                 <tr>
                  <th>SINO</th>
                  <th>Name</th>
                  <th>Age</th>
                 </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Dinesh</td>
                  <td>25</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Kumaran</td>
                  <td>30</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Kumaran</td>
                  <td>30</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Kumaran</td>
                  <td>30</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Kumaran</td>
                  <td>30</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Kumaran</td>
                  <td>30</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Kumaran</td>
                  <td>30</td>
                </tr>
              </tbody>
          </table>

          <button onClick={changeBackground}>change tr background</button>
    </div>
  )
}

export default App;