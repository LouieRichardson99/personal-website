import { PrismicNextImage } from "@prismicio/next"
import { PrismicLink, PrismicRichText } from "@prismicio/react"
import styles from "./styles.module.scss"
import { motion } from "framer-motion"

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
  const animateImage = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <section className={`container ${styles.section}`}>
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
      <motion.div
        variants={animateImage}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={styles.image}
      >
        <PrismicNextImage field={image} layout="responsive" priority={true} />
      </motion.div>
    </section>
  )
}

export default Hero
