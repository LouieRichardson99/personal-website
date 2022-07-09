import { PrismicRichText } from "@prismicio/react"
import styles from "./styles.module.scss"
import { ProcessCard } from "../../components/Card/ProcessCard"

const Process = ({
  slice: {
    primary: { title, description },
    items,
  },
}) => (
  <section
    className={`container ${styles.section}`}
    id={title[0].text.toLowerCase().replaceAll(" ", "-")}
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
