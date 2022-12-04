import { graphql, PageProps } from 'gatsby'
import React from 'react'

const BlogPage = ({data}: PageProps<Queries.BlogPostQueryQuery>) => {
  console.log(data)
  return (
    <div>blog</div>
  )
}

export const query = graphql`
  query BlogPostsQuery {
    allMdx {
      edges {
        node {
          frontmatter {
            slug
            title
            date
            featuredImage {
              childImageSharp {
                gatsbyImageData(width: 200, formats: [AUTO, WEBP, AVIF])
                resize(width: 200, height: 200) {
                  src
                  height
                  width
                }
              }
            }
          }
          id
          tableOfContents
        }
      }
    }
  }
`;

export default BlogPage