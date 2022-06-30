import { useEffect, useState } from "react"
import {
  PrismicImage,
  PrismicRichText,
  PrismicText,
  SliceZone,
} from "@prismicio/react"
import * as prismicHelpers from "@prismicio/helpers"
import { createClient, linkResolver } from "../../prismicio"
import { Layout } from "../../components/Layout"
import { components } from "../../slices"
import { components as articleComponents } from "../../slices/blog"
import { format } from "date-fns"
import { LinkIcon } from "@heroicons/react/solid"
import { TwitterIcon } from "../../components/icons/Twitter"
import { FacebookIcon } from "../../components/icons/Facebook"

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

  console.log(data)

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
      <article>
        <header>
          <PrismicRichText field={data?.title} />
          <p>Published {publishDate}</p>
          <PrismicImage field={data?.image} />
          <div>
            <div>
              <p>Image courtesy of </p>
              <PrismicRichText field={data?.imageAttribute} />
            </div>
            <div>
              <button onClick={copyUrl}>
                <LinkIcon />
              </button>
              <a
                href={`https://twitter.com/share?url=${postUrl}&text=${data?.title[0].text}`}
              >
                <TwitterIcon />
              </a>
              <a href={`https://www.facebook.com/sharer.php?u=${postUrl}`}>
                <FacebookIcon />
              </a>
            </div>
          </div>
        </header>
        <div>
          <SliceZone slices={data?.slices1} components={articleComponents} />
        </div>
        <div>
          <div>
            <p>
              <span>Share: </span>
              <a
                href={`https://twitter.com/share?url=${postUrl}&text=${data?.title[0].text}`}
              >
                Discuss on Twitter
              </a>
              <span>|</span>
              <a href={`https://www.facebook.com/sharer.php?u=${postUrl}`}>
                Share on Facebook
              </a>
            </p>
          </div>
          <div>
            <PrismicImage field={data?.author?.data?.image} />
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
