import { NotificationsHeader } from "../NotificationsHeader.jsx";
import { Notification } from "../Notification.jsx";
import { Fragment } from "react";
import { useNotificationContext } from "../../contexts/NotificationContext.jsx";
import {Footer} from "../Footer.jsx";

import styles from "../../styles/components/notification-viewer.module.css";

export const NotificationViewer = () => {
    const { notifications, users } = useNotificationContext()

    return (
        <Fragment>
            <main className={styles.content} role={"main"}>
                <NotificationsHeader title={"Notifications"}/>
                {notifications.map((notification, index) => (
                    <Fragment key={notification.id}>
                        <Notification user={users[index]} post={notification} markAsRead={notification}/>
                    </Fragment>
                ))}
            </main>
            <Footer />
        </Fragment>


    )
}