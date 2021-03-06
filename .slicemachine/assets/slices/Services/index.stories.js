import MyComponent from "../../../../slices/Services"

export default {
  title: "slices/Services",
}

export const _Default = () => (
  <MyComponent
    slice={{
      variation: "default",
      name: "Default",
      slice_type: "services",
      items: [
        { service: { link_type: "Web", url: "https://slicemachine.dev" } },
        { service: { link_type: "Web", url: "https://prismic.io" } },
      ],
      primary: {
        title: [
          {
            type: "heading2",
            text: "Reintermediate sticky bandwidth",
            spans: [],
          },
        ],
        description: [
          {
            type: "paragraph",
            text: "Aliqua amet occaecat laborum nulla est magna dolor nostrud Lorem voluptate quis sit velit. Culpa est fugiat id ullamco quis minim incididunt Lorem occaecat nostrud. Esse eiusmod esse aute est culpa aliquip commodo excepteur nisi ea nostrud.",
            spans: [],
          },
        ],
        image: {
          dimensions: { width: 900, height: 500 },
          alt: "Placeholder image",
          copyright: null,
          url: "https://images.unsplash.com/photo-1606248897732-2c5ffe759c04?w=900&h=500&fit=crop",
        },
      },
      id: "_Default",
    }}
  />
)
_Default.storyName = "Default"
