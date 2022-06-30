import { Fragment } from "react"
import { BlogPostCard } from "../Card/BlogPost"

export const BlogFeed = ({ posts }) => (
  <Fragment>
    {posts && (
      <ul>
        {posts.map((post, index) => (
          <BlogPostCard
            key={index}
            title={post.data?.title}
            description={post.data?.description}
            image={post.data?.image}
            date={post?.first_publication_date}
            link={post}
          />
        ))}
      </ul>
    )}
  </Fragment>
)
