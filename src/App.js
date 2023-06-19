import { useState } from 'react';
import './index.css';
import { FriendList } from './FriendList';
import { Button } from './Button';
import { FormAddFriend } from './FormAddFriend';
import { FormSplitBill } from './FormSplitBill';
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
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setshowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState('');
  function handleShowFormAddFriend() {
    setshowAddFriend(prevState => !prevState);
  }

  function handleAddFriend(friend) {
    setFriends(friends => [...friends, friend]);
  }

  function handleSelectFriend(friend) {
    setSelectedFriend(friend);
  }

  function handleSpitBill(oweMoney) {
    setFriends(friends => friends.map(friend => friend.id === selectedFriend.id ? { ...friend, balance: friend.balance + oweMoney } : friend));
    setSelectedFriend('');
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={friends} onSelectFriend={handleSelectFriend} selectedFriend={selectedFriend} />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowFormAddFriend}>{showAddFriend ? 'Close' : 'Add Friend'}</Button>
      </div>
      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} onSpitBill={handleSpitBill} />}
    </div>
  );
}

