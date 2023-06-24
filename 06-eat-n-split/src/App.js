import React, { useState } from "react";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [isopen, setIsOpen] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState("");

  function handleFormOpen() {
    setIsOpen((show) => !show);
  }

  function handleFriends(newFriend) {
    setFriends((friends) => [...friends, newFriend]);
    setIsOpen(false);
  }

  function handleSelectedFriend(friend) {
    // setSelectedFriend(friend);
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend)); // optional chaining
    setIsOpen(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelectedF={handleSelectedFriend}
          currentFriend={selectedFriend}
        />
        {isopen && <FormAddFriend onAddFriend={handleFriends} />}
        <Button onClick={handleFormOpen}>
          {isopen ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSubmitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

function FriendsList({ friends, onSelectedF, currentFriend }) {
  return (
    <ul>
      {friends.map((f) => (
        <Friend
          friend={f}
          key={f.id}
          onSelectedF={onSelectedF}
          currentFriend={currentFriend}
        />
      ))}
    </ul>
  );
}

function Friend({ friend, onSelectedF, currentFriend }) {
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

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48?u=499476");

  function handleSubmit(e) {
    const id = crypto.randomUUID();
    e.preventDefault();

    if (!name || !image) return;
    const newFriend = {
      id: id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);
    setImage("https://i.pravatar.cc/48?u=499476");
    setName("");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👨🏾‍🤝‍👨🏼Friend Name </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>📸Image URL </label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

function FormSplitBill({ selectedFriend, onSubmitBill }) {
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
