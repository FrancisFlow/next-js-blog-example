import Head from 'next/head';
import Layout, {siteTitle} from './components/layout';
import utilStyles from '../styles/utilis.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from './components/date';

export async function getStaticProps(){
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData
    }
  };

}


export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>Hi, my name is Francis Ngigi and I am a world-class software engineer, primarily focused on user centric web applications.</p>

        <p>
          I deeply enjoy coding and building beautiful websites. I love to play chess and drive. I have a deep seated desire to be a world-class engineer/developer. I know I can do this and nextJs is my ticket to a beautiful fulfiling life.
        <a href="https://nextjs.org/learn">Unsere Nachste tutorial</a>
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}> {title} </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
                </small>
                </li>
           
          ))}
        </ul>
      </section>
    </Layout>
  );
}