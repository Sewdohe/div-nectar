import React, { ReactNode } from "react";
import { graphql, PageProps } from "gatsby";
import {
  GatsbyImage,
  getImage,
  IGatsbyImageData,
} from "gatsby-plugin-image";

import styled from "styled-components";
import PostLayout from "../../components/layouts/PostLayout";

interface BPostQueryPusChildren extends Queries.BlogPostQuery {
  children: ReactNode[]
}

const PostTemplate = ({mdx, children}: BPostQueryPusChildren,) => {
  const frontmatter = mdx?.frontmatter;
  const toc = mdx?.tableOfContents;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const featuredImage: IGatsbyImageData = getImage(
    frontmatter?.featuredImage?.childImageSharp?.gatsbyImageData!
  );

  const FeaturedImage = styled(GatsbyImage)`
    filter: ${(props) =>
      props.theme.name == "dark" ? "invert(100%)" : "invert(0%)"};
    margin: 1rem;
  `;

  const seoImage = frontmatter?.featuredImage
    ? frontmatter?.featuredImage?.childImageSharp?.resize
    : null;

  return (
    <PostLayout>
      <div>
        <FeaturedImage
          style={{ marginTop: "2rem", marginLeft: "1rem" }}
          alt="featuredImage"
          image={featuredImage}
        />
      </div>
        {children}
    </PostLayout>
  )
}

export const query = graphql`
  query BlogPost($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
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
`;

export default PostTemplate;
