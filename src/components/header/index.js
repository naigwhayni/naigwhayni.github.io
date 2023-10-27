import * as React from 'react'

// Step 1: Import the useStaticQuery hook and graphql tag
import { useStaticQuery, graphql, Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { header } from './index.module.css'
import { RxHamburgerMenu } from "react-icons/rx"

const Header = ({ onAction }) => {
  /* Step 2: Use the useStaticQuery hook and
    graphql tag to query for data
    (The query gets run at build time) */
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const showSideBar = () => {
    console.log('showSideBar')
    onAction(true)
  }
  return (
    <header className={header} >
      <StaticImage
        src={'../../images/leaf.jpg'}
        alt="banner"
        layout='fullWidth'
        // aspectRatio={9 / 1}
        // height={32}
        className={"h-0 md:h-32"}
      />
      <div className="flex gap-4 items-center h-full p-2">
        <RxHamburgerMenu className="text-2xl" onClick={showSideBar} />
        <Link to="/">
          <span>何以解忧</span>
        </Link>
      </div>
    </header>
  )
}

export default Header