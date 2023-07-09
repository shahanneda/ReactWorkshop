import React, { useEffect, useState } from "react";

//  http://localhost:3000/exercises/5

//  Exercise: Display the data returned by the API
// (hint: You'll have to store it in state!)
// (hint: use the inspector to see what type the data should be)

export default function ApiCallsRaw() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => {
        console.log("Fetched data:", res);
      })
      .catch((e) => console.log("Failed to fetch", e));
  }, []);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Clicked {counter}</button>
    </div>
  );
}
