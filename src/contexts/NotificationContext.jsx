import {createContext, useContext, useMemo, useState} from "react";

import { usersList } from "../data/Users.js";
import { posts } from "../data/Posts.js";

const NotificationContext = createContext(null)
export const GlobalNotificationContext = ({ children }) => {
    const DEFAULT_VALUES = useMemo(() => {
        return posts.map(post => ({ ...post, status: true }))
    }, [])

    const [notifications, setNotifications] = useState(DEFAULT_VALUES);

    const users = usersList

    const alternateNotificationStatus = (notification) => {
        try {
            const updatedNotifications = [...notifications]
            updatedNotifications[notification.id] = { ...notification, status: false }

            setNotifications(updatedNotifications);
        } catch (err) {
            console.log("Erro ao alterar status da notificação", err)
        }
    }

    const markAllNotificationsAsRead = () => {
        const updatedNotifications = notifications.map(notification => ({ ...notification, status: false }))

        setNotifications(updatedNotifications);

        console.log(notifications)
    }

    return (
        <NotificationContext.Provider value={{ notifications, users, alternateNotificationStatus, markAllNotificationsAsRead }}>
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotificationContext = () => {
    return useContext(NotificationContext);
}