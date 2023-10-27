import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import { SEO } from '../../components/seo'
import { mdx } from "./index.module.css"

const BlogPost = (props) => {
  console.log('props-blog-post', props, mdx)
  const { children, data } = props
  const { frontmatter: { date, title, tag } } = data.mdx;
  return (
    <Layout >
      <div className={mdx}>
        <h1>{title} </h1>
        <h2 className="flex gap-2 items-center font-light my-4">
          <span className="text-sm">{date} </span>
          <span className="flex text-sm gap-1">
            {
              tag.map(item => {
                return (
                  <i
                    key={item}
                    className="bg-amber-600 px-2 rounded-md not-italic"
                  >
                    {item}
                  </i>
                )
              })
            }
          </span>
        </h2>
        {children}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MM-DD-YYYY")
        tag
      }
      excerpt
      tableOfContents
      body
    }
  }
`

export const Head = ({ data }) => <SEO title={data.mdx.frontmatter.title} />

export default BlogPost