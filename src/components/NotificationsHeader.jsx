import {Title} from "./Title.jsx";

import styles from "../styles/components/notification-header.module.css";
import {useState} from "react";
export const NotificationsHeader = ({ title, newNotification }) => {
    const [notificationCounter, setNotificationCounter] = useState(0);

    return (
        <div className={styles.header}>
            <div className={styles.notification}>
                <Title text={title} />
                <span className={styles.notificationCounter}>{notificationCounter}</span>
            </div>
            <button className={styles.markAll} onClick={() => setNotificationCounter(prevState => prevState + 1)}>Mark all as read</button>
        </div>
    )
}