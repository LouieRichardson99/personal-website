import { PrismicRichText, SliceZone } from "@prismicio/react"
import * as prismicHelpers from "@prismicio/helpers"
import { createClient, linkResolver } from "../../prismicio"
import { Layout } from "../../components/Layout"
import { components } from "../../slices/blog"
import styles from "../../sass/pages/note.module.scss"
import { formatDate } from "../../components/utils/formatDate"

const Note = ({
  data,
  url,
  lang,
  first_publication_date,
  last_publication_date,
  ...layout
}) => {
  const seo = {
    metaTitle: data?.metaTitle,
    metaDescription: data?.metaDescription,
    metaImage: data?.metaImage,
    url,
    article: true,
    lang,
    structuredData: {
      datePublished: first_publication_date,
      dateModified: last_publication_date,
      author: data?.author?.data?.name,
    },
  }

  return (
    <Layout seo={seo} {...layout}>
      <article className={`container ${styles.article}`}>
        <header className={styles.header}>
          <div>
            <p className={styles.dateAndCategory}>
              <span>
                {formatDate(new Date(first_publication_date).getTime())}
              </span>
              <span>/</span>
              <span>{data?.category}</span>
            </p>
          </div>
          <div className="title">
            <PrismicRichText field={data.title} />
          </div>
        </header>
        <div className="narrow-container article flow">
          <SliceZone components={components} slices={data.slices} />
        </div>
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const client = createClient()
  const pages = await client.getAllByType("note")

  return {
    paths: pages.map((doc) => prismicHelpers.asLink(doc, linkResolver)),
    fallback: false,
  }
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })
  const fetchLinks = ["author.name", "author.image", "author.location"]

  const page = await client.getByUID("note", params.uid, {
    fetchLinks,
  })
  const header = await client.getSingle("header")
  const footer = await client.getSingle("footer")
  const socials = await client.getSingle("socials")

  return {
    props: { header, footer, socials, ...page },
  }
}

export default Note
