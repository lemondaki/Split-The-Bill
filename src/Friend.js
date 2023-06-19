import { Button } from './Button';

export function Friend({ friend, onSelectFriend, selectedFriend }) {
    const isCheck = selectedFriend.id === friend.id;
    return <li className={isCheck ? 'selected' : ''}>
        <img src={friend.image} alt={friend.name} />
        <h3>{friend.name}</h3>
        {friend.balance < 0 &&
            <p className='red'>You owe {friend.name} {Math.abs(friend.balance)} € </p>}
        {friend.balance > 0 &&
            <p className='green'>{friend.name} owes you {Math.abs(friend.balance)} €  </p>}
        {friend.balance === 0 &&
            <p>You and {friend.name} are even  </p>}
        <Button onClick={() => onSelectFriend(friend)}>{selectedFriend.id === friend.id ? 'Close' : 'Select'}</Button>
    </li>;
}
