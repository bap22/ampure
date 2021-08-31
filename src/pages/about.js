import React from 'react';
import { Container, ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import WorkFlow from 'sections/workflow';
import SectionHeader from 'components/section-header';
import Package from 'sections/package';
import Faq from 'sections/faq';

// data
// import { getPage } from '../lib/api';

// const AboutPage = ({ bannerData }) => {
const AboutPage = () => {
    return (
        <ThemeProvider theme={theme}>
            <StickyProvider>
                <Layout>
                    <SEO title="About Ampure" />
                    <WorkFlow />
                    <Container
                        style={{ margin: '50px auto', padding: '24px;' }}
                    >
                        <SectionHeader
                            slogan="Who we are"
                            title="Not your typical SEO Agency"
                        />
                        Ampure was founded by a passionate group of marketers
                        and developers who knew that they could make a
                        meaningful impact on small and medium-sized businesses.
                        The various backgrounds in marketing, SEO, frontend
                        development, backend development, analytics, and
                        entrepreneurship meshed perfectly to build an agency
                        dedicated to providing better results. Located out of
                        the heart of Silicon Slopes in Utah, Ampure is excited
                        to help any business who serves their local community
                        build a better website, bring in new customers and
                        provide the most straight-forward analytics so
                        businesses can focus on what they do best and let us
                        drive in new business.
                    </Container>
                </Layout>
            </StickyProvider>
        </ThemeProvider>
    );
};

export default AboutPage;

// export const getStaticProps = async () => {
//     const data = await getPage('homepage-banner');

//     console.warn(data);
//     return {
//         props: {
//             bannerData: data?.page ? data.page : {},
//         },
//     };
// };
