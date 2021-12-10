import React, {useState, useEffect} from 'react'
import axios from 'axios';
import ImageCard from './ImageCard';
import Search from '../Search/Search';
import './LandingPage.css'

const LandingPage=()=>{
    const[initialState, setState]= useState({cards:[], limit:5})


    useEffect(()=>{
        getMovies();
    },[])

    const getMovies= async()=>{
        const resp = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_OMDBAPI_KEY}&language=en-US&page=1`);
        const results =  resp.data.results;
        console.log(results);

        setState({...initialState, cards:results})
    }

    const loadMoreMovies=()=>{
        setState({...initialState, limit: initialState.limit + 5})
    }

    return(
        <div className="bg-Sec-1">
            <div className="">
                <h1 className="py-4 heading-background">Popular Movies</h1>
                <p className="text-bold pt-3">Click on each movie for more information</p>
            </div>
            

            <div className="container">
                <div className="row">
                    {initialState.cards.slice(0,initialState.limit).map((card)=>{
                        return <ImageCard key={card.id} image={card.poster_path} title={card.title} desc={card.overview}/>
                    })}
                </div>

                {initialState.limit !== 20 ? <div className="row">
                    <div className="col-md-12 justify-content-center">
                        <button className="btn btn-success my-5" onClick={loadMoreMovies}>Load More!</button>
                    </div>
                </div> : <p style={{fontWeight:800}}>All movies loaded!</p>}
            </div>
        </div>
    )
}

export default LandingPage;