import MyComponent from "../../../../slices/Work"

export default {
  title: "slices/Work",
}

export const _Default = () => (
  <MyComponent
    slice={{
      variation: "default",
      name: "Default",
      slice_type: "work",
      items: [],
      primary: {
        title: [
          { type: "heading2", text: "Matrix global paradigms", spans: [] },
        ],
      },
      id: "_Default",
    }}
  />
)
_Default.storyName = "Default"
