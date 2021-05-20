
import React, { useState } from 'react'
//import  "./card.css";
import  {Card } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
 function Cardnews() {

 // const[Card]=useState(0);
  return (
    <>
      
      
  <Card bg="primary" text="white" style={{ width: '18rem' }}  className="box">
    <Card.Header>News</Card.Header>
    <Card.Body>
      <Card.Title>Snow in Turkey Brings Travels woes</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  <br />

  <Card bg="secondary" text="white" style={{ width: '18rem' }} className="box">
    <Card.Header>News</Card.Header>
    <Card.Body>
      <Card.Title>Landslide Leaving Thousands Homeless</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  <br />

  <Card bg="success" text="white" style={{ width: '18rem' }} className="box">
    <Card.Header>News</Card.Header>
    <Card.Body>
      <Card.Title>Hail the size of baseballs in New York</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  <br />

  <Card bg="danger" text="white" style={{ width: '18rem' }} className="box">
    <Card.Header>News</Card.Header>
    <Card.Body>
      <Card.Title>Danger Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  <br />

  <Card bg="warning" text="white" style={{ width: '18rem' }} className="box">
    <Card.Header>News</Card.Header>
    <Card.Body>
      <Card.Title>Warning Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  <br />

  <Card bg="info" text="white" style={{ width: '18rem' }} className="box">
    <Card.Header>News</Card.Header>
    <Card.Body>
      <Card.Title>Info Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  <br />

  <Card bg="dark" text="white" style={{ width: '18rem' }} className="box">
    <Card.Header>News</Card.Header>
    <Card.Body>
      <Card.Title>Dark Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  <br />

  <Card bg="light" style={{ width: '18rem' }} className="box">
    <Card.Header>News</Card.Header>
    <Card.Body>
      <Card.Title>Light Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  <br />


    </>

  )
}
export default React.memo(Cardnews);
