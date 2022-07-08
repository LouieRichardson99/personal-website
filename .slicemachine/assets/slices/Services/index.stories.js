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
        {
          serviceIcon: {
            dimensions: { width: 100, height: 100 },
            alt: "Placeholder image",
            copyright: null,
            url: "https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?w=100&h=100&fit=crop",
          },
          serviceName: [
            { type: "heading3", text: "Enable dot-com interfaces", spans: [] },
          ],
          serviceDescription: [
            {
              type: "paragraph",
              text: "Mollit aliquip sit proident elit nulla velit in dolore ad aliquip do sunt culpa irure.",
              spans: [],
            },
          ],
        },
        {
          serviceIcon: {
            dimensions: { width: 100, height: 100 },
            alt: "Placeholder image",
            copyright: null,
            url: "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=100&h=100&fit=crop",
          },
          serviceName: [
            { type: "heading3", text: "Deploy impactful ROI", spans: [] },
          ],
          serviceDescription: [
            {
              type: "paragraph",
              text: "Est reprehenderit officia enim sint amet cupidatat ipsum irure consequat. Eiusmod in dolor ad nulla ea eu irure aute esse ad tempor reprehenderit est. Cupidatat officia velit officia ut aliqua veniam elit officia eiusmod dolore dolore.",
              spans: [],
            },
          ],
        },
        {
          serviceIcon: {
            dimensions: { width: 100, height: 100 },
            alt: "Placeholder image",
            copyright: null,
            url: "https://images.unsplash.com/photo-1607582278043-57198ac8da43?w=100&h=100&fit=crop",
          },
          serviceName: [
            { type: "heading3", text: "Evolve killer channels", spans: [] },
          ],
          serviceDescription: [
            {
              type: "paragraph",
              text: "Cupidatat consequat Lorem dolor pariatur ea cillum cillum minim cillum reprehenderit. Aute dolor ullamco irure fugiat reprehenderit aliqua commodo reprehenderit cupidatat.",
              spans: [],
            },
          ],
        },
        {
          serviceIcon: {
            dimensions: { width: 100, height: 100 },
            alt: "Placeholder image",
            copyright: null,
            url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=100&h=100&fit=crop",
          },
          serviceName: [
            {
              type: "heading3",
              text: "Utilize customized eyeballs",
              spans: [],
            },
          ],
          serviceDescription: [
            {
              type: "paragraph",
              text: "Ex est laborum consequat veniam eiusmod irure id duis sunt irure sit minim commodo enim.",
              spans: [],
            },
          ],
        },
        {
          serviceIcon: {
            dimensions: { width: 100, height: 100 },
            alt: "Placeholder image",
            copyright: null,
            url: "https://images.unsplash.com/photo-1494173853739-c21f58b16055?w=100&h=100&fit=crop",
          },
          serviceName: [
            { type: "heading3", text: "Visualize real-time models", spans: [] },
          ],
          serviceDescription: [
            {
              type: "paragraph",
              text: "Voluptate Lorem sit laborum.",
              spans: [],
            },
          ],
        },
      ],
      primary: {
        title: [
          {
            type: "heading2",
            text: "Innovate world-class web services",
            spans: [],
          },
        ],
        description: [
          {
            type: "paragraph",
            text: "Commodo pariatur aute proident consectetur mollit. Ex in do laborum ullamco magna ad culpa commodo officia reprehenderit.",
            spans: [],
          },
        ],
        image: {
          dimensions: { width: 900, height: 500 },
          alt: "Placeholder image",
          copyright: null,
          url: "https://images.unsplash.com/photo-1587905069134-008460d7a636?w=900&h=500&fit=crop",
        },
      },
      id: "_Default",
    }}
  />
)
_Default.storyName = "Default"
