import { PrismicNextImage } from "@prismicio/next"
import { PrismicLink, PrismicRichText } from "@prismicio/react"
import styles from "./styles.module.scss"
import { useInView } from "react-intersection-observer"

const Hero = ({
  slice: {
    primary: {
      availability,
      eyebrow,
      title,
      primaryButtonText,
      primaryButtonLink,
      primaryButtonIcon,
      secondaryButtonText,
      secondaryButtonLink,
      secondaryButtonIcon,
      image,
    },
  },
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  })

  return (
    <section className={`container ${styles.section}`} ref={ref}>
      <div>
        {availability ? (
          <p className={`${styles.availability} ${styles.available}`}>
            Available For Hire
          </p>
        ) : (
          <p className={`${styles.availability} ${styles.busy}`}>
            Currently Booked Up!
          </p>
        )}
        <div className={styles.eyebrow}>
          <PrismicRichText field={eyebrow} />
        </div>
        <div className={styles.title}>
          <PrismicRichText field={title} />
        </div>
        <div className={styles.buttonsFlex}>
          <PrismicLink className="button primary" field={primaryButtonLink}>
            {primaryButtonText}
            <PrismicNextImage field={primaryButtonIcon} />
          </PrismicLink>
          <PrismicLink className="button secondary" field={secondaryButtonLink}>
            {secondaryButtonText}
            <PrismicNextImage field={secondaryButtonIcon} />
          </PrismicLink>
        </div>
      </div>
      <div className={`${styles.image} ${inView && styles.animate}`}>
        <PrismicNextImage field={image} layout="responsive" priority={true} />
      </div>
    </section>
  )
}

export default Hero
