import React, { useState } from "react";
import Button from "./Button";

export default function FormSplitBill({ selectedFriend, onSubmitBill }) {
  const [billVal, setBillVal] = useState("");
  const [myExpense, setMyExpense] = useState("");
  const [billPayee, setBillPayee] = useState("you");
  const friendExp = billVal ? billVal - myExpense : "";

  function handleSubmit(e) {
    e.preventDefault();

    if (!billVal || !myExpense) return;

    onSubmitBill(billPayee === "you" ? friendExp : -myExpense);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split bill with {selectedFriend.name}</h2>
      <label>💰 Bill Value </label>
      <input
        type="text"
        value={billVal}
        onChange={(e) => setBillVal(Number(e.target.value))}
      />
      <label>🧒 Your Expenses </label>
      <input
        type="text"
        value={myExpense}
        onChange={(e) =>
          setMyExpense(
            Number(e.target.value) > billVal
              ? myExpense
              : Number(e.target.value)
          )
        }
      />
      <label>👩🏻‍🤝‍👩🏻 {selectedFriend.name}'s expense </label>
      <input type="text" disabled value={friendExp} />
      <label>🙄 Who is paying Bill</label>
      <select value={billPayee} onChange={(e) => setBillPayee(e.target.value)}>
        <option value="you">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}
