import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import BannerPlaceholder from 'sections/banner-placeholder';
import PartnerSection from 'sections/partner';

// data
// import { getPage } from '../lib/api';

const MorePatients = () => {
    return (
        <ThemeProvider theme={theme}>
            <StickyProvider>
                <Layout>
                    <SEO title="Ampure. Pure SEO for Dental Practices" />
                    <BannerPlaceholder />
                    <PartnerSection />
                </Layout>
            </StickyProvider>
        </ThemeProvider>
    );
};

export default MorePatients;

// export const getStaticProps = async () => {
//     const data = await getPage('analytics');

//     console.warn(data);
//     return {
//         props: {
//             bannerData: data?.page ? data.page : {},
//         },
//     };
// };
