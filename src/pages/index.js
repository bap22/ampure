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
import WorkFlow from 'sections/workflow';
import TestimonialCard from 'sections/testimonial';
import SecurePayment from 'sections/secure-payment';
import Package from 'sections/package';
import Faq from 'sections/faq';

// data
import { getPage } from '../lib/api';

const IndexPage = ({ bannerData }) => {
    return (
        <ThemeProvider theme={theme}>
            <StickyProvider>
                <Layout>
                    <SEO title="Ampure. Pure SEO for Dental Practices" />
                    <Banner content={bannerData} />
                    <KeyFeature />
                    <CoreFeature />
                    <Feature />
                    <PartnerSection />
                    <TestimonialCard />
                    <SecurePayment />
                </Layout>
            </StickyProvider>
        </ThemeProvider>
    );
};

export default IndexPage;

export const getStaticProps = async () => {
    const data = await getPage('homepage-banner');

    // console.warn(data);
    return {
        props: {
            bannerData: data?.page ? data.page : {},
        },
    };
};
