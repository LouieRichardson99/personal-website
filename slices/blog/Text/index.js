import { useEffect, useState } from "react"
import { PrismicRichText } from "@prismicio/react"
import styles from "./styles.module.scss"
import { LinkIcon } from "@heroicons/react/outline"
import formatId from "../../../components/utils/formatID"

const Text = ({
  slice: {
    primary: { richText },
  },
}) => {
  const [url, setUrl] = useState(null)

  useEffect(() => {
    if (window) {
      setUrl(`${window.location.origin}${window.location.pathname}`)
    }
  }, [])

  const handleAnchorLink = (header) => {
    const formattedAnchor = formatId(header)
    navigator.clipboard.writeText(`${url}/#${formattedAnchor}`)
  }

  const components = {
    heading2: ({ node, children }) => (
      <h2
        className={styles.header}
        id={formatId(node)}
        onClick={() => handleAnchorLink(node)}
      >
        <LinkIcon className={styles.icon} />
        {children}
      </h2>
    ),
    heading3: ({ node, children }) => (
      <h3
        className={styles.header}
        id={formatId(node)}
        onClick={() => handleAnchorLink(node)}
      >
        <LinkIcon className={styles.icon} />
        {children}
      </h3>
    ),
    heading4: ({ node, children }) => (
      <h4
        className={styles.header}
        id={formatAnchor(node)}
        onClick={() => handleAnchorLink(node)}
      >
        <LinkIcon className={styles.icon} />
        {children}
      </h4>
    ),
    heading5: ({ node, children }) => (
      <h5
        className={styles.header}
        id={formatId(node)}
        onClick={() => handleAnchorLink(node)}
      >
        <LinkIcon className={styles.icon} />
        {children}
      </h5>
    ),
  }

  return <PrismicRichText field={richText} components={components} />
}

export default Text
