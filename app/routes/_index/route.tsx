import { LinksFunction, LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { getUrlOriginWithPath } from '~/utils';
import styles from './_index.module.scss';
import styles0 from './route.module.scss';

export const loader = ({ request }: LoaderFunctionArgs) => {
    return { canonicalUrl: getUrlOriginWithPath(request.url) };
};

export default function HomePage() {
    return (
        <div>
            <div className={styles.root}>
                <form className={styles0.form1}>
                    <label className={styles0.label1}>Name:</label>
                    <br />
                    <input type="text" />
                    <br />
                    <label className={styles0.label2}>Contact:</label>
                    <br />
                    <input type="text" />
                    <br />
                    <br />
                    <input type="submit" value="Submit" className={styles0.input1} />
                </form>
                <h2 className={styles.title}></h2>
                <h1 className={styles0.header1}>Welcome to Aura Captures</h1>
                <img
                    src="https://static.wixstatic.com/media/11062b_25e218a68cae48e98a21198d1280a6bd~mv2.jpg/v1/fill/w_600,h_399,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_25e218a68cae48e98a21198d1280a6bd~mv2.jpg"
                    alt=""
                    className={styles0.img1}
                />
                <span className={styles0.span1}>&quot;A moment ,forever alive&quot; </span>
                <div />
                <li className={styles0.li1}>Available now</li>
                <button className={styles0.button1}>Street photography</button>
                <button className={styles0.button1}>Event photography</button>
                <button className={styles0.button1}>Travel photography</button>
                <button className={styles0.button1}>Wildlife photography</button>
                <nav className={styles0.nav1}>
                    <a href="/home">Aura Captures</a> | <a href="/projects"></a> |{' '}
                    <a href="/about">Jubilee Hills</a> |{' '}
                    <a href="/contact">Contact Us:9848033222</a>
                </nav>
            </div>
        </div>
    );
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
    const title = 'Blank Starter';
    const description = 'Welcome to the Blank Starter';
    const imageUrl = 'https://website-starter.com/og-image.png';

    return [
        { title },
        {
            name: 'description',
            content: description,
        },
        {
            tagName: 'link',
            rel: 'canonical',
            href: data?.canonicalUrl,
        },
        {
            property: 'robots',
            content: 'index, follow',
        },
        {
            property: 'og:title',
            content: title,
        },
        {
            property: 'og:description',
            content: description,
        },
        {
            property: 'og:image',
            content: imageUrl,
        },
        {
            name: 'twitter:card',
            content: 'summary_large_image',
        },
        {
            name: 'twitter:title',
            content: title,
        },
        {
            name: 'twitter:description',
            content: description,
        },
        {
            name: 'twitter:image',
            content: imageUrl,
        },
    ];
};

export const links: LinksFunction = () => {
    return [
        {
            rel: 'icon',
            href: '/favicon.ico',
            type: 'image/ico',
        },
    ];
};
