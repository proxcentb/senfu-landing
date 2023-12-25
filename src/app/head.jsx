import Head from 'next/head';

const CustomHead = () => {
  return (
    <Head>
      {/* Google Analytics Tag */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-14P6H3SCPH"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-14P6H3SCPH');
          `,
        }}
      />
    </Head>
  );
};

export default CustomHead;
