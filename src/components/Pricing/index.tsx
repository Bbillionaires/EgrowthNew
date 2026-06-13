"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle title="Simple and Affordable Pricing" paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form." center width="665px" />
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox packageName="Lite" price={isMonthly ? "40" : "120"} duration={isMonthly ? "mo" : "yr"} subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim.">
            <OfferList text="All UI Components" status="active" />
            <OfferList text="Use with Unlimited Projects" status="active" />
            <OfferList text="Email Support" status="active" />
            <OfferList text="Lifetime Access" status="inactive" />
          </PricingBox>
          <PricingBox packageName="Basic" price={isMonthly ? "399" : "789"} duration={isMonthly ? "mo" : "yr"} subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim.">
            <OfferList text="All UI Components" status="active" />
            <OfferList text="Use with Unlimited Projects" status="active" />
            <OfferList text="Email Support" status="active" />
            <OfferList text="Lifetime Access" status="active" />
            <OfferList text="Free Lifetime Updates" status="inactive" />
          </PricingBox>
          <PricingBox packageName="Plus" price={isMonthly ? "589" : "999"} duration={isMonthly ? "mo" : "yr"} subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim.">
            <OfferList text="All UI Components" status="active" />
            <OfferList text="Use with Unlimited Projects" status="active" />
            <OfferList text="Email Support" status="active" />
            <OfferList text="Lifetime Access" status="active" />
            <OfferList text="Free Lifetime Updates" status="active" />
          </PricingBox>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
