import { PrismicNextImage } from "@prismicio/next"
import { PrismicRichText } from "@prismicio/react"
import styles from "./styles.module.scss"
import { ServiceCard } from "../../components/Card/Service"

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
              <ServiceCard
                key={index}
                icon={serviceIcon}
                name={serviceName}
                description={serviceDescription}
                hasBorder={index + 1 !== items.length}
              />
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
