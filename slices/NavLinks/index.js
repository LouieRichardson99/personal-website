import { Fragment } from "react"
import { useRouter } from "next/router"
import { PrismicLink } from "@prismicio/react"
import styles from "./styles.module.scss"
import Link from "next/link"

const NavLinks = ({ slice: { items } }) => {
  const router = useRouter()

  const getCurrentPathname = (pathname) => {
    if (router.asPath === pathname) {
      return styles.active
    }
  }

  return (
    <Fragment>
      {items.map(({ link, linkText }, index) => {
        if (link.link_type === "Web") {
          const anchor = link.url.replace("https://", "/")

          return (
            <li key={index}>
              <Link href={anchor}>{linkText}</Link>
            </li>
          )
        } else {
          return (
            <li key={index}>
              <PrismicLink
                field={link}
                className={getCurrentPathname(`/${link.slug}`)}
              >
                {linkText}
              </PrismicLink>
            </li>
          )
        }
      })}
    </Fragment>
  )
}

export default NavLinks
