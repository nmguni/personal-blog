import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

import {
  BlogContainer,
  BlogTitle,
  BlogDec,
  BlogDate,
  Difficulty,
  BlogWrapper,
} from "../elements"
import { Header } from "../components/Header"

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges
    const localSearchBlog = data.localSearchBlog

    const title = "blog"
    const subHeader =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore "

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Header subHeader={subHeader} title={title} />
        <BlogWrapper>
          {" "}
          <SEO title="All posts" />
          <>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <BlogContainer key={node.fields.slug}>
                  <Link
                    style={{
                      boxShadow: `none`,
                    }}
                    to={`/blog${node.fields.slug}`}
                  >
                    <BlogTitle>{title}</BlogTitle>
                  </Link>
                  <div style={{ display: "flex" }}>
                    <BlogDec
                      dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description || node.excerpt,
                      }}
                    />
                    <Difficulty>easy</Difficulty>
                  </div>
                  <BlogDate>{node.frontmatter.date}</BlogDate>
                </BlogContainer>
              )
            })}
          </>
        </BlogWrapper>
      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
