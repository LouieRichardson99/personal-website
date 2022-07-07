import { useEffect, useState } from "react"
import { PrismicRichText, PrismicText, SliceZone } from "@prismicio/react"
import * as prismicHelpers from "@prismicio/helpers"
import { createClient, linkResolver } from "../../prismicio"
import { Layout } from "../../components/Layout"
import { components } from "../../slices"
import { components as articleComponents } from "../../slices/blog"
import { format } from "date-fns"
import { LinkIcon } from "@heroicons/react/solid"
import { TwitterIcon } from "../../components/assets/icons/Twitter"
import { FacebookIcon } from "../../components/assets/icons/Facebook"
import styles from "../../sass/pages/blog-post.module.scss"
import { PrismicNextImage } from "@prismicio/next"

const BlogPost = ({ data, url, lang, ...layout }) => {
  const [postUrl, setPostUrl] = useState(null)

  const seo = {
    metaTitle: data?.metaTitle,
    metaDescription: data?.metaDescription,
    metaImage: data?.metaImage,
    url,
    article: true,
    lang,
  }

  const publishDate = format(
    new Date(layout.first_publication_date),
    "do MMMM y"
  )

  useEffect(() => {
    if (window) {
      setPostUrl(window.location.href)
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
          <p className={styles.publishDate}>Published {publishDate}</p>
          <div className={styles.mainImage}>
            <PrismicNextImage field={data?.image} />
          </div>
          <div className={styles.flexWrapper}>
            <div className={styles.imageCourtesy}>
              <PrismicRichText field={data?.imageAttribute} />
            </div>
            <div className={styles.socialShareFlex}>
              <button onClick={copyUrl} className={styles.urlLinkButton}>
                <LinkIcon />
              </button>
              <a
                href={`https://twitter.com/share?url=${postUrl}&text=${data?.title[0].text}`}
                className={styles.twitterLink}
              >
                <TwitterIcon />
              </a>
              <a
                href={`https://www.facebook.com/sharer.php?u=${postUrl}`}
                className={styles.facebookLink}
              >
                <FacebookIcon />
              </a>
            </div>
          </div>
        </header>
        <div className="article-container flow">
          <SliceZone slices={data?.slices1} components={articleComponents} />
        </div>
        <div className={styles.articleFooterFlex}>
          <div>
            <p>
              <span className={styles.bold}>Share: </span>
              <a
                href={`https://twitter.com/share?url=${postUrl}&text=${data?.title[0].text}`}
              >
                Discuss on Twitter
              </a>
              <span className={styles.red}> | </span>
              <a href={`https://www.facebook.com/sharer.php?u=${postUrl}`}>
                Share on Facebook
              </a>
            </p>
          </div>
          <div className={styles.authorWrapper}>
            <div className={styles.authorImage}>
              <PrismicNextImage field={data?.author?.data?.image} />
            </div>
            <p>
              <PrismicText field={data?.author?.data?.name} /> -{" "}
              <PrismicText field={data?.author?.data?.location} />
            </p>
          </div>
        </div>
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
