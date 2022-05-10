import React, { useState, useEffect } from 'react'
import Listcard from './Listcard.js'
import {Row,Col} from 'react-bootstrap'

function Home() {
    const [Users, fetchUsers] = useState([])
    const getData = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then((res) => res.json())
          .then((res) => {
            console.log(res)
            fetchUsers(res)
          })
      }
      useEffect(() => {
        getData()
      }, []) 



    

    


  return (
   <div>
       <Row className='m-3 p-2'>
           {Users.map(item=>(
               <Col sm={12} md={8} lg={4} xl={3}>
                <Listcard data={item} />
               </Col>
              
                   
              

           ))}
       </Row>
      
   </div>
  )
}
export default Home








 

 
    
    
 
