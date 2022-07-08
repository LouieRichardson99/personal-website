import MyComponent from "../../../../slices/About"

export default {
  title: "slices/About",
}

export const _Default = () => (
  <MyComponent
    slice={{
      variation: "default",
      name: "Default",
      slice_type: "about",
      items: [
        {
          socialLink: { link_type: "Web", url: "http://google.com" },
          socialIcon: {
            dimensions: { width: 900, height: 500 },
            alt: "Placeholder image",
            copyright: null,
            url: "https://images.unsplash.com/photo-1571126770897-2d612d1f7b89?w=900&h=500&fit=crop",
          },
        },
        {
          socialLink: { link_type: "Web", url: "http://twitter.com" },
          socialIcon: {
            dimensions: { width: 900, height: 500 },
            alt: "Placeholder image",
            copyright: null,
            url: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=900&h=500&fit=crop",
          },
        },
        {
          socialLink: { link_type: "Web", url: "http://twitter.com" },
          socialIcon: {
            dimensions: { width: 900, height: 500 },
            alt: "Placeholder image",
            copyright: null,
            url: "https://images.unsplash.com/photo-1606248897732-2c5ffe759c04?w=900&h=500&fit=crop",
          },
        },
      ],
      primary: {
        title: [
          {
            type: "heading2",
            text: "Benchmark intuitive e-services",
            spans: [],
          },
        ],
        subtitle: [
          {
            type: "paragraph",
            text: "Velit sint mollit consequat cupidatat nisi sunt enim. Consectetur quis eiusmod do commodo.",
            spans: [],
          },
        ],
        description: [
          {
            type: "paragraph",
            text: "Eu sint in deserunt nostrud tempor veniam. Aliqua adipisicing velit qui irure mollit mollit et elit est occaecat qui deserunt officia eu. Veniam aute commodo ex Lorem aute.",
            spans: [],
          },
        ],
        buttonText: "target next-generation relationships",
        buttonLink: { link_type: "Web", url: "https://prismic.io" },
        buttonIcon: {
          dimensions: { width: 900, height: 500 },
          alt: "Placeholder image",
          copyright: null,
          url: "https://images.unsplash.com/photo-1596195689404-24d8a8d1c6ea?w=900&h=500&fit=crop",
        },
        image: {
          dimensions: { width: 900, height: 500 },
          alt: "Placeholder image",
          copyright: null,
          url: "https://images.unsplash.com/photo-1607582278038-6bebbd4d7b72?w=900&h=500&fit=crop",
        },
      },
      id: "_Default",
    }}
  />
)
_Default.storyName = "Default"
