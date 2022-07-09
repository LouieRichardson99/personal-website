import React from "react"
import { PrismicRichText } from "@prismicio/react"
import styles from "./styles.module.scss"
import { WorkFeed } from "../../components/WorkFeed"

const Work = ({
  slice: {
    primary: { title },
    items,
  },
}) => (
  <section className={styles.section}>
    <div className="container">
      <div className="title dark">
        <PrismicRichText field={title} />
      </div>
      <WorkFeed caseStudies={items} />
    </div>
  </section>
)

export default Work
