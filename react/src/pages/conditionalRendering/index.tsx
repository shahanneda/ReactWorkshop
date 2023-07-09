import React, { useEffect, useState } from "react";
import styles from "./index.module.css";

// http://localhost:3000/apiCallsWithEffects

export default function ApiCallsRaw() {
  return (
    <div>
      <ChildComponent shouldSayHi={true} />
      <ChildComponent shouldSayHi={false} />
      <ChildComponent shouldSayHi={true} replacementHi="Hello --- Replaced!" />
      <ChildComponent shouldSayHi />
      <ChildComponent />
    </div>
  );
}

type ChildComponentProps = {
  shouldSayHi?: boolean;
  replacementHi?: string;
};

function ChildComponent({
  shouldSayHi = false, // Provide a default value if the value is undefined
  replacementHi, // Value will be undefined if not provided
}: ChildComponentProps) {
  let message = "Hi!";

  if (replacementHi) {
    message = replacementHi;
  }

  // Alternate way of doing it
  let messageAlternate = replacementHi ?? "Hi!";

  return (
    <div className={styles.wrapper}>
      Child Component:
      {shouldSayHi ? message : null}
    </div>
  );
}
