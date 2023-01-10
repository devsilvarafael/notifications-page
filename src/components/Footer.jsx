import styles from "../styles/components/footer.module.css";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>
                Challenge by{" "}
                <a
                    href="https://www.frontendmentor.io?ref=challenge"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    Frontend Mentor
                </a>

                . Coded by{" "}
                <a
                    href="https://github.com/devsilvarafael"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    Rafael Silva
                </a>
                .
            </p>
        </footer>
    )
}