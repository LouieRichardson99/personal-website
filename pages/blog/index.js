import { PrismicRichText } from "@prismicio/react"
import { createClient } from "../../prismicio"
import { Layout } from "../../components/Layout"
import { BlogFeed } from "../../components/BlogFeed"
import styles from "../../sass/pages/blog.module.scss"

const BlogPage = ({ data, url, lang, posts, ...layout }) => {
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
      <section className={`container ${styles.section}`}>
        <div className="title">
          <PrismicRichText field={data.title} />
        </div>
        <div className={styles.subtitle}>
          <PrismicRichText field={data.subtitle} />
        </div>
      </section>
      <BlogFeed posts={posts} />
    </Layout>
  )
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const page = await client.getSingle("blog")
  const header = await client.getSingle("header")
  const footer = await client.getSingle("footer")
  const socials = await client.getSingle("socials")
  const posts = await client.getAllByType("blog-post", {
    orderings: { field: "document.first_publication_date", direction: "desc" },
  })

  return {
    props: { header, footer, socials, posts, ...page },
  }
}

export default BlogPage
