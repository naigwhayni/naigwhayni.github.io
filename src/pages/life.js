import React, { useMemo } from 'react';
import Layout from '../components/layout';
import { SEO } from '../components/seo';
import Summary from '../components/summary';
import { useSiteBlogData } from '../hooks/use-site-blog-data';

const Life = () => {
    const data = useSiteBlogData()
    const lifeData = useMemo(() => data.filter(item => item.frontmatter?.category === "生活"), [data])
    return (
        <Layout>
            <Summary data={lifeData} />
        </Layout>
    )
}
export default Life;


export const Head = () => <SEO title="Life" />