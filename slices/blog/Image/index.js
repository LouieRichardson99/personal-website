import { PrismicImage, PrismicRichText } from "@prismicio/react"

const Image = ({
  slice: {
    primary: { image, imageAttribute },
  },
}) => (
  <div>
    <PrismicImage field={image} />
    <div>
      <p>Image courtesy of </p>
      <PrismicRichText field={imageAttribute} />
    </div>
  </div>
)

export default Image
