import MyComponent from "../../../../slices/Process"

export default {
  title: "slices/Process",
}

export const _Default = () => (
  <MyComponent
    slice={{
      variation: "default",
      name: "Default",
      slice_type: "process",
      items: [
        {
          processNumber: "aggregate web-enabled action-items",
          processTitle: [
            {
              type: "heading3",
              text: "Maximize global deliverables",
              spans: [],
            },
          ],
          processDescription: [
            {
              type: "paragraph",
              text: "Ullamco mollit ad ea et velit nulla amet excepteur nisi non incididunt occaecat dolore quis. Eu adipisicing mollit sint et irure non cillum deserunt. Consectetur reprehenderit sunt tempor excepteur.",
              spans: [],
            },
          ],
        },
        {
          processNumber: "whiteboard visionary paradigms",
          processTitle: [
            {
              type: "heading3",
              text: "Enable cross-media supply-chains",
              spans: [],
            },
          ],
          processDescription: [
            {
              type: "paragraph",
              text: "Eiusmod irure proident deserunt pariatur nostrud eiusmod ad magna exercitation veniam nulla labore duis excepteur. Irure sit adipisicing ut aliquip qui nisi occaecat incididunt aute dolor mollit incididunt laboris.",
              spans: [],
            },
          ],
        },
        {
          processNumber: "redefine next-generation e-markets",
          processTitle: [
            {
              type: "heading3",
              text: "E-enable one-to-one applications",
              spans: [],
            },
          ],
          processDescription: [
            {
              type: "paragraph",
              text: "Quis velit qui deserunt dolor quis Lorem aute cupidatat qui ex. Magna ex cillum Lorem exercitation adipisicing. Est ea eiusmod occaecat laborum sunt.",
              spans: [],
            },
          ],
        },
        {
          processNumber: "benchmark 24/7 convergence",
          processTitle: [
            {
              type: "heading3",
              text: "Unleash bleeding-edge networks",
              spans: [],
            },
          ],
          processDescription: [
            {
              type: "paragraph",
              text: "Labore occaecat pariatur nostrud nulla est.",
              spans: [],
            },
          ],
        },
        {
          processNumber: "streamline interactive applications",
          processTitle: [
            {
              type: "heading3",
              text: "Reintermediate e-business action-items",
              spans: [],
            },
          ],
          processDescription: [
            {
              type: "paragraph",
              text: "Elit amet veniam id deserunt proident tempor nisi mollit. Elit nostrud elit enim est tempor Lorem reprehenderit eu.",
              spans: [],
            },
          ],
        },
      ],
      primary: {
        title: [
          {
            type: "heading2",
            text: "Strategize compelling synergies",
            spans: [],
          },
        ],
        description: [
          {
            type: "paragraph",
            text: "Adipisicing amet Lorem Lorem.",
            spans: [],
          },
        ],
      },
      id: "_Default",
    }}
  />
)
_Default.storyName = "Default"
