import Head from 'next/head';

interface CustomHeadProps {
  title: string;
}

const CustomHead = ({ title }: CustomHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Abdulrasheed Yusuf is a passionate full-stack developer who creates engaging web applications and websites that users genuinely enjoy."
      />
      <meta
        name="keywords"
        content="web developer portfolio, Abdulrasheed web developer, Abdulrasheed developer, mern stack, Abdulrasheed Yusuf portfolio, vscode-portfolio, software engineer, full stack developer, Abdulrasheed Yusuf, Abdulrasheed Yusuf portfolio, Abdulrasheed Yusuf web developer, Abdulrasheed Yusuf full stack developer"
      />
      <meta property="og:title" content="Abdulrasheed Yusuf's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      {/* <meta property="og:url" content="https://vscode-portfolio.vercel.app" /> */}
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Abdulrasheed Yusuf | Portfolio',
};
