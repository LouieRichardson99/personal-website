import { PrismicImage, PrismicRichText } from "@prismicio/react"
import styles from "./styles.module.scss"

const Image = ({
  slice: {
    primary: { image, imageAttribute },
  },
}) => (
  <div className={styles.container}>
    <PrismicImage field={image} />
    <div className={styles.imageCourtesy}>
      <PrismicRichText field={imageAttribute} />
    </div>
  </div>
)

export default Image
