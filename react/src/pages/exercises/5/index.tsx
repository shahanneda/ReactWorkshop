import React, { useEffect, useState } from "react";

// http://localhost:3000/apiCallsWithEffects
export default function ApiCallsRaw() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => {
        alert("Did Fetch!");
        console.log(res);
      })
      .catch((e) => console.log("Failed to fetch", e));
  }, []);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Clicked {counter}</button>
    </div>
  );
}
