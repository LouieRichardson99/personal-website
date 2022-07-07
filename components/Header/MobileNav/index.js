import { useState } from "react"
import { PrismicNextImage } from "@prismicio/next"
import { PrismicLink, SliceZone } from "@prismicio/react"
import { components } from "../../../slices"
import { MenuAlt3Icon } from "@heroicons/react/outline"
import styles from "./styles.module.scss"

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

      <nav
        className={`${styles.nav} ${open && styles.open}`}
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
      </nav>
    </div>
  )
}
