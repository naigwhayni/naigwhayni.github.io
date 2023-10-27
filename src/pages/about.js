import * as React from "react";
import Layout from "../components/layout";
import { SEO } from "../components/seo";

const Me = (props) => {
    return (
        <Layout>
            <article className="text-lg text-center p-8">我也不知道我是谁。。。</article>
        </Layout>
    )
}

export default Me;

export const Head = () => <SEO title="关于" />