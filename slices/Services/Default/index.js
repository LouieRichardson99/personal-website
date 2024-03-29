import { PrismicNextImage } from "@prismicio/next"
import { PrismicRichText } from "@prismicio/react"
import styles from "./styles.module.scss"
import { ServiceCard } from "../../../components/Card/Service"
import formatID from "../../../components/utils/formatID"

const Default = ({ title, description, image, items }) => (
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
          {items.map(({ service }, index) => (
            <ServiceCard
              key={index}
              icon={service.data.icon}
              name={service.data.title}
              description={service.data.description}
              hasBorder={index + 1 !== items.length}
              link={service}
            />
          ))}
        </ul>
      </div>
    </div>
    <div className={styles.imageFlex}>
      <div className={styles.image}>
        <PrismicNextImage field={image} loading="lazy" />
      </div>
    </div>
  </section>
)

export default Default
