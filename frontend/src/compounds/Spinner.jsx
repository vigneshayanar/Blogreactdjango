import React from 'react'

import ClipLoader from "react-spinners/ClipLoader";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
const Spinner = ({loading}) => {
  return (
    <div> <ClipLoader
    loading={loading}
    cssOverride={override}
    size={250}
    aria-label="Loading Spinner"
    data-testid="loader"
  /></div>
  )
}

export default Spinner