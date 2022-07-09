import { PrismicRichText } from "@prismicio/react"
import styles from "./styles.module.scss"
import { ProcessCard } from "../../components/Card/ProcessCard"
import formatID from "../../components/utils/formatID"

const Process = ({
  slice: {
    primary: { title, description },
    items,
  },
}) => (
  <section
    className={`container ${styles.section}`}
    id={formatID(title[0].text)}
  >
    <div>
      <div className="title">
        <PrismicRichText field={title} />
      </div>
      <div className="flow">
        <PrismicRichText field={description} />
      </div>
    </div>
    <ol className={styles.processCardsWrapper}>
      {items.map(
        ({ processNumber, processTitle, processDescription }, index) => (
          <ProcessCard
            key={index}
            number={processNumber}
            title={processTitle}
            description={processDescription}
          />
        )
      )}
    </ol>
  </section>
)

export default Process
