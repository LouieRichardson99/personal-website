import styles from "./styles.module.scss"

export const ContactCard = ({ methodNo, text, link }) => (
  <li className={styles.card}>
    <a href={link} className={styles.flexWrapper}>
      <span className={styles.methodNo}>{methodNo}</span>
      <span className={styles.text}>{text}</span>
    </a>
  </li>
)
