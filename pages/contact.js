import { PrismicRichText, SliceZone } from "@prismicio/react"
import { createClient } from "../prismicio"
import { Layout } from "../components/Layout"
import { components } from "../slices"
import { ContactForm } from "../components/Form/Contact"
import styles from "../sass/pages/contact.module.scss"
import { ContactCards } from "../components/ContactCards"

const Contact = ({ data, url, lang, ...layout }) => {
  const seo = {
    metaTitle: data?.metaTitle,
    metaDescription: data?.metaDescription,
    metaImage: data?.metaImage,
    url,
    article: false,
    lang,
  }

  const contactMethods = [
    {
      methodNo: "01",
      name: "email",
      text: "Send me an email",
      link: `mailto:${layout?.socials?.data?.email}`,
    },
    {
      methodNo: "02",
      name: "calendly",
      text: "Book a call",
      link: data?.calendlyLink.url,
    },
    // {
    //   methodNo: "03",
    //   name: "phone",
    //   text: "Phone me",
    //   link: `tel:${layout?.socials?.data?.phoneNumber.replaceAll(" ", "")}`,
    // },
  ]

  return (
    <Layout seo={seo} {...layout}>
      <section className={`container ${styles.section}`}>
        <div className={styles.flexWrapper}>
          <div className={styles.textWrapper}>
            <div className="title">
              <PrismicRichText field={data?.title} />
            </div>
            <div className={`${styles.description} flow link-reset`}>
              <PrismicRichText field={data?.description} />
            </div>
          </div>
          <div>
            <ContactCards contactMethods={contactMethods} />
          </div>
        </div>
      </section>
      <section className={`container ${styles.formContainer}`}>
        <ContactForm />
      </section>
      <SliceZone slices={data?.slices} components={components} />
    </Layout>
  )
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const page = await client.getSingle("contact")
  const header = await client.getSingle("header")
  const footer = await client.getSingle("footer")
  const socials = await client.getSingle("socials")

  return {
    props: { header, footer, socials, ...page },
  }
}

export default Contact
