import MyComponent from "../../../../slices/Slice"

export default {
  title: "slices/Slice",
}

export const _Default = () => (
  <MyComponent
    slice={{
      variation: "default",
      name: "Default",
      slice_type: "slice",
      items: [],
      primary: {
        title: [
          {
            type: "heading1",
            text: "Incubate wireless functionalities",
            spans: [],
          },
        ],
        description: [
          {
            type: "paragraph",
            text: "Fugiat ex incididunt fugiat elit nisi. Irure esse nisi do.",
            spans: [],
          },
        ],
      },
      id: "_Default",
    }}
  />
)
_Default.storyName = "Default"
