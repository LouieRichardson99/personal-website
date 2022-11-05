import { PrismicNextImage } from "@prismicio/next"
import { PrismicLink, PrismicRichText } from "@prismicio/react"
import styles from "./styles.module.scss"

const Minimal = ({
  title,
  subtitle,
  primaryButtonLink,
  primaryButtonText,
  primaryButtonIcon,
}) => (
  <section className={`container ${styles.section}`}>
    <div className={styles.title}>
      <PrismicRichText field={title} />
    </div>
    <div className={styles.subtitle}>
      <PrismicRichText field={subtitle} />
    </div>
    <div className={styles.flex_container}>
      <PrismicLink
        document={primaryButtonLink}
        className={`button primary ${styles.primaryButton}`}
      >
        {primaryButtonText}
        <PrismicNextImage field={primaryButtonIcon} />
      </PrismicLink>
    </div>
  </section>
)

export default Minimal
