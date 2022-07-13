import MyComponent from "../../../../../slices/blog/Image"

export default {
  title: "slices/blog/Image",
}

export const _Default = () => (
  <MyComponent
    slice={{
      variation: "default",
      name: "Default",
      slice_type: "image",
      items: [],
      primary: {
        image: {
          dimensions: { width: 900, height: 500 },
          alt: "Placeholder image",
          copyright: null,
          url: "https://images.unsplash.com/photo-1587840171670-8b850147754e?w=900&h=500&fit=crop",
        },
        imageAttribute: [
          {
            type: "paragraph",
            text: "Elit exercitation duis nulla fugiat eiusmod aliqua enim reprehenderit.",
            spans: [],
          },
        ],
        imageCaption: [
          {
            type: "paragraph",
            text: "Lorem consequat voluptate commodo cillum. Irure ullamco dolor ex.",
            spans: [],
          },
        ],
      },
      id: "_Default",
    }}
  />
)
_Default.storyName = "Default"
