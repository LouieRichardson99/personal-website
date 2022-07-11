import { Fragment } from "react"
import { Footer } from "../Footer"
import { Header } from "../Header"
import { NavigateToTop } from "../NavigateToTop"
import { Seo } from "../Seo"

export const Layout = ({ seo, header, footer, socials, children }) => (
  <Fragment>
    <Seo {...seo} />
    <Header {...header?.data} {...socials?.data} />
    <main>
      {children}
      <NavigateToTop />
    </main>
    <Footer {...footer?.data} {...socials?.data} />
  </Fragment>
)
