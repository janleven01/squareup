import { services } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SectionHeader from "./SectionHeader";

const Services = () => {
  return (
    <div className="max-container">
      <SectionHeader
        title="Our Services"
        description="Transform your brand with our innovative digital solutions that captivate and engage your audience."
        imageUrl="/images/services-bg.png"
      />
      <ul className="grid-cols-1 bg-grey_10 sm:grid sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <li
            key={index}
            className={`flex flex-col justify-between border-b-2 border-grey_15 px-7 py-10 sm:px-10 xl:p-12 ${index === services.length - 1 && "max-lg:col-span-2"} ${index % 2 === 0 ? "border-x-2" : "max-lg:border-r-2 max-sm:border-x-2"}`}
          >
            <div>
              <div className="flex items-center gap-4 sm:flex-col">
                <Image
                  src={service.iconUrl}
                  alt={service.label}
                  width={88}
                  height={88}
                  className="size-14 sm:size-16 xl:size-20"
                />
                <h3 className="font-semibold sm:mt-10 sm:text-2xl xl:text-3xl">
                  {service.label}
                </h3>
              </div>
              <p className="pt-5 text-[0.875rem] leading-6 tracking-tight sm:text-[1rem] xl:text-[1.125rem]">
                {service.description}
              </p>
            </div>
            <Link
              href="/"
              className="mt-14 w-full rounded-lg bg-grey_15 py-3 text-center text-lg font-medium text-grey_90 hover:bg-grey_12 hover:text-white sm:py-4"
            >
              Learn More
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
