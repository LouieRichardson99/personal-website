import { Fragment, useState, useEffect } from "react"
import { PopupModal, useCalendlyEventListener } from "react-calendly"
import { usePlausible } from "next-plausible"
import styles from "./styles.module.scss"

export const ContactCard = ({ methodNo, text, link }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [rootElement, setRootElement] = useState(null)
  const plausible = usePlausible()

  useEffect(() => {
    if (typeof window === "object") {
      setRootElement(document.getElementById("root"))
    }
  }, [])

  const recordEvent = () => {
    plausible("Calendly event scheduled")
  }

  useCalendlyEventListener({ onEventScheduled: recordEvent })

  if (link.includes("calendly")) {
    return (
      <Fragment>
        <li className={styles.card}>
          <button
            href={link}
            className={styles.flexWrapper}
            onClick={() => setIsModalOpen(true)}
          >
            <span className={styles.methodNo}>{methodNo}</span>
            <span className={styles.text}>{text}</span>
          </button>
        </li>
        <PopupModal
          url="https://calendly.com/louie-richardson/30min"
          onModalClose={() => setIsModalOpen(false)}
          open={isModalOpen}
          rootElement={rootElement}
        />
      </Fragment>
    )
  }

  return (
    <li className={styles.card}>
      <a href={link} className={styles.flexWrapper}>
        <span className={styles.methodNo}>{methodNo}</span>
        <span className={styles.text}>{text}</span>
      </a>
    </li>
  )
}
