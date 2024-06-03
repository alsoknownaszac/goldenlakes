import { type ReactElement } from "react";
import Head from "next/head";
import Footer from "@/components/home/footer/Footer";
import Layout from "@/components/layout/Layout";
import SideBar from "@/components/layout/SideBar";
import Coming_Soon from "@/components/comingsoon/Coming_Soon";

const Shop = () => {
  return (
    <>
      <Coming_Soon />
      <Footer />
      <SideBar />
    </>
  );
};

Shop.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <div className={`h-screen w-screen overflow-x-hidden `}>
        <Head>
          <title>Shop</title>
        </Head>
        {page}
      </div>
      {/* <NestedLayout>{page}</NestedLayout> */}
    </Layout>
  );
};

export default Shop;
