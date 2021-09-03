/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';

// const data = [
//     {
//         id: 1,
//         imgSrc: '/assets/key-feature/vector.svg',
//         altText: 'Website',
//         title: 'Build your website',
//         text: 'Work with our talented team to build a dental website that is perfectly optimized towards building your Google presence in a way that will actually bring in new patients. You don’t have to know about things like Schema markup, silos, or keyword density - we take care of all that for you. You own your site. We will help you build it, but should you ever choose to leave our services, your site is entirely yours and built with the newest and most widely used technologies available.',
//     },
//     {
//         id: 2,
//         imgSrc: '/assets/key-feature/editing.svg',
//         altText: 'Patients',
//         title: 'Get more patients',
//         text: 'Our proprietary marketing tools and services are built to handle your most important online efforts so more people in your geographic area start finding your business. Not only will you start getting more Google Reviews, but our service also ensures you’ll get the best ranking benefits from each and every one  - more so than any other service we’ve ever seen. We also manage your ongoing SEO keyword efforts to make sure each of your services ranks when people in your community are looking for the specific dental solutions you provide (i.e. teeth cleaning in Portland Oregon).',
//     },
//     {
//         id: 3,
//         imgSrc: '/assets/key-feature/speed.svg',
//         altText: 'Results',
//         title: 'Measure your results',
//         text: 'See all of your website data and rankings in a simple dashboard so you don’t have to learn complex analytics tools and manage dozens of spreadsheets. Our dashboard highlights important data while surfacing actionable opportunities. Our dashboard and reporting are growing all the time, so you get more and more insights and visibility into your marketing efforts.',
//     },
// ];

export default function KeyFeature(props) {
    return (
        <section sx={{ variant: 'section.keyFeature' }} id="feature">
            <Container>
                <SectionHeader
                    slogan="Marketing with Results"
                    title="What we will do for your Dental Practice"
                />

                <Grid sx={styles.grid}>
                    {props?.content?.map((item, i) => {
                        console.warn(item);
                        return (
                            <FeatureCardColumn
                                key={i}
                                src={item.icon?.sourceUrl}
                                alt={item?.title}
                                title={item?.title}
                                text={item?.content}
                            />
                        );
                    })}
                </Grid>
            </Container>
        </section>
    );
}

const styles = {
    grid: {
        px: [0, null, null, '40px', null, '80px'],
        pt: [0, null, null, null, null, null, null, 3],
        gridGap: ['35px 0', null, '40px 0'],
        gridTemplateColumns: [
            'repeat(1,1fr)',
            null,
            'repeat(2,1fr)',
            null,
            'repeat(3,1fr)',
        ],
        width: ['100%', '80%', '100%'],
        mx: 'auto',
        '& > div': {
            px: [0, '15px', null, '25px', null, '30px', '40px', '60px'],
        },
    },
};
