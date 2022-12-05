import { graphql, PageProps, Link, navigate } from "gatsby";
import React from "react";
import { Card, Col, Text, Row, Button, Grid } from "@nextui-org/react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const BlogPage = ({ data }: PageProps<Queries.BlogPostsQuery>) => {
  console.log(data);
  return (
    <Grid.Container css={{maxWidth: '90%', margin: '1rem auto'}}  >
      {data.allMdx.edges.map((post) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const featuredImage: IGatsbyImageData = getImage(
          post.node.frontmatter?.featuredImage?.childImageSharp
            ?.gatsbyImageData!
        );
        const FeaturedImage = styled(GatsbyImage)`
          filter: ${(props) =>
            props.theme.name == "dark" ? "invert(100%)" : "invert(0%)"};
          margin: 0.2rem;
        `;

        return (
          <Grid xs={12} sm={5}>
            <Card css={{ maxWidth: "300px" }} key={post.node.id}>
              <Card.Header css={{ position: "absolute", zIndex: 1, top: 5, textAlign: 'center' }}>
                <Col>
                  <Text h3 color="primary">
                    {post.node.frontmatter?.title}
                  </Text>
                </Col>
              </Card.Header>

              <Card.Body css={{ p: 0 }}>
                <FeaturedImage alt="featuredImage" image={featuredImage} />
              </Card.Body>

              <Card.Footer
                isBlurred
                css={{
                  position: "absolute",
                  bgBlur: "#ffffff66",
                  background: "#ffffff00",
                  borderTop:
                    "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                  bottom: 0,
                  zIndex: 1,
                }}
              >
                <Row>
                  <Col>
                    <Text color="#000" size={8}>
                      {post.node.excerpt}
                    </Text>
                  </Col>
                  <Col>
                    <Row justify="flex-end">
                      <Button onClick={() => navigate(post.node.frontmatter?.slug!)} flat auto rounded color="secondary">
                        <Text
                          css={{ color: "inherit" }}
                          size={12}
                          weight="bold"
                          transform="uppercase"
                        >
                          Read
                        </Text>
                      </Button>
                    </Row>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        );
      })}
    </Grid.Container>
  );
};

export const query = graphql`
  query BlogPosts {
    allMdx {
      edges {
        node {
          frontmatter {
            slug
            title
            date
            featuredImage {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
                resize(width: 200, height: 200) {
                  src
                  height
                  width
                }
              }
            }
          }
          id
          excerpt
          tableOfContents
        }
      }
    }
  }
`;

export default BlogPage;
