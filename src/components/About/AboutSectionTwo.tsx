import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0" data-wow-delay=".15s">
              <Image src="/images/about/about-image-2.svg" alt="about image" fill className="drop-shadow-three dark:hidden dark:drop-shadow-none" />
              <Image src="/images/about/about-image-2-dark.svg" alt="about image" fill className="hidden drop-shadow-three dark:block dark:drop-shadow-none" />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">Empowering Nonprofits</h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">eGrowthNow is dedicated to empowering nonprofit organizations with the tools and resources needed to maximize their impact. From fundraising to volunteer management, we provide an all-in-one solution.</p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">Comprehensive Support</h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">Our platform offers unparalleled support to ensure your nonprofit can navigate any challenge. From technical assistance to strategic planning, we're here every step of the way.</p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">Scalable Impact</h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">With eGrowthNow, scale your operations and impact without losing sight of your mission. Our platform grows with you, ensuring that you have the resources to meet your evolving needs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
