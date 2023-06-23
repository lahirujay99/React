import { Children, useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1); // useState is a hook in react . if it start from use it is a hook
  const [isOpen, setIsOpen] = useState(true);

  function previousHandler() {
    // if (step > 1) setStep(step - 1); if you need update state base on the current value use callback function
    if (step > 1) setStep((s) => s - 1);
  }

  function nextHandler() {
    if (step < 3) setStep((s) => s + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((isOpen) => !isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          {/* <p className="message">
            Step {step} {messages[step - 1]}
          </p> */}

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>

          <div className="buttons">
            {/* <button // normal way to define a button 
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={previousHandler}>
              previous
            </button> */}

            <Button txtColor="#fff" bgColor="#7950f2" onClick={previousHandler}>
              <span>👈</span>Prevoius
            </Button>

            <Button txtColor="#fff" bgColor="#7950f2" onClick={nextHandler}>
              Next<span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );

  // function closeHandler() {
  //   setIsOpen(!isOpen);
  // }
}

function Button({ txtColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: txtColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}

export default App;
