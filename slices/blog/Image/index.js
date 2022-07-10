import { PrismicNextImage } from "@prismicio/next"
import { PrismicRichText } from "@prismicio/react"
import styles from "./styles.module.scss"

const Image = ({
  slice: {
    primary: { image, imageAttribute, imageCaption },
  },
}) => (
  <figure className={styles.container}>
    <PrismicNextImage field={image} />
    <figcaption className={styles.imageCourtesy}>
      <PrismicRichText field={imageAttribute} />
    </figcaption>
    <figcaption className={styles.imageCaption}>
      <PrismicRichText field={imageCaption} />
    </figcaption>
  </figure>
)

export default Image
