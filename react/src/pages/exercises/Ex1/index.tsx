import React from "react";

/*
  Exercise:
  Add a third prop to the button, which takes a text color (e.g. "red"), and display the button's text using that color.
*/
export default function Page2() {
  return (
    <div>
      <OurButton text="a different text" someNumber={5} />
    </div>
  );
}

type OurButtonProps = {
  text: string;
  someNumber: number;
};

function OurButton(props: OurButtonProps) {
  let text = props.text;
  let number = props.someNumber;

  return (
    <div
      style={{
        padding: "10px",
        border: "1px solid blue",
        width: "fit-content",
      }}
    >
      {text}
      {number}
    </div>
  );
}
