import React, { useCallback, useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { container, main, content } from './index.module.css'
import Header from '../header'
import SideBar from '../sidebar'
import Footer from '../footer'
import Drawer from '../drawer'

const Layout = ({ pageTitle, children, ...rest }) => {
    const [visible, setVisible] = useState(false)
    const handleDrawerChange = useCallback((visible) => {
        setVisible(visible)
    }, [])


    return (
        <>
            <div className={container}>
                <Header onAction={handleDrawerChange} />
                <main className={main}>
                    <aside className="w-0 flex-initial h-full md:w-48">
                        <SideBar />
                    </aside>
                    <article className={content}>
                        {children}
                        <Footer />
                    </article>
                </main>
            </div>
            <Drawer visible={visible} onChange={handleDrawerChange}>
                <SideBar />
            </Drawer>
        </>
    )
}

export default Layout