import {useEffect, useState} from "react";

import styles from "../styles/components/notification.module.css"

import {useNotificationContext} from "../contexts/NotificationContext.jsx";
import {Post} from "./Post.jsx";
import {Avatar} from "./Avatar.jsx";
import {ActionNotification} from "./ActionNotification.jsx";


export const Notification = ({user, post, markAsRead}) => {
    const [unread, setUnread] = useState(post.status)
    const {alternateNotificationStatus} = useNotificationContext();
    const removeBullet = () => {
        if (!post.status) {
            setUnread(false)
        }
    }

    // UseEffect to remove bullet on click Mark All as Read - needs improvements
    useEffect(() => {
        removeBullet()
    }, [post.status])


    return (
        <div className={styles.notification} style={{ backgroundColor: unread ? "var(--very-light-grayish-blue)" : "white"}} onClick={() => alternateNotificationStatus(markAsRead)}>
            <div className={styles.postContainer}>
                <Avatar url={user.avatar} alt={user.name}/>

                <Post
                    username={user.name}
                    action={post.action}
                    description={post.description}
                    time={post.time}
                    read={unread}
                    message={post.message}
                    picture={post.picture}
                />
            </div>

            {post.picture && <ActionNotification type={post.action} picture={post.picture}/>}
        </div>
    )
}