import {useEffect, useState} from "react";

import styles from "../styles/components/notification.module.css"

import { Bullet } from "./Bullet.jsx";
import {useNotificationContext} from "../contexts/NotificationContext.jsx";


export const Notification = ({ user, post, markAsRead }) => {

    const [unread, setUnread] = useState(post.status)
    const removeBullet = () => {
        if(post.status === false) {
            setUnread(false)
        }
    }

    // UseEffect to remove bullet on click Mark All as Read - needs improvements
    useEffect(() => {
        console.log('Rendering - Notification')
        removeBullet()
    }, [post.status])

    const { alternateNotificationStatus } = useNotificationContext();

    return (
        <div className={styles.notification} onClick={() => { alternateNotificationStatus(markAsRead); setUnread(false) }}>
            <div className={styles.containerAvatar}>
                <img src={user.avatar} className={styles.userAvatar} alt={user.name}/>
            </div>
            <div className={styles.notificationPost}>
                <span className={styles.username}>{user.name}</span>
                <span className={styles.description}>{post.action}</span>
                <span className={styles.type}>{post.description}</span>
                {unread && <Bullet/>}
                <p className={styles.time}>{post.time}</p>
            </div>
        </div>
    )
}