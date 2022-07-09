import React from "react"
import { PrismicRichText } from "@prismicio/react"
import styles from "./styles.module.scss"
import { WorkFeed } from "../../components/WorkFeed"
import formatID from "../../components/utils/formatID"

const Work = ({
  slice: {
    primary: { title },
  },
  caseStudies,
}) => {
  return (
    <section className={styles.section} id={formatID(title[0].text)}>
      <div className="container">
        <div className="title dark">
          <PrismicRichText field={title} />
        </div>
        <WorkFeed caseStudies={caseStudies} />
      </div>
    </section>
  )
}

export default Work
