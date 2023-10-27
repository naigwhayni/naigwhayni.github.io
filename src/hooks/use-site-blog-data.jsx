import { graphql, useStaticQuery } from "gatsby";

export const useSiteBlogData = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { frontmatter: { date: DESC } }) {
        nodes {
          frontmatter {
            title
            date(formatString: "MM-DD-YYYY")
            slug
            tag
            category
            isDraft
          }
          id
          body
          excerpt
        }
      }
    }
  `);
  const dataWithoutDraft = data.allMdx.nodes.filter(
    ({ frontmatter }) => !frontmatter.isDraft
  );
  return dataWithoutDraft;
};
