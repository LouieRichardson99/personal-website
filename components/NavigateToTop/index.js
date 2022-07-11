import { useEffect, useState } from "react"
import styles from "./styles.module.scss"
import { ChevronUpIcon } from "@heroicons/react/outline"

export const NavigateToTop = () => {
  const [isShowing, setIsShowing] = useState(false)

  const handleScroll = () => {
    if (typeof window === "object") {
      const rootElement = document.getElementById("root")
      const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight

      if (rootElement.scrollTop / scrollTotal > 0.2) {
        setIsShowing(true)
      } else {
        setIsShowing(false)
      }
    }
  }

  const scrollToTop = () => {
    const rootElement = document.getElementById("root")

    rootElement.scrollTo({ top: 0, behavior: "smooth" })
  }

  useEffect(() => {
    if (typeof window === "object") {
      window.addEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <button
      className={`${styles.button} ${isShowing && styles.show}`}
      onClick={scrollToTop}
    >
      <ChevronUpIcon />
    </button>
  )
}
