import {React,useState,useEffect} from 'react'
import Restocard from './Restocard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Restaurant() {
    //state to hold data from api
    var[restaurantList,setRestaurant]=useState([])

    //api calling function

    const fetchData=async()=>{
       const result=await fetch ('/restaurants.json')
       result.json().then(
        data=>{
            setRestaurant(data.restaurants)
        }
       )

    }

console.log(restaurantList);
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <Row>
      {
        restaurantList.map(item=>(
         <Col className='p-5' lg={4} md={6} > 
         <Restocard restdata={item}></Restocard>
         </Col>
        ))
      }
    </Row>
  )
}

export default Restaurant