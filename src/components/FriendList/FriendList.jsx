import FriendListItem from "../FriendListItem/FriendListItem";
import s from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <div>
      <ul className={s.friendListContainer}>
        {friends.map((friend) => (
          <li key={friend.id}>
            <FriendListItem
              name={friend.name}
              avatar={friend.avatar}
              isOnline={friend.isOnline}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
