import React, { useEffect, useState } from "react";

export default function ApiCallsRaw() {
  const [counter, setCounter] = useState(0);

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((res) => {
      alert("Did Fetch!");
      console.log(res);
    });

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Clicked {counter}</button>
    </div>
  );
}
