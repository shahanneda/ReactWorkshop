import React, { useState } from "react";

import { CountingButton } from "./CountingButton";

import styles from "./index.module.css";

export default function Page() {
  const [clickCount, setClickCount] = useState(0);

  return (
    <div>
      <CountingButton
        text={"Button: " + clickCount}
        functionToCallWhenClicked={() => {
          setClickCount(clickCount + 1);
        }}
      />
    </div>
  );
}
