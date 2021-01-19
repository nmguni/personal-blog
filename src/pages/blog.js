import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import blogList from "../styles/blogList.module.scss"
import BlogHeader from "../components/blogHeader"

import { BLogPostImages } from "../data/data"

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
      <div style={{ backgroundColor: "#F4F4F4" }}>
        <Layout location={this.props.location} title={siteTitle}>
          <SEO title="All posts" />
          <BlogHeader />
          <div className={blogList.blog__grid__container}>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <Link className={blogList.link} to={`blog${node.fields.slug}`}>
                  <div className={blogList.blog__item}>
                    <div key={node.fields.slug}>
                      <div className={blogList.blog__title}>{title}</div>
                      <small>{node.frontmatter.date}</small>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: node.frontmatter.description || node.excerpt,
                        }}
                      />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
          <Link to="/">
            <Button marginTop="85px">Home</Button>
          </Link>
        </Layout>
      </div>
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
