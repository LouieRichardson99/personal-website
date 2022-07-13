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
            text: "Qui amet aliqua voluptate ullamco ad incididunt nisi velit reprehenderit deserunt. Non fugiat amet velit proident ad aliqua. Mollit ullamco ullamco qui irure sunt do ad Lorem adipisicing mollit qui minim.",
            spans: [],
          },
        ],
      },
      id: "_Default",
    }}
  />
)
_Default.storyName = "Default"
