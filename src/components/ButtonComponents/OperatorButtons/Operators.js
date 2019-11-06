import React, { useState } from "react";
import OperatorButton from "./OperatorButton"
import {operators} from "../../../data"

//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operator, setOperator] = useState(operators)
  return (
    <div>
       {operator.map((button,index)=>(
       <OperatorButton className="button" key = {index} button = {button}/>
       ))}
    </div>
  );
};
export default Operators
