import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Search.css'

const Search=(props)=>{

    const [initialTextState, setText] = useState({value:''})

    useEffect(()=>{

    })

    const getMovies= async()=>{
        const resp =  await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_OMDBAPI_KEY}&query=free&language=en-US&page=1&include_adult=false`)
        const {data} = resp.data;
        console.log(resp)
    }

    return(
       
        <div>
            <input className="search border mt-md-2" type="search" name="" id="" placeholder="Search for a movie" value={initialTextState.value} onChange={(e)=>[setText({...initialTextState, value:e.target.value}), getMovies()]}/>
        </div>
        
    )
}

export default Search;