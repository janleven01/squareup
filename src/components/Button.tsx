"use client";

import { cn } from "@/lib/utils";
import { ButtonProps } from "@/types";

const Button = (props: ButtonProps) => {
  const { title, className } = props;
  return (
    <button
      type="button"
      className={cn(
        "rounded-[10px] px-5 py-[14px] text-sm font-medium text-grey_90 hover:text-white sm:px-5 sm:py-3 xl:px-7 xl:py-[18px] xl:text-lg",
        className,
      )}
    >
      {title}
    </button>
  );
};

export default Button;
