const homepageQuery = `{
  homepage {
    ...homepageFields
    slices {
      ...on hero {
        variation {
          ...on default {
            primary {
              ...primaryFields
            }
            items {
              ...itemsFields
            }
          }
        }
      }
      ...on about {
        variation {
          ...on default {
            primary {
              ...primaryFields
            }
            items {
              ...itemsFields
            }
          }
        }
      }
      ...on services {
        variation {
          ...on default {
            primary {
              ...primaryFields
            }
            items {
              ...itemsFields
            }
          }
        }
      }
      ...on work {
        variation {
          ...on default {
            primary {
              title
            }
            items {
              caseStudy {
                ...on case-study {
                  title
                  image
                  description
                  websiteLink
                  tags
                }
              }
            }
          }
        }
      }
      ...on process {
        variation {
          ...on default {
            primary {
              ...primaryFields
            }
            items {
              ...itemsFields
            }
          }
        }
      }
      ...on call_to_action {
        variation {
          ...on default {
            primary {
              ...primaryFields
            }
            items {
              ...itemsFields
            }
          }
        }
      }
    }
  }
}`

export default homepageQuery
