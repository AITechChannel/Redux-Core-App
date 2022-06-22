import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchImg } from "./imgSlice";
function Img() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchImg());
  }, []);

  return (
    <div>
      <button>Show</button>
    </div>
  );
}

export default Img;
