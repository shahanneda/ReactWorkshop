import React, { useEffect, useState } from "react";

// http://localhost:3000/apiCallsWithEffects

//  Exercise: Display the data returned by the API (hint: You'll have to store it in state!)

export default function ApiCallsRaw() {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => {
        alert("Did Fetch!");
        console.log(res);
      })
      .catch((e) => console.log("Failed to fetch", e));
  }, []);

  return <div></div>;
}
