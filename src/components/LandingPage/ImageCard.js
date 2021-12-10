import React, {useState} from 'react';
import './ImageCard.css';

const ImageCard=(props)=>{
    const[inititalState, setState] =useState({clicked:false});


    const toggleDescription=()=>{
        if(inititalState.clicked){
            setState({...inititalState, clicked:false});
        }else{
            setState({...inititalState, clicked:true});
        }
    }

    return(
        <div className="col-md-4">
            <div className="card my-3" onClick={()=>toggleDescription()}  >
                <div>
                    <p><img className="img-fluid card-image"  src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${props.image}`} alt="movie-pic"/></p>
                </div>

                <div>
                    <p className="movie-title py-2">{props.title}</p>
                </div>
                
                {inititalState.clicked ? 
                <div className="">
                    <p className="movie-desc px-2 py-2">{props.desc}</p>
                </div>: null}
            </div>
        </div>
           
    )
}

export default ImageCard;