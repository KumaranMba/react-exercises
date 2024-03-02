import React, { useEffect, useState } from 'react';

function App() {
 const [posts,setPosts] = useState(null);
 console.log(posts);

  const fetchData = async () =>{
   let response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    let data = await response.json();
    setPosts(data);
   }
  
  useEffect(()=>{
     fetchData();
  },[])

  return (
    <div>
    <h1>API Notes</h1>
    <ul>
      {
        posts? (posts.map((post)=>(
          <li key ={post.id}><b>Title:</b>{post.title}<br/><b>Body:</b>{post.body}</li>

         
          ))):(<p>fetching data...</p>)
      }
    </ul>
    </div>
  )
}

export default App;


