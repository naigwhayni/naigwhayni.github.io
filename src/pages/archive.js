import React, { useMemo, useState } from "react";
import Layout from "../components/layout";
import { SEO } from "../components/seo";
import Summary from "../components/summary";
import { useSiteBlogData } from "../hooks/use-site-blog-data";
import { RxBookmark, RxCalendar } from "react-icons/rx";
import { Link } from "gatsby"

const tagStyle = "px-2 py-1 md:hover:cursor-pointer rounded-md text-sm md:hover:text-orange-400"

const Archive = (props) => {
    const data = useSiteBlogData()
    const [selected, setSelected] = useState(null)
    const tags = useMemo(() => data.reduce((acc, cur) => {
        cur.frontmatter?.tag?.forEach(tag => {
            if (acc[tag]) {
                acc[tag].count += 1
            } else {
                acc[tag] = { count: 1 }
            }
        })
        return acc
    }, {}), [data])
    const handleTagClick = (tag) => () => {
        const newTag = selected === tag ? null : tag
        setSelected(newTag)
    }
    return (
        <Layout>
            <div className="p-8">
                <h1 className="text-xl text-bold flex items-center gap-2 my-4">
                    <RxBookmark />标签
                </h1>
                <nav className="flex gap-4 p-4 flex-wrap">
                    {Object.keys(tags)
                        .map(item => {
                            const selectedStyle =
                                item === selected ? "bg-orange-200" : "bg-red-50"
                            return (
                                <button
                                    key={item}
                                    onClick={handleTagClick(item)}
                                    className={tagStyle + " " + selectedStyle}
                                >
                                    {`${item} (${tags[item].count})`}
                                </button>
                            )
                        })}
                </nav>
                <div className="py-6">
                    {data
                        .filter(item => selected
                            ? item.frontmatter.tag.includes(selected)
                            : true
                        )
                        .map((item, index) => {
                            return (
                                <p key={index} className="flex items-center gap-4 py-2 text-sm" >
                                    <RxCalendar />
                                    <span>{item.frontmatter.date} </span>
                                    <Link
                                        className="text-orange-400 hover:cursor-pointer hover:underline"
                                        to={`/blog/${item.frontmatter.slug}`}
                                    >
                                        {item.frontmatter.category + ' > ' + item.frontmatter.title}
                                    </Link>
                                </p>
                            )
                        })}
                </div>
            </div>
        </Layout>
    )
}
export default Archive;

export const Head = () => <SEO title="Archive" />