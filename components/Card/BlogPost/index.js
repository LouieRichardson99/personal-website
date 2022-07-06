import { PrismicLink, PrismicRichText, PrismicText } from "@prismicio/react"
import { PrismicNextImage } from "@prismicio/next"
import { format } from "date-fns"
import { ArrowNarrowRightIcon } from "@heroicons/react/outline"
import styles from "./styles.module.scss"

export const BlogPostCard = ({ image, title, date, description, link }) => {
  const publishDate = format(new Date(date), "do MMMM y")

  return (
    <li className={styles.card}>
      <PrismicLink document={link}>
        <div className={styles.image}>
          <PrismicNextImage
            field={image}
            layout="fill"
            imgixParams={{ blur: 10 }}
          />
        </div>
        <div className={styles.innerCardWrapper}>
          <h3 className={styles.title}>
            <PrismicText field={title} />
          </h3>
          <p className={styles.publishDate}>{publishDate}</p>
          <div className={styles.description}>
            <PrismicRichText field={description} />
          </div>
          <p className={styles.readPost}>
            Read post <ArrowNarrowRightIcon />
          </p>
        </div>
      </PrismicLink>
    </li>
  )
}
