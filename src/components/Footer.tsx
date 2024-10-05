import Image from "next/image";
import React from "react";
import { contacts, footerLinks, socialMedias } from "../constants/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="px-4 sm:px-10 lg:px-20">
      <div className="max-container">
        <div className="border-grey_15 sm:border-b-2">
          <div className="relative my-7 flex items-center justify-between max-sm:flex-col sm:my-10 sm:py-4 xl:my-12">
            <Image
              src="/logo-w-name.svg"
              alt="squareup logo"
              width={178}
              height={60}
              className="h-12 w-36 object-cover max-sm:mb-7 sm:h-14 sm:w-44"
            />
            <ul className="right-1/2 flex flex-wrap justify-center gap-7 border-grey_15 max-2xl:hidden max-sm:flex max-sm:border-t-2 max-sm:px-4 max-sm:py-7 sm:absolute sm:translate-x-1/2">
              {footerLinks.map((link) => (
                <li key={link.label} className={`font-medium sm:text-lg`}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-3 rounded-lg border-2 border-grey_15 p-3 max-sm:w-full max-sm:flex-col xl:gap-5">
              <p className="text-sm font-medium text-grey_90 sm:text-lg md:ml-2">
                Stay Connected
              </p>
              <ul className="flex gap-3">
                {socialMedias.map((social) => (
                  <li key={social.label}>
                    <Link href={social.socialLink} target="_blank">
                      <Image
                        src={social.logoUrl}
                        alt={social.label}
                        width={64}
                        height={64}
                        className="size-16"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="my-7 flex w-full items-center justify-between max-lg:flex-col max-lg:gap-5 sm:my-12">
          <ul className="flex items-center gap-7 max-sm:w-full max-sm:flex-col">
            {contacts.map((contact) => (
              <li
                key={contact.label}
                className="flex items-center justify-center gap-2 border-b-2 border-grey_15 pb-3 max-sm:w-full"
              >
                <Image
                  src={contact.iconUrl}
                  alt={contact.label}
                  width={21}
                  height={21}
                  className="size-5"
                />
                <p className="text-base text-grey_90 xl:text-lg">
                  {contact.label}
                </p>
              </li>
            ))}
          </ul>
          <p className="pb-3 text-sm text-grey_60 xl:text-lg">
            © 2023 SquareUp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
