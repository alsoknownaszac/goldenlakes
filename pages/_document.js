/* eslint-disable @next/next/no-document-import-in-page */
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="description"
          content="A portolio website of an outgoing developer who goes under the alias @alsoknownaszac"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="https://res.cloudinary.com/dsf48vuu9/image/upload/v1658846274/blackbg1_joifip.avif"
          as="image"
        ></link>
        <link
          rel="preload"
          href="https://res.cloudinary.com/dsf48vuu9/image/upload/v1658846273/blackbg2_ppaprd.avif"
          as="image"
        ></link>
        <link
          rel="preload"
          href="https://res.cloudinary.com/dsf48vuu9/image/upload/v1658846270/officesetup_h0ejo4.avif"
          as="image"
        ></link>
        <link
          rel="preload"
          href="https://res.cloudinary.com/dsf48vuu9/image/upload/v1658846270/alsoknownaszac_sldfpk.avif"
          as="image"
        ></link>
        <link
          rel="preconnect"
          href="https://api.fontshare.com/"
          crossOrigin="true"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,301,400,401,500,501,700,701,900,901,1,2&f[]=clash-display@200,300,400,500,600,700,1&display=swap"
          rel="stylesheet"
        />
        <link
          rel="search"
          type="application/opensearchdescription+xml"
          title="Amayo Collins Portfoliow"
          href="http://alsoknownaszac.me/mysitetitle.xml"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
