import React from "react";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const navigate = useNavigate();
  const myArray = [1, 2, 3, 4, 5];

  const shoot = () => {
    alert("Great Shot!");
        navigate("/Home", { state: { data: myArray } });

  }
  return (
    <button onClick={shoot}>Take the shot!</button>
  );
};

export default Blogs;