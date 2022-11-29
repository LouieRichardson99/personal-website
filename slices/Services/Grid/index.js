import { PrismicNextImage } from "@prismicio/next"
import { PrismicLink, PrismicRichText, PrismicText } from "@prismicio/react"
import styles from "./styles.module.scss"
import formatID from "../../../components/utils/formatID"
import { ArrowLongRightIcon } from "@heroicons/react/24/outline"

const Grid = ({ title, description, items }) => (
  <section
    className={`container ${styles.section}`}
    id={formatID(title[0].text)}
  >
    <div className={styles.flexWrapper}>
      <div>
        <div className="title">
          <PrismicRichText field={title} />
        </div>
        <div className={`${styles.description} flow`}>
          <PrismicRichText field={description} />
        </div>
      </div>
      <div>
        <ul className={styles.serviceList}>
          {items.map(
            (
              {
                service_title,
                service_description,
                service_icon,
                service_link,
              },
              index
            ) => (
              <li key={index}>
                <div className={styles.icon}>
                  <PrismicNextImage field={service_icon} loading="lazy" />
                </div>
                <div className={styles.text}>
                  <div className={styles.link}>
                    <PrismicLink document={service_link}>
                      <div className={styles.name}>
                        <h3>
                          <PrismicText field={service_title} />
                        </h3>
                        <ArrowLongRightIcon />
                      </div>
                    </PrismicLink>
                  </div>
                  <div className={`${styles.description} flow`}>
                    <PrismicRichText field={service_description} />
                  </div>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  </section>
)

export default Grid
