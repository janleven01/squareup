import { feedbacks } from "@/constants/constants";
import SectionHeader from "./SectionHeader";
import Image from "next/image";
import Link from "next/link";

const Feedback = () => {
  return (
    <div className="max-container">
      <SectionHeader
        title="What our Clients say About us"
        description="At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients. Here's what some of our satisfied clients have to say about their experience working with us"
        imageUrl="/images/feedback-bg.png"
      />
      <ul className="grid-cols-1 bg-grey_10 md:grid md:grid-cols-2">
        {feedbacks.map((feedback, index) => (
          <li
            key={index}
            className={`flex flex-col justify-between border-b-2 border-grey_15 px-7 max-sm:py-10 sm:p-14 xl:p-20 ${index % 2 === 0 ? "border-x-2" : "max-md:border-x-2 md:border-r-2"}`}
          >
            <h3 className="text-green_80 text-xl font-medium xl:text-2xl">
              {feedback.title}
            </h3>
            <p className="mt-6 text-[0.875rem] leading-6 tracking-tight sm:text-[1rem] xl:text-[1.125rem]">
              {feedback.description}
            </p>
            <div className="mt-10 flex items-center justify-between gap-2 rounded-lg border-2 border-grey_15 p-3 xl:p-5">
              <div className="flex items-center gap-4">
                <Image
                  src={feedback.profileUrl}
                  alt={feedback.name}
                  width={60}
                  height={60}
                  className="size-10 sm:size-12 xl:size-14"
                />
                <div className="flex flex-col">
                  <p className="text-base font-medium xl:text-xl">
                    {feedback.name}
                  </p>
                  <p className="text-sm xl:text-lg">{feedback.position}</p>
                </div>
              </div>
              <Link
                href="/"
                className="hover:bg-grey_12 hidden rounded-lg bg-grey_15 px-4 py-3 text-center text-sm font-medium text-grey_90 hover:text-white lg:block xl:px-5 xl:py-4 xl:text-lg"
              >
                Open Website
              </Link>
              <Link
                href="/"
                className="hidden rounded-lg bg-grey_15 px-4 py-3 text-center text-sm font-medium max-lg:block xl:px-5 xl:py-4 xl:text-lg"
              >
                <Image
                  src="/icons/top-right.svg"
                  alt="top right icon"
                  width={40}
                  height={40}
                  className="size-4"
                />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feedback;
