export default function Page2() {
  return (
    <div>
      <h1> This is a header! </h1>
      <button> This is a Button </button>
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
        cursor: "pointer",
      }}
      onClick={() => {
        console.log("I've been clicked!");
      }}
    >
      {text}
      {number}
    </div>
  );
}
