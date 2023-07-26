import "./App.css";
import { useReducer } from "react";

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
};

function reducer(state, action) {
  // if (!state.isActive && action.type === "openAccount") return state;
  switch (action.type) {
    case "openAccount":
      return { ...state, isActive: true, balance: 500 };
    case "deposite":
      return { ...state, balance: state.balance + 150 };
    case "withdraw":
      return { ...state, balance: state.balance - 50 };
    case "requestLoan":
      return { ...state, loan: state.loan + 5000 };
    case "payLoan":
      return { ...state, loan: 0 };
    case "closeAccount":
      return { initialState };
    default:
      throw new Error("unknown type");
  }
}

export default function App() {
  const [{ balance, loan, isActive }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const closeAccount = loan === 0 && balance === 0 && isActive === true;

  return (
    <div className="App">
      <h1>useReducer Bank Account</h1>
      <p>Balance: {balance ? balance : 0}</p>
      <p>Loan: {loan ? loan : 0}</p>

      <p>
        <button
          onClick={() => dispatch({ type: "openAccount" })}
          disabled={false}
        >
          Open account
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "deposite" })}
          disabled={!isActive}
        >
          Deposit 150
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "withdraw" })}
          disabled={!isActive}
        >
          Withdraw 50
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "requestLoan" })}
          disabled={!isActive}
        >
          Request a loan of 5000
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "payLoan" })}
          disabled={!isActive}
        >
          Pay loan
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "closeAccount" })}
          disabled={!closeAccount}
        >
          Close account
        </button>
      </p>
    </div>
  );
}
