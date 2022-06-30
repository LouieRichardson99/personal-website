import { PrismicRichText } from "@prismicio/react"
import { createClient } from "../../prismicio"
import { Layout } from "../../components/Layout"
import { BlogFeed } from "../../components/BlogFeed"

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
      <PrismicRichText field={data.title} />
      <PrismicRichText field={data.subtitle} />
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
  const posts = await client.getAllByType("blog-post")

  return {
    props: { header, footer, socials, posts, ...page },
  }
}

export default BlogPage
