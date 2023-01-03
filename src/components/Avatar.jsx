import styles from "../styles/components/avatar.module.css";

export const Avatar = ({ alt, url }) => {
    return (
        <div className={styles.containerAvatar}>
            <img src={url} className={styles.userAvatar} alt={alt}/>
        </div>
    )
}