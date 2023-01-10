import { NotificationsHeader } from "../NotificationsHeader.jsx";
import { Notification } from "../Notification.jsx";
import { Fragment } from "react";
import { useNotificationContext } from "../../contexts/NotificationContext.jsx";

export const NotificationViewer = () => {
    const { notifications, users } = useNotificationContext()

    return (
        <div>
            <NotificationsHeader title={"Notifications"}/>
            {notifications.map((notification, index) => (
                <Fragment key={notification.id}>
                    <Notification user={users[index]} post={notification} markAsRead={notification}/>
                </Fragment>

            ))}
        </div>
    )
}