import { whyChooseUs } from "@/constants/constants";
import SectionHeader from "./SectionHeader";
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <div className="max-container">
      <SectionHeader
        title="Why Choose SquareUp"
        description="Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results."
        imageUrl="/images/why-choose-us-bg.png"
      />
      <ul className="grid-cols-1 bg-grey_10 sm:grid md:grid-cols-2">
        {whyChooseUs.map((whyUs, index) => (
          <li
            key={index}
            className={`border-b-2 border-grey_15 px-7 max-sm:py-10 sm:p-14 xl:p-20 ${index % 2 === 0 ? "border-x-2" : "max-md:border-x-2 md:border-r-2"}`}
          >
            <div className="flex items-center gap-4">
              <Image
                src={whyUs.iconUrl}
                alt={whyUs.label}
                width={88}
                height={88}
                className="size-14 sm:size-16 xl:size-20"
              />
              <h3 className="font-semibold sm:text-2xl xl:text-3xl">
                {whyUs.label}
              </h3>
            </div>
            <p className="pt-10 text-[0.875rem] leading-6 tracking-tight sm:text-[1rem] xl:text-[1.125rem]">
              {whyUs.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WhyChooseUs;
