import {
  PrismicImage,
  PrismicLink,
  PrismicRichText,
  PrismicText,
} from "@prismicio/react"
import { format } from "date-fns"
import { ArrowNarrowRightIcon } from "@heroicons/react/outline"

export const BlogPostCard = ({ image, title, date, description, link }) => {
  const publishDate = format(new Date(date), "do MMMM y")

  return (
    <li>
      <PrismicLink document={link}>
        <PrismicImage field={image} />
        <div>
          <h3>
            <PrismicText field={title} />
          </h3>
          <p>{publishDate}</p>
          <PrismicRichText field={description} />
          <p>{/* Read post <ArrowNarrowRightIcon /> */}</p>
        </div>
      </PrismicLink>
    </li>
  )
}
