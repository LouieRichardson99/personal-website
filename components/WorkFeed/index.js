import { PrismicLink, PrismicRichText, PrismicText } from "@prismicio/react"
import {
  ArrowTopRightOnSquareIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline"
import styles from "./styles.module.scss"
import { useInView } from "react-intersection-observer"
import { PrismicNextImage } from "@prismicio/next"

export const WorkFeed = ({ caseStudies }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  return (
    <ul className={styles.list}>
      {caseStudies.map(({ data, ...caseStudy }, index) => (
        <li key={index} className={styles.caseStudy}>
          <div>
            <h3 className={styles.title}>
              <PrismicText field={data.title} />
            </h3>
            <div
              className={`${styles.image} ${inView && styles.animate}`}
              ref={ref}
            >
              <PrismicNextImage field={data.image} priority={true} />
            </div>
            <div className={styles.websiteLink}>
              <PrismicLink field={data.websiteLink}>
                Visit Website
                <ArrowTopRightOnSquareIcon />
              </PrismicLink>
            </div>
          </div>
          <div>
            <div className={styles.tags}>
              {data.tags.map(({ tag }, index) => (
                <div key={index} className={styles.tag}>
                  {tag}
                </div>
              ))}
            </div>
            <div className={`flow ${styles.description}`}>
              <PrismicRichText field={data.description} />
            </div>
            <div className={styles.readMoreLink}>
              <PrismicLink
                aria-label="Read the entire case study"
                document={caseStudy}
              >
                Read the Case Study
                <ArrowLongRightIcon />
              </PrismicLink>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
