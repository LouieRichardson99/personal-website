import { SliceZone } from "@prismicio/react"
import { createClient } from "../prismicio"
import { Layout } from "../components/Layout"
import { components, Work } from "../slices"

const Homepage = ({ data, url, lang, caseStudies, ...layout }) => {
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
      <SliceZone
        slices={data?.slices}
        components={{
          ...components,
          work: (props) => <Work caseStudies={caseStudies} {...props} />,
        }}
      />
    </Layout>
  )
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const fetchLinks = [
    "faq.question",
    "faq.answer",
    "service.title",
    "service.description",
    "service.icon",
  ]

  const page = await client.getSingle("homepage", { fetchLinks })
  const header = await client.getSingle("header")
  const footer = await client.getSingle("footer")
  const socials = await client.getSingle("socials")

  // Fetch all case-study custom type for "Work" slice
  const caseStudies = await client.getAllByType("case-study")

  return {
    props: { header, footer, socials, caseStudies, ...page },
  }
}

export default Homepage
