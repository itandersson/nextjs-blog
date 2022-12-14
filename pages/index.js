import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Bla bla bla test....</p>
      </section>
      <h1 className="title">
        Read <Link href="/posts/first-post">this page!</Link>
      </h1>
    </Layout>
  );
}
