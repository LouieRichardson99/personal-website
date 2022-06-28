import { Fragment } from "react"
import { useRouter } from "next/router"
import { PrismicLink } from "@prismicio/react"
import styles from "./styles.module.scss"

const NavLinks = ({ slice: { items } }) => {
  const router = useRouter()

  const getCurrentPathname = (pathname) => {
    if (router.asPath === "/" && pathname === "/homepage") {
      return styles.active
    }

    if (router.asPath === pathname) {
      return styles.active
    }
  }

  return (
    <Fragment>
      {items.map(({ link, linkText }, index) => (
        <li key={index}>
          <PrismicLink
            field={link}
            className={getCurrentPathname(`/${link.slug}`)}
          >
            {linkText}
          </PrismicLink>
        </li>
      ))}
    </Fragment>
  )
}

export default NavLinks
