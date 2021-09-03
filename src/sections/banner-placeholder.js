/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box } from 'theme-ui';

export default function Banner(props) {
    return (
        <section sx={styles.banner} id="home">
            <Container sx={styles.banner.container}>
                <Box sx={styles.banner.contentBox}></Box>
            </Container>
        </section>
    );
}

const styles = {
    banner: {
        overflow: ['hidden', 'initial', null, 'hidden'],
        backgroundImage: `url(assets/bannerBg.png)`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: 'top left',
        backgroundSize: 'cover',
        borderBottomRightRadius: [100, 150, null, null, null, 250],
        pt: ['50px', null, null, null, null, null, '40px', '30px'],
        pb: ['10px', null, null, '11px', null, 10, '15px'],
        backgroundColor: 'primary',
        container: {
            display: 'flex',
        },
        contentBox: {
            width: ['100%', null, '85%', '55%', '50%', '55%'],
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            flexShrink: 0,
            pt: [0, null, null, null, null, null, 5, 7],
        },
    },
};
