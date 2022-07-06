import { PrismicNextImage } from "@prismicio/next"
import { PrismicImage, PrismicRichText } from "@prismicio/react"
import styles from "./styles.module.scss"

const Services = ({
  slice: {
    primary: { title, description, image },
    items,
  },
}) => (
  <section
    className={`container ${styles.section}`}
    id={title[0].text.toLowerCase().replaceAll(" ", "-")}
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
            ({ serviceIcon, serviceName, serviceDescription }, index) => (
              <li
                key={index}
                className={`${styles.serviceItem} ${
                  index + 1 !== items.length && styles.border
                }`}
              >
                <div className={styles.serviceIcon}>
                  <PrismicImage field={serviceIcon} />
                </div>
                <div>
                  <div className={styles.serviceName}>
                    <PrismicRichText field={serviceName} />
                  </div>
                  <div className={`${styles.serviceDescription} flow`}>
                    <PrismicRichText field={serviceDescription} />
                  </div>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
    <div className={styles.imageFlex}>
      <div className={styles.image}>
        <PrismicNextImage field={image} />
      </div>
    </div>
  </section>
)

export default Services
