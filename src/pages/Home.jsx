import React from "react";
import { useLocation } from "react-router-dom";


const Home = () => {
    const location = useLocation();
    const data = location.state?.data || [];

   return (
    <div>
      <h2>Destination Page</h2>
      <p>Received Array:</p>
      <ul>
        {data.map((item, index) => (
          <li key={index}>Value: {item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;