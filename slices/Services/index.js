import { PrismicNextImage } from "@prismicio/next"
import { PrismicImage, PrismicRichText } from "@prismicio/react"
import styles from "./styles.module.scss"
import { motion } from "framer-motion"

const Services = ({
  slice: {
    primary: { title, description, image },
    items,
  },
}) => {
  const animateTitle = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  const animateList = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const animateItem = {
    hidden: { x: -10, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  }

  return (
    <section
      className={`container ${styles.section}`}
      id={title[0].text.toLowerCase().replaceAll(" ", "-")}
    >
      <div className={styles.flexWrapper}>
        <div>
          <motion.div
            variants={animateTitle}
            initial="hidden"
            whileInView="visible"
            className="title"
            viewport={{ once: true }}
          >
            <PrismicRichText field={title} />
          </motion.div>
          <div className={`${styles.description} flow`}>
            <PrismicRichText field={description} />
          </div>
        </div>
        <div>
          <motion.ul
            className={styles.serviceList}
            whileInView="visible"
            initial="hidden"
            viewport={{ amount: 0.6, once: true }}
            variants={animateList}
          >
            {items.map(
              ({ serviceIcon, serviceName, serviceDescription }, index) => (
                <motion.li
                  variants={animateItem}
                  key={index}
                  className={`${styles.serviceItem} ${
                    index + 1 !== items.length && styles.border
                  }`}
                >
                  <motion.div
                    className={styles.serviceIcon}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <PrismicImage field={serviceIcon} />
                  </motion.div>
                  <div>
                    <div className={styles.serviceName}>
                      <PrismicRichText field={serviceName} />
                    </div>
                    <div className={`${styles.serviceDescription} flow`}>
                      <PrismicRichText field={serviceDescription} />
                    </div>
                  </div>
                </motion.li>
              )
            )}
          </motion.ul>
        </div>
      </div>
      <div className={styles.imageFlex}>
        <div className={styles.image}>
          <PrismicNextImage field={image} />
        </div>
      </div>
    </section>
  )
}

export default Services
