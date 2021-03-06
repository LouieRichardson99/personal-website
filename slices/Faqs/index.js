import { PrismicRichText } from "@prismicio/react"
import { Accordion } from "../../components/Accordion"
import styles from "./styles.module.scss"
import formatID from "../../components/utils/formatID"

const Faqs = ({
  slice: {
    primary: { title, description },
    items,
  },
}) => (
  <section
    className={`${styles.section} container`}
    id={formatID(title[0].text)}
  >
    <div className="title">
      <PrismicRichText field={title} />
    </div>
    <div className={`flow ${styles.description}`}>
      <PrismicRichText field={description} />
    </div>
    <div className={`${styles.accordionsWrapper} narrow-container`}>
      {items.map(({ faq: { data } }, index) => (
        <Accordion
          question={data?.question}
          answer={data?.answer}
          key={index}
        />
      ))}
    </div>
  </section>
)

export default Faqs
