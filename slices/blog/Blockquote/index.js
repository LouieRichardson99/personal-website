import { PrismicRichText } from "@prismicio/react"

const Blockquote = ({
  slice: {
    primary: { quote, author },
  },
}) => (
  <figure>
    <blockquote>
      <p>
        &quot;
        {quote}
        &quot;
      </p>
    </blockquote>
    <figcaption>
      <div>
        <span>-</span>
        <PrismicRichText field={author} />
      </div>
    </figcaption>
  </figure>
)

export default Blockquote
