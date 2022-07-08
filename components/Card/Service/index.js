import { PrismicImage, PrismicRichText } from "@prismicio/react"
import styles from "./styles.module.scss"
import { useInView } from "react-intersection-observer"

export const ServiceCard = ({ icon, name, description, hasBorder }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  return (
    <li
      className={`${styles.item} ${hasBorder && styles.border} ${
        inView && styles.animate
      }`}
      ref={ref}
    >
      <div className={styles.icon}>
        <PrismicImage field={icon} />
      </div>
      <div>
        <div className={styles.name}>
          <PrismicRichText field={name} />
        </div>
        <div className={`${styles.description} flow`}>
          <PrismicRichText field={description} />
        </div>
      </div>
    </li>
  )
}
