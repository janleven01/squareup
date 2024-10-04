import { forWho, trustedBy } from "@/constants/constants";
import Image from "next/image";
import Buttons from "./Button";

const Hero = () => {
  return (
    <div className="max-container">
      <div className="relative flex h-[566px] flex-col items-center overflow-hidden border-x-2 border-b-2 border-grey_15 sm:h-[691px] xl:h-[796px]">
        <Image
          src="/images/hero-bg.png"
          alt="hero background"
          width={1598}
          height={797}
          className="absolute -z-20 h-full object-cover"
        />
        <Image
          src="/images/hero-main-image.png"
          alt="hero main image"
          width={1573}
          height={448}
          className="absolute bottom-0 -z-20 min-h-[300px] min-w-[1000px] sm:-bottom-5 sm:min-h-[448px] sm:min-w-[1573px] lg:bottom-0"
        />
        <div className="pt-28">
          <h1 className="text-center text-4xl text-white sm:text-5xl sm:font-semibold xl:text-[4.25rem]">
            A Digital Product Studio <br /> that will Work
          </h1>
          <div className="pt-10">
            <div className="mx-2 flex w-[358] justify-center rounded-xl border border-grey_15 bg-grey_10 px-5 py-[18px] text-base text-grey_60 sm:px-[30px] md:w-[699px] md:text-lg xl:w-[865px] xl:px-10 xl:py-6 xl:text-[22px]">
              <p className="hidden md:inline">For</p>
              <ul className="flex flex-wrap">
                {forWho.map((item, index) => (
                  <li key={index} className="hidden md:inline">
                    <span className="mx-1 rounded-md bg-grey_15 px-[10px] py-2 text-white">
                      {item.label}
                    </span>
                    {index < forWho.length - 2 && ","}
                    {index === forWho.length - 2 && "and"}
                  </li>
                ))}
              </ul>
              <span className="inline text-center sm:text-lg md:hidden">
                For startups, enterprise leaders, media & <br /> publishers, and
                social good.
              </span>
            </div>
          </div>
        </div>
        <div className="mt-[50px] flex gap-3">
          <Buttons
            title="Our Works"
            className="border-2 border-grey_15 bg-grey_10 hover:bg-grey_5"
          />
          <Buttons
            title="Contact Us"
            className="bg-green_50 text-grey_15 hover:bg-green_45 hover:text-black"
          />
        </div>
      </div>
      {/* Trusted by Company [Logos] */}
      <div className="relative">
        <ul className="grid border-x-2 border-grey_15 bg-grey_10 max-md:grid-cols-3 max-md:pt-5 max-sm:grid-cols-2 md:grid-cols-6 md:border-b-2 md:px-2 md:py-10">
          {trustedBy.map((logo, index) => (
            <li
              key={index}
              className="flex items-center justify-center p-7 max-md:border-b-2 max-md:border-grey_15 md:px-4 lg:px-8 lg:py-4 xl:px-10 xl:py-5"
            >
              <Image
                src={logo.logoUrl}
                alt={logo.label}
                width={100}
                height={50}
                className="h-9 w-20 xl:h-12 xl:w-48"
              />
            </li>
          ))}
        </ul>
        <div className="absolute top-0 block h-full border-r-2 border-grey_15 max-sm:w-2/4 sm:w-48 md:hidden" />
        <div className="absolute right-0 top-0 block h-full border-grey_15 max-sm:w-2/4 sm:w-48 sm:border-l-2 md:hidden" />
        <div className="absolute -top-5 right-1/2 flex h-11 w-56 translate-x-1/2 items-center justify-center rounded-full border-2 border-grey_15 bg-grey_10 px-6 py-3.5 text-sm font-medium md:-top-7 md:h-16 md:w-72 xl:px-8 xl:py-5 xl:text-lg">
          Trusted By 250+ Companies
        </div>
      </div>
    </div>
  );
};

export default Hero;
