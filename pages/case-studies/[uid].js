import { useState, useEffect } from "react"
import { PrismicLink, PrismicRichText, SliceZone } from "@prismicio/react"
import * as prismicHelpers from "@prismicio/helpers"
import { createClient, linkResolver } from "../../prismicio"
import { Layout } from "../../components/Layout"
import { components } from "../../slices"
import styles from "../../sass/pages/case-study.module.scss"
import { PrismicNextImage } from "@prismicio/next"
import { components as articleComponents } from "../../slices/blog"
import { ArticleFooter } from "../../components/ArticleFooter"
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline"

const CaseStudy = ({
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
      setPostUrl(window.location.href)
    }
  }, [])

  return (
    <Layout seo={seo} {...layout}>
      <article className={`container ${styles.article}`}>
        <header className={styles.header}>
          <div className="title">
            <PrismicRichText field={data?.title} />
          </div>

          <PrismicNextImage
            field={data?.articleImage}
            className={styles.mainImage}
          />

          <div className={styles.flexWrapper}>
            <div className={styles.websiteLink}>
              <PrismicLink field={data.websiteLink}>
                Visit Website
                <ArrowTopRightOnSquareIcon />
              </PrismicLink>
            </div>
            <div className={styles.tags}>
              {data.tags.map(({ tag }, index) => (
                <div key={index} className={styles.tag}>
                  {tag}
                </div>
              ))}
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
  const caseStudies = await client.getAllByType("case-study")

  return {
    paths: caseStudies.map((doc) => prismicHelpers.asLink(doc, linkResolver)),
    fallback: false,
  }
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })
  const fetchLinks = ["author.name", "author.image", "author.location"]

  const caseStudy = await client.getByUID("case-study", params.uid, {
    fetchLinks,
  })
  const header = await client.getSingle("header")
  const footer = await client.getSingle("footer")
  const socials = await client.getSingle("socials")

  return {
    props: { header, footer, socials, ...caseStudy },
  }
}

export default CaseStudy
