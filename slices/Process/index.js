import { PrismicRichText } from "@prismicio/react"
import { motion } from "framer-motion"
import styles from "./styles.module.scss"

const Process = ({
  slice: {
    primary: { title, description },
    items,
  },
}) => {
  const animateTitle = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  }

  const animateCardLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  }

  const animateCardRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <section
      className={`container ${styles.section}`}
      id={title[0].text.toLowerCase().replaceAll(" ", "-")}
    >
      <div>
        <motion.div
          variants={animateTitle}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="title"
        >
          <PrismicRichText field={title} />
        </motion.div>
        <div className="flow">
          <PrismicRichText field={description} />
        </div>
      </div>
      <div className={styles.processCardsWrapper}>
        {items.map(
          ({ processNumber, processTitle, processDescription }, index) => (
            <div key={index} className={styles.processCardContainer}>
              <motion.div
                className={styles.processCard}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                variants={
                  (index + 1) % 2 == 0 ? animateCardRight : animateCardLeft
                }
                viewport={{ amount: 0.6, once: true }}
              >
                <div className={styles.processNumber}>{processNumber}</div>
                <div className={styles.textWrapper}>
                  <div className={styles.processTitle}>
                    <PrismicRichText field={processTitle} />
                  </div>
                  <div className="flow">
                    <PrismicRichText field={processDescription} />
                  </div>
                </div>
              </motion.div>
            </div>
          )
        )}
      </div>
    </section>
  )
}

export default Process
