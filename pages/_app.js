import Link from "next/link"
import { PrismicProvider } from "@prismicio/react"
import { PrismicPreview } from "@prismicio/next"
import { linkResolver, repositoryName } from "../prismicio"
import "../sass/main.scss"
import PlausibleProvider from "next-plausible"

const App = ({ Component, pageProps }) => {
  return (
    <PlausibleProvider domain="louierichardson.com">
      <PrismicProvider
        linkResolver={linkResolver}
        internalLinkComponent={({ href, children, ...props }) => (
          <Link href={href} {...props}>
            {children}
          </Link>
        )}
      >
        <PrismicPreview repositoryName={repositoryName}>
          <Component {...pageProps} />
        </PrismicPreview>
      </PrismicProvider>
    </PlausibleProvider>
  )
}

export default App
