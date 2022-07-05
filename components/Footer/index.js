import { PrismicLink, PrismicRichText, SliceZone } from "@prismicio/react"
import { PrismicNextImage } from "@prismicio/next"
import { components } from "../../slices"
import styles from "./styles.module.scss"
import { MailIcon, PhoneIcon } from "@heroicons/react/solid"

export const Footer = ({
  slices,
  email,
  phoneNumber,
  socialMedia,
  legalPageLinks,
}) => (
  <footer className={`container ${styles.footer}`}>
    <div className={styles.topFlexWrapper}>
      <nav>
        <ul className={styles.navLinks}>
          <SliceZone slices={slices} components={components} />
        </ul>
      </nav>
      <div>
        {phoneNumber && (
          <a
            className={styles.phoneLink}
            href={`tel:${phoneNumber.replaceAll(" ", "")}`}
          >
            <PhoneIcon />
            {phoneNumber}
          </a>
        )}
        {email && (
          <a className={styles.emailLink} href={email}>
            <MailIcon />
            {email}
          </a>
        )}
        <ul className={styles.socialIcons}>
          {socialMedia.map(({ icon, link }, index) => (
            <li key={index}>
              <PrismicLink field={link}>
                <PrismicNextImage field={icon} />
              </PrismicLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className={styles.bottomFlexWrapper}>
      <div className={styles.legalPageLinks}>
        <PrismicRichText field={legalPageLinks} />
      </div>
      <p className={styles.copyright}>
        © {new Date().getFullYear()} Louie Richardson
      </p>
    </div>
  </footer>
)
