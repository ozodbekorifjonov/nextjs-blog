import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post | About me</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
        aperiam architecto consequuntur dignissimos, dolore hic impedit laborum
        neque perferendis, perspiciatis quo repellendus totam veritatis. Eius
        eos molestias odit quaerat similique soluta tempore! Ab in pariatur quo
        voluptatibus. Ipsum magnam, vero. Adipisci, asperiores commodi
        consequatur eaque eligendi et explicabo modi voluptatibus!
      </p>
    </Layout>
  );
}
