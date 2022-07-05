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
  const primaryButton = {
    text: primaryButtonText,
    link: primaryButtonLink,
  }

  return (
    <header className={`container ${styles.header}`}>
      <DesktopNav
        image={image}
        slices={slices}
        primaryButton={primaryButton}
        phoneNumber={phoneNumber}
      />
      <MobileNav image={image} slices={slices} primaryButton={primaryButton} />
    </header>
  )
}
