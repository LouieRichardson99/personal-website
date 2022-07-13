import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { PrismicNextImage } from "@prismicio/next"
import styles from "./styles.module.scss"

export const Logo = ({ image, index }) => {
  const [animate, setAnimate] = useState(false)

  const { ref, inView } = useInView({
    threshold: 0.9,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      setTimeout(() => setAnimate(true), index * 125)
    }
  }, [inView, index])

  return (
    <div className={`${styles.image} ${animate && styles.animate}`} ref={ref}>
      <PrismicNextImage field={image} layout="responsive" />
    </div>
  )
}
