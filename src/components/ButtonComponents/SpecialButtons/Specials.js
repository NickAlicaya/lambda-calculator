import React from "react";
import SpecialButton from "./SpecialButton"
import {specials} from "../../../data"

//import any components needed

//Import your array data to from the provided data file

const Specials = (props) => {
  // STEP 2 - add the imported data to state

  return (
    <div>
      {specials.map((special, index) =>{
        return (
          <SpecialButton key={index} special={special}
          setDisplayValue={props.setDisplayValue}
        />
          )
      })}
    </div>
  );
};

export default Specials