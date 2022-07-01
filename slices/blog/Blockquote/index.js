import { PrismicRichText } from "@prismicio/react"
import styles from "./styles.module.scss"

const Blockquote = ({
  slice: {
    primary: { quote, author },
  },
}) => (
  <figure className={styles.container}>
    <blockquote>
      <p className={styles.quote}>
        &ldquo;
        {quote}
        &rdquo;
      </p>
    </blockquote>
    <figcaption>
      <div className={styles.author}>
        <span>-</span>
        <PrismicRichText field={author} />
      </div>
    </figcaption>
  </figure>
)

export default Blockquote
