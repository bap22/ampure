/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';

const data = [
    {
        id: 1,
        imgSrc: '/assets/feature/smart.svg',
        altText: 'Smart',
        title: 'Smart Optimization',
        text: 'Boneless kidney bearings goofy footed freestyle hang-up nose-bump Tom Knox. Face plant nose Tracker axle set hang up rails betty. Boneless Saran Wrap concave kickflip gap coffin bail. Supersonic Skate Camp kidney wheels spine rocket air street bearings snake.',
    },
    {
        id: 2,
        imgSrc: '/assets/feature/winner.svg',
        altText: 'Performance',
        title: 'Amazing Performance',
        text: 'Boneless kidney bearings goofy footed freestyle hang-up nose-bump Tom Knox. Face plant nose Tracker axle set hang up rails betty. Boneless Saran Wrap concave kickflip gap coffin bail. Supersonic Skate Camp kidney wheels spine rocket air street bearings snake.',
    },
    {
        id: 3,
        imgSrc: '/assets/feature/cloud.svg',
        altText: 'Content',
        title: 'Fresh Content',
        text: 'Boneless kidney bearings goofy footed freestyle hang-up nose-bump Tom Knox. Face plant nose Tracker axle set hang up rails betty. Boneless Saran Wrap concave kickflip gap coffin bail. Supersonic Skate Camp kidney wheels spine rocket air street bearings snake.',
    },
    {
        id: 4,
        imgSrc: '/assets/feature/setting.svg',
        altText: 'Customization',
        title: 'Customization',
        text: 'Boneless kidney bearings goofy footed freestyle hang-up nose-bump Tom Knox. Face plant nose Tracker axle set hang up rails betty. Boneless Saran Wrap concave kickflip gap coffin bail. Supersonic Skate Camp kidney wheels spine rocket air street bearings snake.',
    },
    {
        id: 5,
        imgSrc: '/assets/feature/design.svg',
        altText: 'Productivity',
        title: 'More Clients',
        text: 'Boneless kidney bearings goofy footed freestyle hang-up nose-bump Tom Knox. Face plant nose Tracker axle set hang up rails betty. Boneless Saran Wrap concave kickflip gap coffin bail. Supersonic Skate Camp kidney wheels spine rocket air street bearings snake.',
    },
    {
        id: 6,
        imgSrc: '/assets/feature/chat.svg',
        altText: 'Support',
        title: 'Customer Support',
        text: 'Boneless kidney bearings goofy footed freestyle hang-up nose-bump Tom Knox. Face plant nose Tracker axle set hang up rails betty. Boneless Saran Wrap concave kickflip gap coffin bail. Supersonic Skate Camp kidney wheels spine rocket air street bearings snake.',
    },
];

export default function Feature() {
    return (
        <section sx={{ variant: 'section.feature' }}>
            <Container>
                <SectionHeader
                    slogan="Why build a site with Ampure?"
                    title="High quality, performant, websites"
                />

                <Grid sx={styles.grid}>
                    {data.map((item) => (
                        <FeatureCard
                            key={item.id}
                            src={item.imgSrc}
                            alt={item.title}
                            title={item.title}
                            text={item.text}
                        />
                    ))}
                </Grid>
            </Container>
        </section>
    );
}

const styles = {
    grid: {
        pt: [0, null, null, null, null, null, null, 3],
        gridGap: [
            '37px 0',
            null,
            '45px 30px',
            null,
            '50px 30px',
            null,
            null,
            '90px 70px',
        ],
        width: ['100%', '80%', '100%'],
        mx: 'auto',
        gridTemplateColumns: [
            'repeat(1,1fr)',
            null,
            'repeat(2,1fr)',
            null,
            'repeat(3,1fr)',
        ],
    },
};
