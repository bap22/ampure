/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'components/link';
import Image from 'next/image';

export default function Logo({ src, ...rest }) {
    return (
        <Link
            path="/"
            sx={{
                variant: 'links.logo',
                display: 'flex',
                cursor: 'pointer',
                mr: 15,
            }}
            {...rest}
        >
            <Image
                src={src}
                alt="startup landing logo"
                height={44}
                width={150}
            />
        </Link>
    );
}
