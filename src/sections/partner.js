/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import TextFeature from 'components/text-feature';
import Image from 'next/image';

const data = {
    subTitle: 'Localization',
    title: 'Smart optimization and reporting for your locale',
    description:
        'Ampure is your all-in-one solution for hands off SEO and online optimization. Get more patients each and every month.',
    btnName: 'Get Started',
    btnURL: '#',
};

export default function PartnerSection() {
    return (
        <section sx={{ variant: 'section.partner' }}>
            <Container sx={styles.containerBox}>
                <Box sx={styles.contentBox}>
                    <TextFeature
                        subTitle={data.subTitle}
                        title={data.title}
                        description={data.description}
                        btnName={data.btnName}
                        btnURL={data.btnURL}
                    />
                </Box>
                <Box sx={{ px: [0, null, '40px', 0] }}>
                    <Image
                        src="/assets/partner.png"
                        alt="Partner"
                        width={794}
                        height={544}
                    />
                </Box>
            </Container>
        </section>
    );
}

const styles = {
    containerBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: ['wrap', null, null, 'nowrap'],
    },
    contentBox: {
        flexShrink: 0,
        px: [0, null, '30px', 0],
        textAlign: ['center', null, null, 'left'],
        width: ['100%', 450, 550, '350px', '410px', '485px'],
        mx: 'auto',
        pb: ['30px', null, null, 0],
        '.description': {
            pr: [0, null, null, null, 4],
        },
    },
};
