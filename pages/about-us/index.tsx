import type { ReactElement } from "react";
import Head from "next/head";
// import type { NextPageWithLayout } from "./_app";
import High_Expectations from "@/components/home/high-expectations/High_Expectations";
import Visit_Nigeria from "@/components/home/visit-nigeria/Visit_Nigeria";
import Benefits from "@/components/home/benefits/Benefits";
import Memories from "@/components/home/memories/Memories";
import Packages from "@/components/home/packages/Packages";
import Reviews from "@/components/home/reviews/Reviews";
import Call_To_Action from "@/components/home/call-to-action/Call_To_Action";
import Footer from "@/components/home/footer/Footer";
import Hero_Section from "@/components/about_us/hero-section/Hero_Section";
import Breath_Away from "@/components/about_us/breath-away/Breath_Away";
import Philosophy from "@/components/about_us/philosophy/Philosophy";
import Team from "@/components/about_us/team/Team";

const AboutUs = () => {
  return (
    <div className={`h-screen w-screen overflow-x-hidden `}>
      <Head>
        <title>About Us</title>
      </Head>
      <>
        <Hero_Section />
        <Breath_Away />
        <Philosophy />
        <Team />
        <High_Expectations />
        <Call_To_Action />
        <Packages />
        <Reviews />
        <Call_To_Action />
        <Footer />
      </>
    </div>
  );
};

// Page.getLayout = function getLayout(page: ReactElement) {
//   return (
//     <Layout>
//       <NestedLayout>{page}</NestedLayout>
//     </Layout>
//   );
// };

export default AboutUs;
