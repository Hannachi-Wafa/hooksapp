import React from 'react'
import { useState } from 'react'
import "./App.css"
import MovieList from './MovieList'
import Addmodel from './Addmodel'
import Filter from './Filter'
import Rating from './Rating'

const App = () => {
    const [movie, setmovie] = useState([{
        title: 'Tangled',
        description: 'Tangled is a 2010 American 3D computer-animated musical adventure film produced by Walt Disney Animation Studios and released by Walt Disney Pictures.',
        posterURL: "./movie.jpg",
        rating: 4
    },
    {
        title: 'Ferdinand',
        description: 'Ferdinand is a 2017 American computer-animated comedy adventure film produced by Blue Sky Studios and distributed by 20th Century Fox',
        posterURL: "./movie1.jpg",
        rating: 4
    },
    {
        title: 'Moana',
        description: 'Moana is a 2016 American 3D computer-animated musical adventure film produced by Walt Disney Animation Studios and distributed by Walt Disney Pictures.',
        posterURL: "./movie2.jpg",
        rating: 5
    },
    ]
    )

const [rate, setrate] = useState(0);

const handelrating = (rate) => {
    setrate(rate);

};
    


    const [searchTerm, setSearchTerm] = useState("");

    const handleChangeterm = (searchTerm) => {
        setSearchTerm(searchTerm);
    
    };

    const handelMovieAdd = (newValue) => {
        setmovie([...movie, newValue])
    }



    return (

        <div>
            <div className="movie">
            <h1 >Movies</h1>
            </div>
            <div>
                <Filter searchTerm={searchTerm} handleChangeterm={handleChangeterm}></Filter>
            </div>
            <div className="rating">
            <Rating handelrating={handelrating} rate={rate}></Rating>

            </div>
<div>
<MovieList movie={movie.filter(elm=>elm.title.toUpperCase().trim().includes(searchTerm.toUpperCase().trim())&& elm.rating>=rate)}></MovieList>
</div>
        <div className="model">
            <Addmodel handelMovieAdd={handelMovieAdd}></Addmodel>
            </div> 
        </div>
    )
}
export default App