import React, { useEffect } from "react";

const SampleComp = (props) => {
  const data = "Rajesh";
setTimeout(()=>{
    props.alert(data)
},1000)
  return (
    <div>
      <button onClick={() => props.alert(data)}>click me</button>
    </div>
  );
};

export default SampleComp;
