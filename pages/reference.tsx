import { GetServerSideProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import css from "styled-jsx/css";
import axios from "axios";

import Layout from "../components/Layout";
import { User } from "../interfaces";

// cssはstyled-jsxを採用
const styles: string = css`
  p {
    border: solid #f0f0f0 1px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
  }
`;

// Propsの構造を定義
type Props = {
  items: User[];
}

// コンポーネントは関数コンポーネントとHooksで書く
const ReferencePage: React.FC<Props> = ({ items }) => {
  const router = useRouter();
  const users = (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Layout title="Reference実装">
      <h1>リファレンス実装のためのページ</h1>
      <p>
        リンクは
        <Link href="/">
          <a>next/link</a>
        </Link>
        を使用します
      </p>
      <p>ルーティング、URLの処理はnext/routerを使用します: {router.asPath}</p>
      {users}
      <style jsx>{styles}</style>
    </Layout>
  );
};

// 最初にPropsとして必要なデータを取得する
export const getServerSideProps: GetServerSideProps = async () => {
  let data: User[] = [];
  try {
    const res = await axios.get("http://localhost:3000/api/users");
    data = res.data;
  } catch (error) {
    console.log(error);
  }
  return { props: { items: data } };
};

export default ReferencePage;
