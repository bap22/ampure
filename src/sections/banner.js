/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Flex, Box, Heading, Text, Button } from 'theme-ui';
import Image from 'next/image';
import React, { useState } from 'react';
// import ModalVideo from 'react-modal-video';
import { Link } from 'components/link';
import { FaPlayCircle } from 'react-icons/fa';

const data = [
    {
        id: 1,
        path: '#',
        image: '/assets/sponsor/paypal.svg',
        title: 'paypal',
        height: 28,
        width: 100,
    },
    {
        id: 2,
        path: '#',
        image: '/assets/sponsor/google.svg',
        title: 'google',
        height: 28,
        width: 85,
    },
    {
        id: 3,
        path: '#',
        image: '/assets/sponsor/dropbox.svg',
        title: 'dropbox',
        height: 24,
        width: 123,
    },
];

export default function Banner(props) {
    const [videoOpen, setVideoOpen] = useState(false);
    const handleClick = (e) => {
        e.preventDefault();
        setVideoOpen(true);
    };

    return (
        <section sx={styles.banner} id="home">
            <Container sx={styles.banner.container}>
                <Box sx={styles.banner.contentBox}>
                    <Heading as="h1" variant="heroPrimary">
                        {props?.content?.content.replace(/<[^>]*>?/gm, '')}
                    </Heading>
                    <Text as="p" variant="heroSecondary">
                        Ampure is your all-in-one marketing hub to help you
                        simplify and grow your practice.
                    </Text>
                    <Flex>
                        <Button variant="whiteButton" aria-label="Get Started">
                            See how it works
                        </Button>
                        <>
                            {/* <ModalVideo
                channel="youtube"
                isOpen={videoOpen}
                videoId="ZNA9rmDsYVE"
                onClose={() => setVideoOpen(false)}
              /> */}
                            <Button
                                variant="textButton"
                                aria-label="Watch Video"
                                onClick={handleClick}
                            >
                                <FaPlayCircle /> Watch Video
                            </Button>
                        </>
                    </Flex>
                    <Flex sx={styles.sponsorBox}>
                        <Text sx={styles.sponsorTitle}>Integrated With:</Text>
                        <Box sx={styles.sponsorBox.sponsor}>
                            {data.map((item, index) => (
                                <Link
                                    path={item.path}
                                    key={`client-key${index}`}
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        height={item.height}
                                        width={item.width}
                                    />
                                </Link>
                            ))}
                        </Box>
                    </Flex>
                </Box>

                <Box sx={styles.banner.imageBox}>
                    <Image
                        src="/assets/banner-thumb.png"
                        alt="banner"
                        height={796}
                        width={1126}
                    />
                </Box>
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
        pt: ['150px', null, null, null, null, null, '140px', '130px'],
        pb: ['100px', null, null, '110px', null, 10, '150px'],
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
        imageBox: {
            display: ['none', null, null, 'block'],
            justifyContent: 'center',
            ml: [
                0,
                null,
                null,
                '-110px',
                '-115px',
                '-150px',
                '-210px',
                '-270px',
            ],
            mr: [
                0,
                null,
                null,
                '-145px',
                '-160px',
                '-180px',
                '-220px',
                '-290px',
            ],
            mt: [0, null, null, '40px', 4, 7, 0],
            mb: [0, null, null, null, '-45px', '-70px', null, '-115px'],
            overflow: 'hidden',
            textAlign: 'right',
            width: '100%',
        },
    },
    sponsorTitle: {
        color: 'white',
        fontSize: [1, 2],
        opacity: 0.6,
        pr: 20,
        flexShrink: 0,
        pb: [2, null, 0],
    },
    sponsorBox: {
        pt: ['35px', null, null, null, null, '45px'],
        flexDirection: ['column', null, 'row'],
        sponsor: {
            display: 'flex',
            alignItems: 'center',
            '> a': {
                mr: [5, null, null, 4, 6],
                display: 'flex',
                '&:last-of-type': {
                    mr: 0,
                },
            },
        },
    },
};
