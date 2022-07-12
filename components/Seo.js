import Head from "next/head"

export const Seo = ({
  metaTitle,
  metaDescription,
  metaImage,
  structuredData,
  url,
  article,
  author,
  lang,
}) => {
  const absoluteUrl = `https://louierichardson.com/${url ? url : ""}`

  const addJSONLd = (structuredData) => {
    return {
      __html: `${structuredData}`,
    }
  }

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta lang={lang} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {metaDescription && <meta name="description" content={metaDescription} />}
      <meta name="og:title" content={metaTitle} />
      {metaDescription && (
        <meta name="og:description" content={metaDescription} />
      )}
      <meta name="og:type" content={article ? "article" : "website"} />
      {metaImage && <meta name="og:image" content={metaImage.url} />}
      {metaImage && <meta name="og:image:alt" content={metaTitle} />}
      <meta name="og:url" content={absoluteUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      {author && <meta name="twitter:creator" content={author} />}
      <meta name="twitter:title" content={metaTitle} />
      {metaDescription && (
        <meta name="twitter:description" content={metaDescription} />
      )}
      {metaImage && <meta name="twitter:image" content={metaImage.url} />}
      {metaImage && <meta name="twitter:image:alt" content={metaTitle} />}
      <link rel="icon" href="/favicon.png" />
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addJSONLd(structuredData)}
        />
      )}
    </Head>
  )
}
