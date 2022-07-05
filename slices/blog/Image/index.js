import { PrismicNextImage } from "@prismicio/next"
import { PrismicRichText } from "@prismicio/react"
import styles from "./styles.module.scss"

const Image = ({
  slice: {
    primary: { image, imageAttribute },
  },
}) => (
  <figure className={styles.container}>
    <PrismicNextImage field={image} />
    <figcaption className={styles.imageCourtesy}>
      <PrismicRichText field={imageAttribute} />
    </figcaption>
  </figure>
)

export default Image
