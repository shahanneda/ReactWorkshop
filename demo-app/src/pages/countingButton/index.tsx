import React from "react";

export default function Page2() {
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

  return (
    <div
      style={{
        padding: "10px",
        border: "1px solid blue",
        width: "fit-content",
        cursor: "pointer",
      }}
      onClick={() => {
        console.log("I've been clicked!");
      }}
    >
      {text}
    </div>
  );
}
