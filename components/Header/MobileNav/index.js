import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { PrismicNextImage } from "@prismicio/next"
import { PrismicLink, SliceZone } from "@prismicio/react"
import { components } from "../../../slices"
import { MenuAlt3Icon } from "@heroicons/react/outline"
import styles from "./styles.module.scss"
import Link from "next/link"

export const MobileNav = ({ slices, image, primaryButton }) => {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const getCurrentPathname = (pathname) => {
    if (router.asPath === pathname) {
      return styles.active
    }
  }

  const handleMenuState = () => {
    setOpen(!open)

    if (document.body.style.overflow === "hidden") {
      document.body.style.overflow = "visible"
    } else {
      document.body.style.overflow = "hidden"
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", () => {
        setOpen(false)

        if (document.body.style.overflow === "hidden") {
          document.body.style.overflow = "visible"
        }
      })
    }
  }, [])

  return (
    <div className={styles.flexWrapper}>
      <div className={styles.nameFlex}>
        <Link href="/">
          <div className={styles.image}>
            <PrismicNextImage field={image} priority={true} />
          </div>
        </Link>
        <div className={styles.name}>
          <Link href="/">Louie Richardson</Link>
        </div>
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
            <PrismicLink
              field={primaryButton.link}
              className={getCurrentPathname(`/${primaryButton.link.slug}`)}
            >
              {primaryButton.text}
            </PrismicLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}
