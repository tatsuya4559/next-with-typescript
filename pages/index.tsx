import Link from "next/link";
import Layout from "../components/Layout";
import css from "styled-jsx/css";

const styles: string = css`
  p {
    border: solid black 3px;
  }
`;

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
    <style jsx>{styles}</style>
  </Layout>
);

export default IndexPage;
