/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box } from 'theme-ui';
import TextFeature from 'components/text-feature';
import Image from 'next/image';

const data = {
    subTitle: 'WEBSITE SECURITY',
    title: 'Stop worrying about keeping your site updated and patched. We got this.',
    description:
        'Just like you want the most secure systems when dealing with your financial informatino, you want a website that is secure. We mitigate hacking attempts and make your information is secured and private.',
    btnName: 'Learn More',
    btnURL: '#',
};

export default function SecurePayment() {
    return (
        <section sx={{ variant: 'section.securePayment' }}>
            <Box sx={styles.bgOverlay} />
            <Container sx={styles.containerBox}>
                <Box sx={styles.thumbnail}>
                    <Image
                        src="/assets/paymentThumb.png"
                        alt={data.title}
                        width={743}
                        height={820}
                    />
                </Box>
                <Box sx={styles.contentBox}>
                    <TextFeature
                        subTitle={data.subTitle}
                        title={data.title}
                        description={data.description}
                        btnName={data.btnName}
                        btnURL={data.btnURL}
                    />
                </Box>
            </Container>
        </section>
    );
}

const styles = {
    bgOverlay: {
        position: 'absolute',
        top: 0,
        right: 0,
        height: '100%',
        zIndex: -1,
        width: [
            '100%',
            null,
            null,
            'calc(50% + 400px)',
            'calc(50% + 480px)',
            'calc(50% + 570px)',
            null,
            'calc(50% + 625px)',
        ],
        backgroundImage: `url('/assets/payment-pattern.png')`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: 'top left',
        backgroundSize: 'cover',
    },
    containerBox: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flexWrap: ['wrap', null, null, 'nowrap'],
    },
    thumbnail: {
        mb: -2,
        ml: [-4, '-40px', null, null, 0],
        order: [2, null, null, 0],
        pr: [6, null, 7, 0],
    },
    contentBox: {
        width: ['100%', 420, 480, 380, 500, 570],
        mx: 'auto',
        flexShrink: 0,
        textAlign: ['center', null, null, 'left'],
        pt: [0, null, null, 4, '50px', null, 4, '80px'],
        pl: [0, null, null, 40, '90px'],
        pb: [7, null, null, 9],
        pr: [0, null, null, null, null, 6],
    },
};
