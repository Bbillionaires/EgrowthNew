import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  { id: 1, name: "Alexa Jordan", designation: "Founder @EcoWarriors", content: "eGrowthNow has revolutionized how we manage our nonprofit. Its intuitive platform has made it simpler to connect with our community and amplify our impact.", image: "/images/testimonials/auth-01.png", star: 5 },
  { id: 2, name: "Jamal Yassin", designation: "Director @FeedTheFuture", content: "With eGrowthNow, our operations have become more streamlined than ever before. Their tools have empowered us to focus on what truly matters - making a difference.", image: "/images/testimonials/auth-02.png", star: 5 },
  { id: 3, name: "Sofia Liu", designation: "Coordinator @ArtistsForChange", content: "eGrowthNow is a game-changer for nonprofits looking to expand their reach. Its seamless integration and supportive community have been invaluable to our growth.", image: "/images/testimonials/auth-03.png", star: 5 },
  { id: 4, name: "Marcus Antoni", designation: "CEO @HealthHive", content: "eGrowthNow empowered us to scale our health initiatives rapidly. Their platform's ease of use and powerful features have been pivotal in our success.", image: "/images/testimonials/auth-02.png", star: 5 },
  { id: 5, name: "Elena Gomez", designation: "Founder @SafeSpaces", content: "Starting a nonprofit seemed daunting, but eGrowthNow made it accessible and straightforward. Their guidance and resources have been a cornerstone of our journey.", image: "/images/testimonials/auth-03.png", star: 5 },
  { id: 6, name: "Raj Patel", designation: "Executive Director @EduFuture", content: "Thanks to eGrowthNow, we've been able to more effectively manage our educational programs and reach more learners. Their platform is a must-have for any growing nonprofit.", image: "/images/testimonials/auth-01.png", star: 5 },
];

const Testimonials = () => {
  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle title="Empowering Nonprofits Worldwide" paragraph="Discover how eGrowthNow is transforming the landscape for nonprofits, enabling them to achieve greater impact and reach. Hear directly from the organizations making a difference with our platform." center />
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((testimonial) => <SingleTestimonial key={testimonial.id} testimonial={testimonial} />)}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
