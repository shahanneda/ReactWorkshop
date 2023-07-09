export default function Page2() {
  const str = "This is some string";

  return (
    <div>
      <h1> This is a header! </h1>
      <button> This is a Button </button>
      <div>
        {99 + 1}
        <br />
        {str}
        <br />
        {str + "hello"}
      </div>
    </div>
  );
}
