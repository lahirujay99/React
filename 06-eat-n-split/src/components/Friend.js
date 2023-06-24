import React from "react";
import Button from "./Button";

export default function Friend({ friend, onSelectedF, currentFriend }) {
  const isSelected = currentFriend?.id === friend?.id;
  // const isSelected = currentFriend?.id === friend?.id;     currentFriend?.id  this is optional chaining it checks first current friend is exist or not if it is null there no id property then this is not executed
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          you owe {friend.name} {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance === 0 && <p>you and {friend.name} are even</p>}

      {/* <button className="button">select</button> */}
      <Button onClick={() => onSelectedF(friend)}>
        {isSelected ? "Close" : "Selected"}
      </Button>
    </li>
  );
}
