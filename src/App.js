import React from "react";

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

const App = () => {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        
        <FromAddFrient />
        <Button>Add Friend</Button>
      </div>
      <FormSplitBill />
    </div>
  );
};

export default App;

function FriendsList() {
  const friends = initialFriends;

  return (
    <ul>
      {friends.map((friend) => {
        return <Friend friend={friend} key={friend.id} />;
      })}
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          you owe {friend.name} {friend.balance}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
           {friend.name} owes you {friend.balance}
        </p>
      )}
      {friend.balance === 0 && (
        <p>
          you and {friend.name} are even
        </p>
      )}
      <Button>Select</Button>
    </li>
  );
}

function Button({children}){
return<button className="button">{children}</button>
}


function FromAddFrient(){
  return (
    <form className="form-add-friend">
      <label>Friend Name</label>
      <input type="text" />

      <label>Image URL</label>
      <input type="text" />
      <Button>Add</Button>
    </form>
  )
}


function FormSplitBill(){
  return(
    <form className="form-split-bill">
      <h2>Split a bill with + </h2>
      <label>Bill Valuse</label>
      <input type="text" />

      <label>Your Expense</label>
      <input type="text" />

      <label>X's exprense</label>
      <input type="text"disabled />

      <label>who is paying the bill</label>
      <select>
        <option value="user">you</option>
        <option value="friend">your friend</option>
      </select>
      <Button>Split bill</Button>
    </form>
  )
}