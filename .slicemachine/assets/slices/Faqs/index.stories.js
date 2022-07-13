import MyComponent from "../../../../slices/Faqs"

export default {
  title: "slices/Faqs",
}

export const _Default = () => (
  <MyComponent
    slice={{
      variation: "default",
      name: "Default",
      slice_type: "faqs",
      items: [
        { faq: { link_type: "Web", url: "http://google.com" } },
        { faq: { link_type: "Web", url: "https://slicemachine.dev" } },
        { faq: { link_type: "Web", url: "http://google.com" } },
        { faq: { link_type: "Web", url: "http://twitter.com" } },
        { faq: { link_type: "Web", url: "https://slicemachine.dev" } },
        { faq: { link_type: "Web", url: "http://twitter.com" } },
      ],
      primary: {
        title: [
          { type: "heading2", text: "Iterate e-business systems", spans: [] },
        ],
        description: [
          {
            type: "paragraph",
            text: "Ullamco nostrud elit adipisicing esse ipsum consequat est ea proident non. Laboris ea est proident ea velit consectetur adipisicing laboris et culpa officia dolore consectetur est. Cupidatat laborum ex non occaecat proident cupidatat nisi sunt magna Lorem nulla.",
            spans: [],
          },
        ],
      },
      id: "_Default",
    }}
  />
)
_Default.storyName = "Default"