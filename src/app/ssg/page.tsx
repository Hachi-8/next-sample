import Head from "next/head";

type SSGProps = {
  params: { message: string };
};

const SSG = ({ params }: SSGProps) => {
  const { message } = params;
  return (
    <div>
      <Head>
        <title>Static Site Generation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>静的に生成されたページ</p>
        <p>{message}</p>
      </main>
    </div>
  );
};

export const generateStaticParams = async () => {
  const timestamp = new Date().toLocaleString();
  const message: string = `${timestamp}にgetStaticPropsが実行されました`;
  console.log(message);
  return [
    {
      message: message,
    },
  ];
};

export default SSG;
