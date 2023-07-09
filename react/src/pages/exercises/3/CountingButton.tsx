import React from "react";
import styles from "./CountingButton.module.css";

type CountingButtonProps = {
  text: string;
  functionToCallWhenClicked: () => void;
};

export function CountingButton({
  text,
  functionToCallWhenClicked,
}: CountingButtonProps) {
  return (
    <button
      className={styles.button}
      onClick={() => {
        console.log("I've been clicked!");
        functionToCallWhenClicked();
      }}
    >
      {text}
    </button>
  );
}
