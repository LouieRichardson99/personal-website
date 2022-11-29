import * as prismic from "@prismicio/client"
import { enableAutoPreviews } from "@prismicio/next"
import sm from "./sm.json"

export const endpoint = sm.apiEndpoint
export const repositoryName = prismic.getRepositoryName(endpoint)

export function linkResolver(doc) {
  switch (doc.type) {
    case "homepage":
      return "/"
    case "page":
      return `/${doc.uid}`
    case "contact":
      return "/contact"
    case "blog":
      return "/blog"
    case "blog-post":
      return `/blog/${doc.uid}`
    case "case-studies":
      return "/case-studies"
    case "case-study":
      return `/case-studies/${doc.uid}`
    case "services":
      return `/services`
    case "service":
      return `/services/${doc.uid}`
    case "notes":
      return `/notes`
    case "note":
      return `/notes/${doc.uid}`
    default:
      return null
  }
}

export function createClient(config = {}) {
  const client = prismic.createClient(endpoint, {
    ...config,
  })

  enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  })

  return client
}
