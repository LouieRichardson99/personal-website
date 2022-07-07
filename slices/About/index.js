import { PrismicNextImage } from "@prismicio/next"
import { PrismicLink, PrismicRichText } from "@prismicio/react"
import styles from "./styles.module.scss"
import { motion } from "framer-motion"

const About = ({
  slice: {
    primary: {
      title,
      subtitle,
      description,
      buttonText,
      buttonLink,
      buttonIcon,
      image,
    },
    items,
  },
}) => {
  const animateTitle = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <section
      className={styles.section}
      id={title[0].text.toLowerCase().replaceAll(" ", "-")}
    >
      <div className={`container ${styles.flexWrapper}`}>
        <div>
          <motion.div
            variants={animateTitle}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="title dark"
          >
            <PrismicRichText field={title} />
          </motion.div>
          <div className={styles.subtitle}>
            <PrismicRichText field={subtitle} />
          </div>
          <div className={`${styles.description} flow`}>
            <PrismicRichText field={description} />
          </div>
          <PrismicLink
            className={`button primary ${styles.primaryButton}`}
            field={buttonLink}
          >
            {buttonText}
            <PrismicNextImage field={buttonIcon} />
          </PrismicLink>
        </div>
        <div>
          <div className={styles.image}>
            <PrismicNextImage field={image} layout="responsive" />
          </div>
          <div className={styles.socialIcons}>
            {items.map(({ socialLink, socialIcon }, index) => (
              <PrismicLink key={index} field={socialLink}>
                <PrismicNextImage field={socialIcon} />
              </PrismicLink>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
