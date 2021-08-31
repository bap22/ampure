import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import WorkFlow from 'sections/workflow';
import Package from 'sections/package';
import Faq from 'sections/faq';

// data
// import { getPage } from '../lib/api';

const AboutPage = ({ bannerData }) => {
    return (
        <ThemeProvider theme={theme}>
            <StickyProvider>
                <Layout>
                    <SEO title="About Ampure" />
                    <WorkFlow />
                    <Package />
                    <Faq />
                </Layout>
            </StickyProvider>
        </ThemeProvider>
    );
};

export default AboutPage;

export const getStaticProps = async () => {
    // const data = await getPage('homepage-banner');
    // console.warn(data);
    // return {
    //     props: {
    //         bannerData: data?.page ? data.page : {},
    //     },
    // };
};
