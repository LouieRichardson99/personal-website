import { PrismicRichText } from "@prismicio/react"
import styles from "./styles.module.scss"

/**
 * @typedef {import("@prismicio/client").Content.ContentSlice} ContentSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContentSlice>} ContentProps
 * @param { ContentProps }
 */
const Content = ({
  slice: {
    primary: { title, description },
  },
}) => (
  <section className={`${styles.section}`}>
    <div className="container">
      <div className={`${styles.title} title dark`}>
        <PrismicRichText field={title} />
      </div>
      <div className={`${styles.description} flow`}>
        <PrismicRichText field={description} />
      </div>
    </div>
  </section>
)

export default Content
