import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import BannerPlaceholder from 'sections/banner-placeholder';
import Feature from 'sections/feature';
import SecurePayment from 'sections/secure-payment';

// data
// import { getPage } from '../lib/api';

const Websites = () => {
    return (
        <ThemeProvider theme={theme}>
            <StickyProvider>
                <Layout>
                    <SEO title="Ampure. Pure SEO for Dental Practices" />
                    <BannerPlaceholder />
                    <Feature />

                    <SecurePayment />
                </Layout>
            </StickyProvider>
        </ThemeProvider>
    );
};

export default Websites;

// export const getStaticProps = async () => {
//     const data = await getPage('homepage');

//     console.warn(data);
//     return {
//         props: {
//             bannerData: data?.page ? data.page : {},
//         },
//     };
// };
