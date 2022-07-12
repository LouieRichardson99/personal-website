import { Fragment } from "react"
import { NextSeo, ArticleJsonLd } from "next-seo"

export const Seo = ({
  metaTitle,
  metaDescription,
  metaImage,
  structuredData,
  url,
  article,
}) => {
  const absoluteUrl = `https://louierichardson.com${url ? url : ""}`

  const seoConfig = {
    title: metaTitle,
    description: metaDescription,
    openGraph: {
      url: absoluteUrl,
      title: metaTitle,
      description: metaDescription,
      images: [
        {
          url: metaImage?.url || "",
          alt: metaImage?.url || "",
          width: metaImage?.dimensions?.width || "",
          height: metaImage?.dimensions?.height || "",
        },
      ],
      site_name: "Louie Richardson",
    },
    twitter: {
      handle: "@louie_rich99",
      site: "@louie_rich99",
      cardType: "summary_large_image",
    },
    additionalLinkTags: [{ rel: "icon", href: "/favicon.png" }],
  }

  if (article) {
    return (
      <Fragment>
        <NextSeo {...seoConfig} />
        <ArticleJsonLd
          url={absoluteUrl}
          title={metaTitle}
          description={metaDescription}
          images={[metaImage.url]}
          datePublished={structuredData.datePublished}
          dateModified={structuredData.dateModified}
          authorName={[structuredData.author]}
          publisherName="Louie Richardson"
          publisherLogo="https://images.prismic.io/louie/47c9c764-8a01-4515-a68c-a00fc91a1dee_holiday-selie.png?auto=compress%2Cformat&fit=max&w=640"
        />
      </Fragment>
    )
  }

  return <NextSeo {...seoConfig} />
}
