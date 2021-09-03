import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import KeyFeature from 'sections/key-feature';
import CoreFeature from 'sections/core-feature';
import Feature from 'sections/feature';
import PartnerSection from 'sections/partner';
import TestimonialCard from 'sections/testimonial';
import SecurePayment from 'sections/secure-payment';

// data
import { getPage } from '../lib/api';

const IndexPage = ({ bannerData }) => {
    console.warn(bannerData);
    return (
        <ThemeProvider theme={theme}>
            <StickyProvider>
                <Layout>
                    <SEO title="Ampure. Pure SEO for Dental Practices" />
                    <Banner
                        h1={bannerData?.customFields?.h1}
                        content={bannerData?.customFields?.headerContent}
                    />
                    <KeyFeature
                        content={bannerData?.customFields?.keyFeatures}
                    />
                    <CoreFeature />
                    <TestimonialCard />
                </Layout>
            </StickyProvider>
        </ThemeProvider>
    );
};

export default IndexPage;

export const getStaticProps = async () => {
    const data = await getPage('homepage');

    console.warn(data);
    return {
        props: {
            bannerData: data?.page ? data.page : {},
        },
    };
};
