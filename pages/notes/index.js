import { createClient } from "../../prismicio"
import { Layout } from "../../components/Layout"
import { PrismicLink, PrismicRichText, PrismicText } from "@prismicio/react"
import { ArrowUpRightIcon } from "@heroicons/react/24/outline"
import styles from "../../sass/pages/notes.module.scss"

const Notes = ({ data, url, lang, notes, ...layout }) => {
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
      <section className={`container`}>
        <div className={`title ${styles.titleContainer}`}>
          <PrismicRichText field={data.title} />
        </div>
        <div>
          <PrismicRichText field={data?.description} />
        </div>
        <ul className={`${styles.list} narrow-container`}>
          {notes.map((note, index) => (
            <li key={index}>
              <PrismicLink document={note}>
                <p className={styles.noteCategory}>{note?.data?.category}</p>
                <div className={styles.noteTitle}>
                  <PrismicText field={note?.data.title} />
                  <ArrowUpRightIcon id="arrow-icon" />
                </div>
                <p className={styles.noteDescription}>
                  {note?.data?.short_description}
                </p>
              </PrismicLink>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const fetchLinks = ["note.title", "note.short_description", "note.category"]

  const page = await client.getSingle("notes")
  const notes = await client.getAllByType("note", { fetchLinks })
  const header = await client.getSingle("header")
  const footer = await client.getSingle("footer")
  const socials = await client.getSingle("socials")

  return {
    props: { header, footer, socials, notes, ...page },
  }
}

export default Notes
