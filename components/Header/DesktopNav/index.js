import Link from "next/link"
import Image from "next/image"
import { PrismicLink, SliceZone } from "@prismicio/react"
import { components } from "../../../slices"
import styles from "./styles.module.scss"
import { PhoneIcon } from "@heroicons/react/solid"

export const DesktopNav = ({ slices, image, primaryButton, phoneNumber }) => (
  <div className={styles.flexWrapper}>
    <Link href="/">
      <div className={styles.nameFlex}>
        {image?.src && (
          <div className={styles.image}>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
            />
          </div>
        )}
        <h4>Louie Richardson</h4>
      </div>
    </Link>
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
