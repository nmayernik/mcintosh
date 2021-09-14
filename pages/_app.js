import "../css/index.css";
import Head from "next/head";
import Layout from "@components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Nick Mayernik</title>
        <meta
          name="Description"
          content="Full-stack UX Designer based in PA. Currently leading research, design and development at PYRAMID."
        />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
