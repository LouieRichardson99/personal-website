import { PrismicRichText } from "@prismicio/react"
import styles from "./styles.module.scss"
import formatID from "../../components/utils/formatID"
import { Logo } from "./Logo"

const Logos = ({
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
    <div>
      <PrismicRichText field={description} />
    </div>
    <div className={styles.logos}>
      {items.map(({ logo }, index) => (
        <Logo key={index} image={logo} index={index} />
      ))}
    </div>
  </section>
)

export default Logos
