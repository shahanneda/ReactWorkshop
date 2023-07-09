import React, { useState } from "react";
import styles from "./index.module.css";

/*
  http://localhost:3000/exercises/2
  Exercise (based on countingButton):
  Add a "hoverCount" which keeps track of how many times the user has hovered their mouse over the button, and display it in the buttons text

  (hint: use onMouseOver)
*/
export default function Page() {
  return (
    <div>
      <CountingButton text="Button: " />
    </div>
  );
}

type CountingButtonProps = {
  text: string;
};

function CountingButton(props: CountingButtonProps) {
  let text = props.text;

  const [clickCount, setClickCount] = useState(0);

  return (
    <div
      className={styles.button}
      onClick={() => {
        console.log("I've been clicked!" + clickCount);
        setClickCount(clickCount + 1);
      }}
    >
      {text}
      {clickCount}
    </div>
  );
}
