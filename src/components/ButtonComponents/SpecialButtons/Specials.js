import React, { useState } from "react";

//import any components needed
import SpecialButton from "./SpecialButton";

//Import your array data to from the provided data file
import { specials } from "../../../data";
import { createElements } from "../../../util/mapItems";

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialChars, setSpecialChars] = useState(specials);

  const createSpecialButtons = createElements(SpecialButton);

  const buttons = createSpecialButtons(specialChars);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
      component matching the name on the provided file. Pass
      it any props needed by the child component*/}
      {buttons}
    </div>
  );
};

export default Specials;
