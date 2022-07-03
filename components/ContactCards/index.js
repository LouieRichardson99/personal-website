import { ContactCard } from "../Card/ContactCard"
import styles from "./styles.module.scss"

export const ContactCards = ({ contactMethods }) => (
  <ul className={styles.list}>
    {contactMethods.map((contactInfo, index) => (
      <ContactCard key={index} {...contactInfo} />
    ))}
  </ul>
)
