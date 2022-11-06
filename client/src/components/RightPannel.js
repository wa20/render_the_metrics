import React from "react";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import axios from "axios";
import "./style.css";

export default function RightPanel() {
  const [state, setState] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)

    const interval = setInterval(() => {
      axios
        .get("http://localhost:3500/metrics", {
          headers: { Authorization: "mysecrettoken" },
        })
        .then((res) => {
          
          const metrics = res.data;
          setState(metrics);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setState(err);
        });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="py-5">
        <div className="black-board d-flex justify-content-center align-items-center"> 
         
            {isLoading ? <Spinner/> :< pre>{state}</pre> }       

        </div>
      </div>
    </>
  );
}
