
import React, {useState} from "react";
import {FaHeart} from "react-icons/.fa";
import {s1Anchor} from "react-icons/s1";
import './index.css';

export default function Movie(props){
    const [age]=useState(2022-props.year)
return(
    <div className="section">
        <hr />
        <h1>{props.title}</h1>
        <FaHeart />
        <h2>{props.year}</h2>

        <h3>{props.genre}</h3>
        
        <h4>{props.director}</h4>
        
        <h5>{age}</h5>
        
        <s1Anchor />
        
        <hr />
    </div>
)
//function MyChildComponent(props){
   // const [count, setCount] =useState(0)
    //return(
      //  <div>
      //      <h1>{props.name}</h1>
       //     <h2>{props.profession}</h2>
    //<h2>{count}</h2>
    //<button onClick={() => {setCount( count + 1 ) }}> Increase</button>

}
