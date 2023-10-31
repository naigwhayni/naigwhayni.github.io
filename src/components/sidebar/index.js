import * as React from 'react'
import { container, listItem } from './index.module.css'
import { StaticImage } from "gatsby-plugin-image"
import { RxPerson, RxFileText, RxMoon, RxArchive } from "react-icons/rx";
import { Link } from "gatsby"

const mockListData = [
    {
        description: '技术',
        icon: RxFileText,
        path: '/technique',
    },
    {
        description: '生活',
        icon: RxMoon,
        path: '/life',
    },
    {
        description: '归档',
        icon: RxArchive,
        path: '/archive',
    },
    {
        description: '关于',
        icon: RxPerson,
        path: '/about',
    },
]
const SideBar = (props) => {
    return (
        <div className={'md:w-48 lg:p-12 md:p-8 overflow-hidden'}>
            <Link to="/">
                <div className={'mb-8 hover:cursor-pointer shadow-sm'}>
                    <StaticImage
                        src={'../../images/mimi.jpg'}
                        alt="#"
                        className={'w-0 rounded-full md:w-24'}
                    />
                    <span className="block p-4 text-lg md:text-sm">何以解忧</span>
                </div>
            </Link>
            <div className={'flex flex-col gap-4'}>
                {
                    mockListData.map(item => {
                        const Icon = item.icon
                        return (
                            <Link
                                to={item.path}
                                key={item.path}
                                activeClassName="text-orange-400"
                            >
                                <div className={listItem}>
                                    <Icon />
                                    <span>{item.description}</span>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SideBar