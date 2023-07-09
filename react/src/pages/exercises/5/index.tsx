import React, { useEffect, useState } from "react";
import styles from "./index.module.css";

//  http://localhost:3000/exercises/5

//  Exercise: Display the data returned by the API
// (hint: You'll have to store it in state!)
// (hint: use the browser console to see what type the data is)

export default function ApiCallsRaw() {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => {
        console.log("Fetched data:", res);
      })
      .catch((e) => console.log("Failed to fetch", e));
  }, []);

  return <div></div>;
}
