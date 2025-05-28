import s from "./Profile.module.css";

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={s.card}>
      <div className={s.avatarWrapper}>
        <img className={s.avatar} src={avatar} alt="Profile avatar" />
        <p className={s.username}>{username}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.statsItem}>
          <span className={s.heading}>Followers</span>
          <span className={s.amount}>{stats.followers}</span>
        </li>
        <li className={s.statsItem}>
          <span className={s.heading}>Views</span>
          <span className={s.amount}>{stats.views}</span>
        </li>
        <li className={s.statsItem}>
          <span className={s.heading}>Likes</span>
          <span className={s.amount}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
