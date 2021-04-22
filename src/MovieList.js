import { Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import React from "react";

const MovieList = (props) => {
    return (
    <div className="listmovie">
{props.movie.map((el)=>(
    <div>
<Card style={{ width: '16rem' ,height:'650px' }}>
<Card.Img variant="top" src={el.posterURL} width={254} height={380} />
<Card.Body>
    <Card.Title className="title">{el.title}</Card.Title>
    <Card.Text className="descp">
    {el.description}
    </Card.Text>
    <ReactStars  value={el.rating} >
</ReactStars>     
    
</Card.Body>
</Card>
</div>
))}  </div>
    );
};
export default MovieList;