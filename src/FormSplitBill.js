import { useState } from 'react';
import { Button } from './Button';

export function FormSplitBill({ selectedFriend, onSpitBill }) {
    const [bill, setBill] = useState('');
    const [myExpense, setMyExpense] = useState('');
    const [whoPay, setWhoPay] = useState('user');
    const friendExpense = bill ? bill - myExpense : '';
    const oweMoney = whoPay === 'user' ? friendExpense : -myExpense;

    function handleSubmit(e) {
        e.preventDefault();
        onSpitBill(oweMoney);
    }

    return <form className="form-split-bill" onSubmit={handleSubmit}>
        <h2>Split a bill with {selectedFriend.name} </h2>

        <label>💰 Bill value</label>
        <input type="text" value={bill} onChange={e => setBill(+e.target.value)} />

        <label>🧍‍♀️ Your expense</label>
        <input type="text" value={myExpense} onChange={e => setMyExpense(+e.target.value)} />

        <label>👫 {selectedFriend.name}'s expense</label>
        <input type="text" disabled value={friendExpense} />

        <label>🤑 Who is paying the bill</label>
        <select value={whoPay} onChange={e => setWhoPay(e.target.value)}>
            <option value="user">You</option>
            <option value="friend">{selectedFriend.name}</option>
        </select>

        <Button>Split bill</Button>
    </form>;
}
