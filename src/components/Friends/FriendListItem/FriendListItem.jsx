import style from "./FriendListItem.module.css"
import clsx from "clsx"

const FriendListItem = ({avatar, name, isOnline}) => {
  return (
    <div className={style.card}>
        <img className={style.avatar} src={avatar} alt="Avatar" width="48" />
        <p className={style.username}>{name}</p>
        <p className={clsx(style.isOnline, {[style.online]: isOnline, [style.offline]: !isOnline})}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  )
}

export default FriendListItem