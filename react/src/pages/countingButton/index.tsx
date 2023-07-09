import React, { useState } from "react";
import styles from "./index.module.css";

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
