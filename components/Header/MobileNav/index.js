import { useState } from "react"
import { PrismicLink, SliceZone } from "@prismicio/react"
import { components } from "../../../slices"
import styles from "./styles.module.scss"
import { MenuAlt3Icon } from "@heroicons/react/outline"
import { PrismicNextImage } from "@prismicio/next"
import { motion } from "framer-motion"

export const MobileNav = ({ slices, image, primaryButton }) => {
  const [open, setOpen] = useState(false)

  const handleMenuState = () => {
    setOpen(!open)

    if (document.body.style.overflow === "hidden") {
      document.body.style.overflow = "visible"
    } else {
      document.body.style.overflow = "hidden"
    }
  }

  const animateMenu = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  }

  return (
    <div className={styles.flexWrapper}>
      <div className={styles.nameFlex}>
        <div className={styles.image}>
          <PrismicNextImage field={image} loading="eager" />
        </div>
        <h4>Louie Richardson</h4>
      </div>
      <button
        className={`${styles.button} ${open && styles.open}`}
        onClick={handleMenuState}
        aria-label="Open menu"
      >
        <MenuAlt3Icon />
      </button>

      <motion.nav
        className={styles.nav}
        animate={open ? "open" : "closed"}
        initial="closed"
        variants={animateMenu}
        transition={{ type: "spring", duration: 0.1 }}
        onClick={handleMenuState}
      >
        <ul className={styles.navList}>
          <SliceZone slices={slices} components={components} />
          <li>
            <PrismicLink field={primaryButton.link}>
              {primaryButton.text}
            </PrismicLink>
          </li>
        </ul>
      </motion.nav>
    </div>
  )
}
