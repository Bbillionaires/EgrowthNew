import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About eGrowthNow | Empowering Nonprofits Worldwide",
  description: "Discover how eGrowthNow is revolutionizing nonprofit operations, fundraising, and community engagement with our all-in-one platform designed for impact.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About eGrowthNow"
        description="At eGrowthNow, we're dedicated to helping nonprofits thrive in today's digital landscape. Learn about our mission to provide innovative tools and resources for making a lasting impact."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
