import React from "react";

const NoPage = () => {
  return (
    <>
      <h1 className="text-center">Invalid URL</h1>
      <p className="text-center">Please wait the ...</p>
      {setTimeout(() => {}, 3000)}
    </>
  );
};

export default NoPage;
