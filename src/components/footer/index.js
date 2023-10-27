import * as React from 'react'
import { Link } from 'gatsby'
import { footer, footerContent } from './index.module.css'

const Footer = (props) => {
    return (
        <footer className={footer}>
            <div className={footerContent}>
                <Link to="/about" className="text-orange-400">何以解忧</Link>
                <span>
                    •&nbsp;&nbsp;Built With&nbsp;
                    <a
                        href="https://www.gatsbyjs.com"
                        target="_blank"
                        rel="no referer"
                        className={'text-orange-400'}
                    >
                        Gatsby
                    </a>
                </span>
            </div>
            <div className="text-center md:p-1 text-xs">　备案中...</div>
        </footer>
    )
}

export default Footer