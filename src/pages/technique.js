import React, { useMemo } from 'react';
import Layout from '../components/layout';
import { SEO } from '../components/seo';
import Summary from '../components/summary';
import { useSiteBlogData } from '../hooks/use-site-blog-data';

const Technique = (props) => {
    const data = useSiteBlogData()
    const techniqueData = useMemo(() => data.filter(item => item.frontmatter?.category === "技术"), [data])
    return (
        <Layout>
            <Summary data={techniqueData} />
        </Layout>
    )
}

export default Technique;

export const Head = () => <SEO title="Technique" />