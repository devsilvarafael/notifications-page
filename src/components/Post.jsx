import styles from "../styles/components/post.module.css"

import {Bullet} from "./Bullet.jsx";
import {ActionNotification} from "./ActionNotification.jsx";

const checkNotificationType = (type) => {
    if (type === "follow") {
        return "followed you";
    }

    if (type === "reacted-post") {
        return "reacted to your recent post";
    }

    if (type === "joined-group") {
        return "has joined your group";
    }

    if (type === "left-group") {
        return "has left your group";
    }

    if (type === "sent-message") {
        return "has sent you a private message"
    }

    if (type === "comment-picture") {
        return "commented on your picture";
    }
}


export const Post = ({username, action, description, time, read, message}) => {
    return (
        <div className={styles.notificationPost}>
            <span className={styles.username}>{username}</span>
            <span className={styles.action}>{checkNotificationType(action)}</span>
            <span className={styles.description}>{description}</span>

            {read && <Bullet/>}

            <p className={styles.time}>{time}</p>

            {message && <ActionNotification type={action}>{message}</ActionNotification>}
        </div>
    )
}