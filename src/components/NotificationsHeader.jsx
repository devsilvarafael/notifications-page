import { Title } from "./Title.jsx";
import { useNotificationContext } from "../contexts/NotificationContext.jsx";

import styles from "../styles/components/notification-header.module.css";

export const NotificationsHeader = ({ title }) => {
    const { notifications, markAllNotificationsAsRead } = useNotificationContext();
    const unreadNotifications = notifications.filter(notification => notification.status === true)

    return (
        <div className={styles.header}>
            <div className={styles.notification}>
                <Title text={title}/>
                <span className={styles.notificationCounter}>{unreadNotifications.length}</span>
            </div>
            <button className={styles.markAll} onClick={markAllNotificationsAsRead}>Mark all as read</button>
        </div>
    )
}