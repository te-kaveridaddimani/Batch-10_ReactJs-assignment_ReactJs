import React,{useState} from 'react';
import {Card} from "react-bootstrap";
import "./Card.css";

 function CardImage(props) {
     const [cards, setcard] = useState([
     {image:"https://cdn.pixabay.com/photo/2021/05/15/21/03/lake-6256628_1280.jpg",title:" Lake",text:"Lakes are important for various reasons, like regulating the flow of river water, storage of water during the dry seasons, to maintaining the eco-system, and also the generation of hydroelectric power."},
     {image:"https://cdn.pixabay.com/photo/2021/05/15/20/37/corona-6256612_1280.jpg",title:" Corona Vaccination", text:"You should get vaccinated even if you had COVID-19. That's because while having had the disease offers some protection against future infection, there's not enough data about that level of protection to know when it tapers off or how protective it is."},
     {image:"https://cdn.pixabay.com/photo/2021/05/09/06/28/korea-6240093_1280.jpg",title:" Green-Tea",text:"Green tea contains a catechin called epigallocatechin-3-gallate (EGCG). Catechins are natural antioxidants that help prevent cell damage and provide other benefits. These substances can reduce the formation of free radicals in the body, protecting cells and molecules from damage."}
     ]);

     const rendercard =(cards,index)=>{
         return (
            <Card style={{ width: '18rem' }}  key="index" classname="card"> 
            <Card.Img variant="top" src={cards.image}/>
            <Card.Body>
            <Card.Title>{cards.title}</Card.Title>
            <Card.Text>
            {cards.text}
           </Card.Text>
            </Card.Body>
             </Card>
         )
     }
    return (
        <div className="grid">
            {cards.map(rendercard)}
          
        </div>
    )
}

export default  React.memo(CardImage);

