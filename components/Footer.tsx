import { Mail, Phone } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  const navigationItems = [
    {
      title: "Home",
      href: "/",
      description: "",
    },
    {
      title: "Product",
      description: "Managing a small business today is already tough.",
      items: [
        {
          title: "Reports",
          href: "/reports",
        },
        {
          title: "Statistics",
          href: "/statistics",
        },
        {
          title: "Dashboards",
          href: "/dashboards",
        },
        {
          title: "Recordings",
          href: "/recordings",
        },
      ],
    },
    {
      title: "Company",
      description: "Managing a small business today is already tough.",
      items: [
        {
          title: "About us",
          href: "/about",
        },
        {
          title: "Fundraising",
          href: "/fundraising",
        },
        {
          title: "Investors",
          href: "/investors",
        },
        {
          title: "Contact us",
          href: "/contact",
        },
      ],
    },
  ];

  return (
    <div className="w-full pt-40 lg:pt-60 pb-20 lg:pb-40 text-foreground bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="flex gap-8 flex-col items-start">
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                BLY Analytics™
              </h2>
              <p className="text-lg max-w-lg leading-relaxed tracking-tight text-foreground/75 text-left"></p>
            </div>
            <div className="flex gap-20 flex-row">
              <div className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-foreground/75 text-left">
                <p className="mb-5">Balbala, Oum Salama, Djibouti</p>
                <p className="mb-4 flex items-center space-x-2 p">
                  <Phone size={20} /> (+253) 21 36 86 97
                </p>
                <p className="flex items-center space-x-2 p">
                  <Mail size={20} />
                  <a href="mailto:contact@bly.consulting">
                    contact@bly.consulting
                  </a>
                </p>
              </div>
            </div>
          </div>
          {/* Additional content */}
        </div>
      </div>
    </div>
  );
};
