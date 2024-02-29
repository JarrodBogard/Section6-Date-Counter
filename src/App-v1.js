import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1); // alt solution set step default value to 0
  const [count, setCount] = useState(0);

  // const date = new Date("June 21 2027");
  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div>
      {/* <div>
        <button
          onClick={() =>
            setStep((current) => (step > 0 ? current - 1 : current))
          }
        >
          -
        </button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((current) => current + 1)}>+</button>
      </div> */}
      {/* <div>
        <button
          onClick={() =>
            setCount((current) => (step === 0 ? current - 1 : current - step))
          }
        >
          -
        </button>
        <span>Count: {count}</span>
        <button
        onClick={() =>
          setCount((current) => (step === 0 ? current + 1 : current + step))
        }
        >
        +
        </button>
      </div> */}
      <div>
        <button onClick={() => setStep((current) => current - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((current) => current + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount((current) => current - step)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((current) => current + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} ${count === 1 ? "day" : "days"} from today is `
            : `${Math.abs(count)} ${count === -1 ? "day" : "days"} ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
