import { Title } from "./Title.jsx";
import { useNotificationContext } from "../contexts/NotificationContext.jsx";

import styles from "../styles/components/notification-header.module.css";

export const NotificationsHeader = ({ title }) => {
    const { notifications, markAllNotificationsAsRead } = useNotificationContext();
    const unreadNotifications = notifications.filter(notification => notification.status === true)

    const haveUnreadNotifications = () => {
        if(unreadNotifications.length < 1) {
            return alert('Não há notificações para serem marcadas como lidas.')
        }

        markAllNotificationsAsRead()
    }

    return (
        <header className={styles.header} role={"Number of unread notifications"}>
            <div className={styles.notification}>
                <Title text={title}/>
                <span className={styles.notificationCounter}>{unreadNotifications.length}</span>
            </div>
            <button className={styles.markAll} onClick={haveUnreadNotifications}>Mark all as read</button>
        </header>
    )
}