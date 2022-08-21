import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function PostUser() {
    const [posts,setPost]=useState();
    const [wait,setWait]=useState(true);


    const deleteAction = (idd) =>{
        const upadatedPost = posts.filter(post=>post.id !== idd);
        setPost(upadatedPost);
    }
   
    useEffect(()=>{
        setTimeout(()=>{
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response=>{
                return response.json();
            })
            .then(data=>{
                setPost(data);
                setWait(false)
            });
        },2000)
       
    },[]);
    
  return (
    <div>
         {wait && <h1>Please wait...</h1>}
         <Table striped bordered hover style={{marginTop:'50px' ,border:'black'}}>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Body</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
       
      {posts && posts.map((post)=>(
    <tr key={post.id}>
        <th scope='row'>{post.id}</th>
        <td>{post.title}</td>
        <td>{post.body}</td>
        <td><Button onClick={()=>deleteAction(post.id)} >Delete</Button></td>

    </tr>
))}
      </tbody>
    </Table>

    </div>
  )
}

export default PostUser