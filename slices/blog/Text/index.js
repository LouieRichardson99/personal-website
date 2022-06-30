import { PrismicRichText } from "@prismicio/react"

const Text = ({
  slice: {
    primary: { richText },
  },
}) => <PrismicRichText field={richText} />

export default Text
