import * as prismicHelpers from "@prismicio/helpers"
import { DesktopNav } from "./DesktopNav"
import { MobileNav } from "./MobileNav"
import styles from "./styles.module.scss"

export const Header = ({
  image,
  slices,
  primaryButtonText,
  primaryButtonLink,
  phoneNumber,
}) => {
  const imageData = {
    src: prismicHelpers.asImageSrc(image) || null,
    alt: image?.alt,
    width: image?.dimensions.width,
    height: image?.dimensions.height,
  }

  const primaryButton = {
    text: primaryButtonText,
    link: primaryButtonLink,
  }

  return (
    <header className={`container ${styles.header}`}>
      <DesktopNav
        image={imageData}
        slices={slices}
        primaryButton={primaryButton}
        phoneNumber={phoneNumber}
      />
      <MobileNav
        image={imageData}
        slices={slices}
        primaryButton={primaryButton}
      />
    </header>
  )
}
