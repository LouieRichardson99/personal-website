import { PrismicRichText } from "@prismicio/react"
import styles from "./styles.module.scss"
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline"
import { useInView } from "react-intersection-observer"

export const Accordion = ({ question, answer }) => {
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  })

  return (
    <details
      ref={ref}
      className={`${styles.details} ${inView && styles.animate}`}
    >
      <summary className={styles.summary}>
        <div className={styles.question}>
          <PrismicRichText field={question} />
        </div>
        <div className={styles.icon}>
          <ChevronUpIcon className={styles.upIcon} />
          <ChevronDownIcon className={styles.downIcon} />
        </div>
      </summary>
      <div className={styles.answer}>
        <PrismicRichText field={answer} />
      </div>
    </details>
  )
}
