import NewsLatterBox from "@/components/Contact/NewsLatterBox";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "eGrowthNow",
  description: "eGrowthNow",
};

const BlogSidebarPage = () => {
  return (
    <>
      <section className="overflow-hidden pb-[120px] pt-[180px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-8/12">
              <h1 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                10 amazing sites to download stock photos & digital assets for free
              </h1>
            </div>
            <div className="w-full px-4 lg:w-4/12">
              <NewsLatterBox />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSidebarPage;
