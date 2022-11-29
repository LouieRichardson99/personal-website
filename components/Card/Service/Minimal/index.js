import { useEffect, useState } from "react"
import { PrismicLink, PrismicRichText, PrismicText } from "@prismicio/react"
import styles from "./styles.module.scss"
import { useInView } from "react-intersection-observer"
import { ArrowLongRightIcon } from "@heroicons/react/24/outline"

export const MinimalServiceCard = ({ name, description, link, index }) => {
  const [animate, setAnimate] = useState(false)

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      setTimeout(() => setAnimate(true), index * 100)
    }
  }, [inView, index])

  return (
    <li className={`${styles.item} ${animate && styles.animate}`} ref={ref}>
      <div>
        <div>
          <div className={styles.name}>
            <h2>
              <PrismicText field={name} />
            </h2>
          </div>
          <div className={`${styles.description} flow`}>
            <PrismicRichText field={description} />
          </div>
        </div>
        <div className={styles.link}>
          <PrismicLink document={link}>
            Read about this service
            <ArrowLongRightIcon />
          </PrismicLink>
        </div>
      </div>
    </li>
  )
}
