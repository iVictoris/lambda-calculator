import React, {useState} from "react";

const Display = () => {
  const [value, setValue] = useState(0)
  return (
    <div className="display">
      {/* Display any props data here */}
      {value}
    </div>
  );
};

export default Display;