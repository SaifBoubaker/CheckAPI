import axios from 'axios'
import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const UserListe = () => {

  let {idd} = useParams();
 
  const [users,setUsers]= useState([])
  let filltered = users.filter(element => element.id === idd)


  const getDataUSers= async()=>{
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
    setUsers(data)

  }

  useEffect(()=>{
    getDataUSers()
  },[])
   console.log(users) 
  return (
    <div >
        <h1>Hello Users!</h1>
        <div >
        {filltered && filltered.map(element=><div >
          <Card className='carte' style={{ width: '700px',borderStyle: 'solid',borderWidth: '5px',borderColor: '#94B49F',}}>
      <Card.Img variant="top"style={{ width: '300px',  }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-T4ec0bEml9EEbP8OfDqrE41E9donELmmgw&usqp=CAU" />
      <Card.Body>
        <Card.Title><h1>Hello</h1></Card.Title>
        <Card.Text> <h1>name: {element.name}</h1></Card.Text>
        <Card.Text><h2>phone number: {element.phone}</h2></Card.Text>
        <Card.Text><h2>Email: {element.email}</h2></Card.Text>
      </Card.Body>
    </Card>
        </div> )}
        </div>
    </div>
  )
}

export default UserListe