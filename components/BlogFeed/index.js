import { Fragment } from "react"
import { BlogPostCard } from "../Card/BlogPost"
import styles from "./styles.module.scss"

export const BlogFeed = ({ posts }) => (
  <Fragment>
    {posts && (
      <ul className={`container ${styles.blogList}`}>
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
