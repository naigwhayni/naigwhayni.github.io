import * as React from "react"
import { graphql, Link } from "gatsby"
import { RxCalendar } from "react-icons/rx"
import { item } from "./index.module.css"

const Summary = ({ data }) => {
    return (
        <div className={'p-8'} >
            {data.map(node => (
                <div className={item} key={node.id}>
                    <Link to={`/blog/${node.frontmatter.slug}`}>
                        <h1 className="text-lg py-2">
                            <span className="hover:cursor-pointer hover:text-orange-400">
                                {node.frontmatter.title}
                            </span>
                        </h1>
                    </Link>
                    <h2 className="my-2 flex items-center gap-2 text-sm">
                        <RxCalendar />
                        {node.frontmatter.date}
                    </h2>
                    <p className="text-sm font-medium py-2 text-slate-800 leading-loose">
                        {node.excerpt}
                    </p>
                    <Link to={`/blog/${node.frontmatter.slug}`}>
                        <span className="text-lg py-4 hover:cursor-pointer hover:underline ">
                            阅读全文...
                        </span>
                    </Link>
                </div>
            )
            )}
        </div>
    )
}

export default Summary
