import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000);
    }, []);

    return (
        <div className="not-found">
            <Head>
                <title>Oops! 404 Not Found | faisaladisoe</title>
                <meta name="description" content="This content is not available in this website" />
            </Head>
            <h1>Sorry, that page doesn’t exist!</h1>
            <h3>The link you followed may be broken, or the page may have been removed.</h3>
            <Link href="/">
                <a>Back to Home</a>
            </Link>
        </div>
    );
}
 
export default NotFound;