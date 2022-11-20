/* eslint-disable no-template-curly-in-string */
import React, {useState} from "react"; 
function TemperatureConversion() {
    const Temp = () => {
const [ tempValue, setTempValue] = useState(20);
const [tempColour, setTempColour] = useState("Hot");
   const [temp, setTemp] = useState("C")



   function convertTemp(){
     if (temp === 'F'){
        setTempValue(tempValue+32)
        setTemp('C')
     }
     if (temp === 'C'){
        setTempValue(tempValue-32)
        setTemp('F')
     }
}

const increaseTemp=()=> {
    const newTemp=tempValue+1;
    setTempValue(newTemp);

    if (newTemp>=16){
        setTempColour("Hot");
    }
};

const decreaseTemp=()=> {
    const newTemp=tempValue-1;
    setTempValue(newTemp);

    if (newTemp<16){
        setTempColour("Cold");
    }
};


    
return(
<div className="temp-box">
    <div className="temp-display-box"></div>

    <div className={"temp-dispaly ${tempColour}"} > {tempValue}</div>
   <div classname="button-box">
    <button onClick={decreaseTemp}> - </button>
    <br />
    <button onClick={increaseTemp }> + </button>
    <br />
    <button onClick={convertTemp} > Convert</button>
</div>
</div>

)
}
};
export default TemperatureConversion;