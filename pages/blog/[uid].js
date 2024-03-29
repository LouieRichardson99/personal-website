import { useEffect, useState } from "react"
import { PrismicRichText, SliceZone } from "@prismicio/react"
import * as prismicHelpers from "@prismicio/helpers"
import { createClient, linkResolver } from "../../prismicio"
import { Layout } from "../../components/Layout"
import { components } from "../../slices"
import { components as articleComponents } from "../../slices/blog"
import { LinkIcon } from "@heroicons/react/24/solid"
import { TwitterIcon } from "../../components/assets/icons/Twitter"
import { FacebookIcon } from "../../components/assets/icons/Facebook"
import styles from "../../sass/pages/blog-post.module.scss"
import { PrismicNextImage } from "@prismicio/next"
import { formatDate } from "../../components/utils/formatDate"
import { ArticleFooter } from "../../components/ArticleFooter"

const BlogPost = ({
  data,
  lang,
  first_publication_date,
  last_publication_date,
  ...layout
}) => {
  const [postUrl, setPostUrl] = useState(null)

  const url = linkResolver(layout)

  const seo = {
    metaTitle: data?.metaTitle,
    metaDescription: data?.metaDescription,
    metaImage: data?.metaImage,
    url,
    lang,
    article: true,
    structuredData: {
      datePublished: first_publication_date,
      dateModified: last_publication_date,
      author: data.author.data.name,
    },
  }

  useEffect(() => {
    if (window) {
      setPostUrl(`${window.location.origin}${window.location.pathname}`)
    }
  }, [])

  const copyUrl = () => {
    navigator.clipboard.writeText(postUrl)
  }

  return (
    <Layout seo={seo} {...layout}>
      <article className={`container ${styles.article}`}>
        <header className={styles.header}>
          <div className="title">
            <PrismicRichText field={data?.title} />
          </div>
          <p className={styles.publishDate}>
            Published {formatDate(new Date(first_publication_date).getTime())}
          </p>

          <PrismicNextImage field={data?.image} className={styles.mainImage} />

          <div className={styles.flexWrapper}>
            <div className={styles.imageCourtesy}>
              <PrismicRichText field={data?.imageAttribute} />
            </div>
            <div className={styles.socialShareFlex}>
              <button
                onClick={copyUrl}
                className={styles.urlLinkButton}
                aria-label="Copy page URL"
              >
                <LinkIcon />
              </button>
              <a
                href={`https://twitter.com/share?url=${postUrl}&text=${data?.title[0].text}`}
                className={styles.twitterLink}
                aria-label="Share on Twitter"
              >
                <TwitterIcon />
              </a>
              <a
                href={`https://www.facebook.com/sharer.php?u=${postUrl}`}
                className={styles.facebookLink}
                aria-label="Share on Facebook"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>
        </header>
        <div className="narrow-container article flow">
          <SliceZone slices={data?.slices1} components={articleComponents} />
        </div>
        <ArticleFooter
          postUrl={postUrl}
          title={data?.title[0].text}
          authorImage={data?.author?.data?.image}
          authorName={data?.author?.data?.name}
          authorLocation={data?.author?.data?.location}
        />
      </article>

      <SliceZone slices={data?.slices} components={components} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const client = createClient()
  const posts = await client.getAllByType("blog-post")

  return {
    paths: posts.map((doc) => prismicHelpers.asLink(doc, linkResolver)),
    fallback: false,
  }
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })
  const fetchLinks = ["author.name", "author.image", "author.location"]

  const post = await client.getByUID("blog-post", params.uid, {
    fetchLinks,
  })
  const header = await client.getSingle("header")
  const footer = await client.getSingle("footer")
  const socials = await client.getSingle("socials")

  return {
    props: { header, footer, socials, ...post },
  }
}

export default BlogPost
