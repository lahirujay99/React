import React from "react";
import Friend from "./Friend";

export default function FriendsList({ friends, onSelectedF, currentFriend }) {
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
