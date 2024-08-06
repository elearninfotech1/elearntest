import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetchUserData = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return data;
};

export default useFetchUserData;
