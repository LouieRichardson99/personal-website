import { PrismicNextImage } from "@prismicio/next"
import { PrismicLink, PrismicRichText } from "@prismicio/react"
import styles from "./styles.module.scss"

const CallToAction = ({
  slice: {
    primary: { title, link, linkText, linkIcon },
  },
}) => (
  <section className={styles.section}>
    <div className={`container ${styles.flexWrapper}`}>
      <div className={styles.title}>
        <PrismicRichText field={title} />
      </div>

      <PrismicLink
        field={link}
        className={`button primary ${styles.primaryButton}`}
      >
        {linkText}
        <PrismicNextImage field={linkIcon} />
      </PrismicLink>
    </div>
  </section>
)

export default CallToAction
