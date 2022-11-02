import { PrismicLink, PrismicRichText, PrismicText } from "@prismicio/react"
import { PrismicNextImage } from "@prismicio/next"
import { ArrowNarrowRightIcon } from "@heroicons/react/outline"
import styles from "./styles.module.scss"
import { formatDate } from "../../utils/formatDate"
import { useInView } from "react-intersection-observer"

export const BlogPostCard = ({ image, title, date, description, link }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <li ref={ref} className={`${styles.card} ${inView && styles.animate}`}>
      <PrismicLink document={link}>
        <PrismicNextImage
          field={image}
          className={styles.image}
          imgixParams={{ blur: 10 }}
          priority={true}
        />
        <div className={styles.innerCardWrapper}>
          <h3 className={styles.title}>
            <PrismicText field={title} />
          </h3>
          <p className={styles.publishDate}>
            {formatDate(new Date(date).getTime())}
          </p>
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
