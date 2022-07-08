import MyComponent from "../../../../../slices/blog/Blockquote"

export default {
  title: "slices/blog/Blockquote",
}

export const _Default = () => (
  <MyComponent
    slice={{
      variation: "default",
      name: "Default",
      slice_type: "blockquote",
      items: [],
      primary: {
        quote: "facilitate robust functionalities",
        author: [
          {
            type: "paragraph",
            text: "Labore sunt et enim culpa officia magna eu ex. Exercitation amet tempor eu occaecat laborum culpa est elit dolor esse eu aliqua. Sint eu culpa ex laborum.",
            spans: [],
          },
        ],
      },
      id: "_Default",
    }}
  />
)
_Default.storyName = "Default"
