import styles from "../styles/components/action-notification.module.css"

export const ActionNotification = ({ children, type, picture }) => {
    switch (type) {
        case "sent-message" :
            return (
                <div className={styles.message}>
                    {children}
                </div>
            )
        case "comment-picture" :
            return (
                <div className={styles.pictureContainer}>
                    <img src={picture} className={styles.picture} alt={"picture"}/>
                </div>

            )
    }
}