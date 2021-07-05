import React, {useState} from "react";
import {numbers} from "../../../data";
import NumberButton from "./NumberButton";
//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
//  const [numberCount, setnumberCount] = useState(numbers);
  return (
  <div className="numbersContainer">

  {numbers.map((button,index) => {
    return (
  <NumberButton key = {index} button = {button} setdisplayValue={props.setdisplayValue}/>
    )
    })}
  </div>
  );
}

export default Numbers
