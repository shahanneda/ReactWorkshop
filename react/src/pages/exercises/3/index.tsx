import React, { useState } from "react";

import { CountingButton } from "./CountingButton";

import styles from "./index.module.css";

/*
  http://localhost:3000/exercises/3
  Exercise (based on pureCountingButton):
  If the user has clicked the button 10 times, display a text that says: congratulations!

  hint: Use the ternary operator { ___ ? ___ : ____ }
*/
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
