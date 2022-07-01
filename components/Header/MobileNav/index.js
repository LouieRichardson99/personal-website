import { useState } from "react"

import Image from "next/image"
import { PrismicLink, SliceZone } from "@prismicio/react"
import { components } from "../../../slices"
import styles from "./styles.module.scss"
import { MenuAlt3Icon } from "@heroicons/react/outline"

export const MobileNav = ({ slices, image, primaryButton }) => {
  const [open, setOpen] = useState(false)

  const handleMenuState = () => {
    setOpen(!open)
  }

  return (
    <div className={styles.flexWrapper}>
      <div className={styles.nameFlex}>
        <div className={styles.image}>
          {image?.src && (
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
            />
          )}
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

      <nav className={`${styles.nav} ${open && styles.open}`}>
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
