import { SectionHeaderProps } from "@/types";
import Image from "next/image";
import Button from "./Button";

const SectionHeader = (props: SectionHeaderProps) => {
  const { title, description, imageUrl, iconUrl, startProject } = props;
  return (
    <div className="relative flex items-center justify-center border-x-2 border-b-2 border-grey_15">
      <div className="my-[7.5rem] flex flex-col items-center gap-4 px-10 text-center md:px-32 xl:px-60">
        {iconUrl && (
          <Image
            src={iconUrl}
            alt="Logo icon"
            width={80}
            height={80}
            className="mb-7 sm:mb-10 xl:mb-12"
          />
        )}

        <h2
          className={`font-semibold xl:text-5xl ${startProject ? "text-2xl sm:text-4xl" : "text-4xl"}`}
        >
          {title}
        </h2>
        <p className="text-base xl:text-lg">{description}</p>

        {startProject && (
          <Button
            title="Start Project"
            className="mt-7 rounded-lg bg-green_50 text-grey_10 hover:bg-green_45 hover:text-black sm:mt-10 xl:mt-12"
          />
        )}
      </div>
      <Image
        src={imageUrl}
        alt={title}
        width={1596}
        height={336}
        className="absolute -z-10 h-full w-full"
      />
    </div>
  );
};

export default SectionHeader;
