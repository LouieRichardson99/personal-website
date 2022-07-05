import { PrismicLink, SliceZone } from "@prismicio/react"
import { PrismicNextImage } from "@prismicio/next"
import { components } from "../../../slices"
import styles from "./styles.module.scss"
import { PhoneIcon } from "@heroicons/react/solid"

export const DesktopNav = ({ slices, image, primaryButton, phoneNumber }) => (
  <div className={styles.flexWrapper}>
    <div className={styles.nameFlex}>
      <div className={styles.image}>
        <PrismicNextImage field={image} />
      </div>
      <h4>Louie Richardson</h4>
    </div>
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <SliceZone slices={slices} components={components} />
      </ul>
    </nav>
    <div className={styles.ctaWrapper}>
      {phoneNumber && (
        <a
          className={styles.phoneIcon}
          href={`tel:${phoneNumber.replaceAll(" ", "")}`}
          aria-label="Phone icon"
        >
          <PhoneIcon />
        </a>
      )}
      <PrismicLink className="button primary" field={primaryButton.link}>
        {primaryButton.text}
      </PrismicLink>
    </div>
  </div>
)
