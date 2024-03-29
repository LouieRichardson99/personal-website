import { PrismicLink, PrismicRichText, PrismicText } from "@prismicio/react"
import styles from "./styles.module.scss"
import { useInView } from "react-intersection-observer"
import { ArrowLongRightIcon } from "@heroicons/react/24/outline"
import { PrismicNextImage } from "@prismicio/next"

export const ServiceCard = ({ icon, name, description, hasBorder, link }) => {
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
        <PrismicNextImage field={icon} loading="lazy" />
      </div>
      <div>
        <div className={styles.name}>
          <h3>
            <PrismicText field={name} />
          </h3>
        </div>
        <div className={`${styles.description} flow`}>
          <PrismicRichText field={description} />
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
