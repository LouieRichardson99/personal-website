import { PrismicNextImage } from "@prismicio/next"
import { PrismicLink, PrismicRichText } from "@prismicio/react"
import styles from "./styles.module.scss"
import formatID from "../../components/utils/formatID"

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
}) => (
  <section className={styles.section} id={formatID(title[0].text)}>
    <div className={`container ${styles.flexWrapper}`}>
      <div>
        <div className="title dark">
          <PrismicRichText field={title} />
        </div>
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
        <PrismicNextImage
          field={image}
          priority={true}
          className={styles.image}
        />

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

export default About
