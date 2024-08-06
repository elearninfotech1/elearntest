import React from "react";
import Student from "./Student";

const BasicList1 = () => {
  let names = [
    {
      id: 101,
      name: "Kamal",
    },
    {
      id: 102,
      name: "Anil",
    },
    {
      id: 103,
      name: "Suresh",
    },
  ];

  return (
    <div>
      {names.map((data) => (
        <Student key={data.id} data1={data} />
      ))}
    </div>
  );
};

export default BasicList1;
