
import React, {useState} from "react";
function MyChildComponent(props){
    const [count, setCount] =useState(0)
    return(
        <div>
            <h1>{props.name}</h1>
            <h2>{props.profession}</h2>
    <h2>{count}</h2>
    <button onClick={() => {setCount( count + 1 ) }}> Increase</button>
</div>
    )
}

export default MyChildComponent;