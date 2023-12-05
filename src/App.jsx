import { useEffect, useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);

  let maxCharacters = 200;

  const inputHandler = (e) => {
    setInput(e.target.value);
  }
  useEffect(() => {
    setCount(maxCharacters - input.length);
  }, [input])

  return (
    <>
      <div className="container">
        <h2 className="title">Limit Characters in Input</h2>
        <p className="sub-title">Type characters in the textarea & check the left characters! 😊 </p>

        <form>
          <textarea rows="7" placeholder="Type something here..." value={input} onChange={inputHandler} />
          <p className="result">Characters Remained: <strong>{count}/ 200</strong></p>

        </form>
      </div>
    </>
  )
}

export default App;

