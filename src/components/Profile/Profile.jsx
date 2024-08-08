import style from "./Profile.module.css"

const Profile = ({username, tag, location, avatar, stats}) => {
  return (
    <div className={style.card}>
      <div className={style.cardTopArea}>
        <img
          src={avatar}
          alt="User avatar"
          className={style.cardImg}
        />
        <p className={style.cardUsername}>{username}</p>
        <p className={style.cardInfo}>@{tag}</p>
        <p className={style.cardInfo}>{location}</p>
      </div>

      <ul className={style.list}>
        <li className={style.listItem}>
          <span className={style.activity}>Followers</span>
          <span className={style.quantity}>{stats.followers}</span>
        </li>
        <li className={style.listItem}>
          <span className={style.activity}>Views</span>
          <span className={style.quantity}>{stats.views}</span>
        </li>
        <li className={style.listItem}>
          <span className={style.activity}>Likes</span>
          <span className={style.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;