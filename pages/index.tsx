import type { ReactElement } from "react";
import Head from "next/head";
// import type { NextPageWithLayout } from "./_app";
import Hero_Section from "@/components/home/hero-section/Hero_Section";
import Explore_Destinations from "@/components/home/explore-destinations/Explore_Destinations";
import High_Expectations from "@/components/home/high-expectations/High_Expectations";
import Visit_Nigeria from "@/components/home/visit-nigeria/Visit_Nigeria";
import Benefits from "@/components/home/benefits/Benefits";
import Memories from "@/components/home/memories/Memories";
import Packages from "@/components/home/packages/Packages";
import Reviews from "@/components/home/reviews/Reviews";
import Call_To_Action from "@/components/home/call-to-action/Call_To_Action";
import Footer from "@/components/home/footer/Footer";

const Home = () => {
  return (
    <div className={`h-screen w-screen overflow-x-hidden `}>
      <Head>
        <title>Golden Lakes - Explore Nigeria</title>
      </Head>
      <>
        <Hero_Section />
        <Explore_Destinations />
        <High_Expectations />
        <Visit_Nigeria />
        <Benefits />
        <div className="hidden xl:block">
          <Call_To_Action />
        </div>
        <Memories />
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

export default Home;
