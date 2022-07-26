import { PrismicRichText, SliceZone } from "@prismicio/react"
import { createClient } from "../../prismicio"
import { Layout } from "../../components/Layout"
import { components } from "../../slices"
import styles from "../../sass/pages/services.module.scss"
import { ServiceCard } from "../../components/Card/Service"

const Services = ({ data, url, lang, caseStudies, ...layout }) => {
  const seo = {
    metaTitle: data?.metaTitle,
    metaDescription: data?.metaDescription,
    metaImage: data?.metaImage,
    url,
    article: false,
    lang,
  }

  return (
    <Layout seo={seo} {...layout}>
      <section className={`container ${styles.headerSection}`}>
        <div className="title">
          <PrismicRichText field={data?.title} />
        </div>
        <div className={`flow ${styles.description}`}>
          <PrismicRichText field={data?.description} />
        </div>
        <ul className={styles.serviceList}>
          {data?.services.map(({ service }, index) => (
            <ServiceCard
              key={index}
              icon={service.data.icon}
              name={service.data.title}
              description={service.data.description}
              hasBorder={index + 1 !== data?.services.length}
              link={service}
            />
          ))}
        </ul>
      </section>
      <SliceZone slices={data?.slices} components={components} />
    </Layout>
  )
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const fetchLinks = ["service.title", "service.description", "service.icon"]

  const page = await client.getSingle("services", { fetchLinks })
  const header = await client.getSingle("header")
  const footer = await client.getSingle("footer")
  const socials = await client.getSingle("socials")

  return {
    props: { header, footer, socials, ...page },
  }
}

export default Services
