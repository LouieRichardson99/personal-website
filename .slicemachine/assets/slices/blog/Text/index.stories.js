import MyComponent from "../../../../../slices/blog/Text"

export default {
  title: "slices/blog/Text",
}

export const _Default = () => (
  <MyComponent
    slice={{
      variation: "default",
      name: "Default",
      slice_type: "text",
      items: [],
      primary: {
        richText: [
          {
            type: "paragraph",
            text: "Qui et culpa veniam dolore ipsum exercitation id laborum.",
            spans: [],
          },
        ],
      },
      id: "_Default",
    }}
  />
)
_Default.storyName = "Default"
