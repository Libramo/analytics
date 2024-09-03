"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

// For the darkmode switch button
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { navigationItems } from "@/data";

// For the modal window
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "./ui/Modal";
import Image from "next/image";
import { ContactForm } from "./ContactForm";

export const Header = () => {
  const { setTheme } = useTheme();

  //   For the mobile case
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="w-full z-40 fixed top-0 left-0 bg-background">
      <div className="container relative mx-auto min-h-20 flex items-center justify-between lg:grid lg:grid-cols-3">
        {/* BLY Analytics Logo on the Left */}
        <div className="flex justify-start">
          <p className="font-semibold">BLY Analytics</p>
        </div>

        {/* Navigation Menu in the Center */}
        <div className="hidden lg:flex justify-center">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-4">
              {navigationItems.map((item, index) => (
                <NavigationMenuLink key={index}>
                  <Link href={item.href} passHref legacyBehavior>
                    <Button variant="default">
                      {/* Use a fragment or a span to avoid extra anchor tags */}
                      {item.title}
                    </Button>
                  </Link>
                </NavigationMenuLink>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Contact Button and Theme Toggle on the Right */}
        <div className="flex justify-end items-center gap-4">
          <div className="">
            <Modal>
              <ModalTrigger>
                {/* <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                  Contactez-nous
                </span> */}
                Nous contacter
              </ModalTrigger>
              <ModalBody>
                <ModalContent>
                  <ContactForm />
                </ModalContent>
              </ModalBody>
            </Modal>
          </div>
          {/* <Button variant="default">Nous contacter</Button> */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="default" size="icon">
                <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex lg:hidden items-center justify-end w-12">
          <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
          {isOpen && (
            <div className="absolute top-20 right-0 w-full bg-background shadow-lg py-4 container gap-8 border-t flex flex-col">
              {navigationItems.map((item) => (
                <div key={item.title} className="flex flex-col gap-2">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="flex justify-between items-center"
                    >
                      <span className="text-lg">{item.title}</span>
                      <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                    </Link>
                  ) : (
                    <p className="text-lg">{item.title}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
