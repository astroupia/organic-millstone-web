import React from "react";
import { Instagram, Youtube, Send } from "lucide-react"; // Using Send icon as a representation for Telegram

interface FooterLink {
  label: string;
  href: string;
}

interface FooterListProps {
  title: string;
  links: FooterLink[];
}

const FooterList: React.FC<FooterListProps> = ({ title, links }) => (
  <div>
    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
      {title}
    </h2>
    <ul className="text-gray-500 dark:text-gray-400 font-medium">
      {links.map((link, index) => (
        <li className="mb-4" key={index}>
          <a href={link.href} className="hover:underline">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a
              href="https://organicmilestone.com/"
              className="flex items-center"
            >
              <img
                src="/assets/images/Om.png"
                height={64}
                width={64}
                alt="Organic Milestone Logo"
              />
              <span className="self-center text-2xl ml-2 font-semibold whitespace-nowrap dark:text-white">
                Organic Milestone
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <FooterList
              title="Links"
              links={[
                { label: "Product", href: "/product" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ]}
            />
            <FooterList
              title="Internal Information"
              links={[
                { label: "Teams", href: "/about#teams" },
                { label: "Commitments", href: "/about#commitments" },
              ]}
            />
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://organicmilestone.com/" className="hover:underline">
              Organic Milestone™
            </a>
            . All Rights Reserved. Developed by Sydek
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <Send className="w-4 h-4" aria-hidden="true" />
              <span className="sr-only">Telegram channel</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <Youtube className="w-4 h-4" aria-hidden="true" />
              <span className="sr-only">YouTube channel</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <Instagram className="w-4 h-4" aria-hidden="true" />
              <span className="sr-only">Instagram page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
