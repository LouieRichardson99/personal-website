import { Fragment } from "react"
import { Footer } from "../Footer"
import { Header } from "../Header"
import { Seo } from "../Seo"

export const Layout = ({ seo, header, footer, socials, children }) => (
  <Fragment>
    <Seo {...seo} />
    <Header {...header?.data} {...socials?.data} />
    <main>{children}</main>
    <Footer {...footer?.data} {...socials?.data} />
  </Fragment>
)
