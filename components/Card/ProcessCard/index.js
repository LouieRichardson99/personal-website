import { PrismicRichText } from "@prismicio/react"
import { useInView } from "react-intersection-observer"
import styles from "./styles.module.scss"

export const ProcessCard = ({ number, title, description }) => {
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  })

  return (
    <li className={styles.processCardContainer} ref={ref}>
      <div className={`${styles.processCard} ${inView && styles.animate}`}>
        <div className={styles.processNumber}>{number}</div>
        <div className={styles.textWrapper}>
          <div className={styles.processTitle}>
            <PrismicRichText field={title} />
          </div>
          <div className="flow">
            <PrismicRichText field={description} />
          </div>
        </div>
      </div>
    </li>
  )
}
