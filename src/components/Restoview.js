import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Restocard.css'
import Review from './Review';
import OperatingTime from './OperatingTime';
import { ListGroup, ListGroupItem } from 'react-bootstrap';


function Restoview() {
  var [Allrestaurants, setRestaurant] = useState([])

  const fetchRest = async () => {
    const result = await fetch('/restaurants.json')
    result.json().then(data => {
      setRestaurant(data.restaurants)
    })
  }

  const params = useParams()
  // console.log(params.id);
  console.log(Allrestaurants);
  const restaurant = Allrestaurants.find(item => item.id == params.id)
  console.log(restaurant);

  useEffect(() => {
    fetchRest()
  }, [])

  return (
    <>
      {
        restaurant ? (
          <Row>
            <Col lg={6} md={6} className='p-5 ms-5 text-center' >
              <img style={{ height: '500px' }} src={restaurant.photograph} id="ca1"/>
            </Col>
            <Col className='me-5 mt-5'>
              <ListGroup id="ca1">
                <ListGroup.Item><h1 className='text-warning'>{restaurant.name}</h1></ListGroup.Item>
                <ListGroup.Item><p > Rating: <strong className='fs-5'>{restaurant.neighborhood}</strong></p></ListGroup.Item>
                {/* <ListGroup.Item><p > Address <strong className='fs-6'>{restaurant.address}</strong></p></ListGroup.Item> */}
                <ListGroup.Item>
                  <div className='p-2'><OperatingTime timeData={restaurant.operating_hours}/></div>

                <div className='p-2'> <Review reviewData={restaurant.reviews}/></div>

               
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>) : ""
      }

    </>
  )
}

export default Restoview