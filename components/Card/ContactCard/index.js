import styles from "./styles.module.scss"

export const ContactCard = ({ methodNo, text, link, icon }) => (
  <li className={styles.card}>
    <a href={link} className={styles.flexWrapper}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.textWrapper}>
        <span className={styles.methodNo}>{methodNo}</span>
        <span className={styles.text}>{text}</span>
      </div>
    </a>
  </li>
)
