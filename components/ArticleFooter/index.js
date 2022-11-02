import { PrismicNextImage } from "@prismicio/next"
import { PrismicText } from "@prismicio/react"
import styles from "./styles.module.scss"

export const ArticleFooter = ({
  postUrl,
  title,
  authorImage,
  authorName,
  authorLocation,
}) => (
  <footer className={styles.articleFooterFlex}>
    <div>
      <p>
        <span className={styles.bold}>Share: </span>
        <a href={`https://twitter.com/share?url=${postUrl}&text=${title}`}>
          Discuss on Twitter
        </a>
        <span className={styles.red}> | </span>
        <a href={`https://www.facebook.com/sharer.php?u=${postUrl}`}>
          Share on Facebook
        </a>
      </p>
    </div>
    <div className={styles.authorWrapper}>
      <PrismicNextImage field={authorImage} className={styles.authorImage} />

      <p>
        <PrismicText field={authorName} /> -{" "}
        <PrismicText field={authorLocation} />
      </p>
    </div>
  </footer>
)
