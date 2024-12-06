"use client";
import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { signInAction } from "@/actions/auth-action";
import { useEffect, useState } from "react";
import { ThemeToggler } from "./ThemeToggler";
import { useTheme } from "next-themes";

function Links() {
  return (
    <>
      <Link
        href="#features"
        className="text-lg font-medium hover:underline underline-offset-4"
        prefetch={false}
      >
        Features
      </Link>
      <Link
        href="#contact"
        className="text-lg font-medium hover:underline underline-offset-4 "
        prefetch={false}
      >
        Contact
      </Link>
      <form action={signInAction}>
        <Button className="text-lg font-medium">Login</Button>
      </form>
      <ThemeToggler />
    </>
  );
}

export default function Navbar() {
  const { resolvedTheme } = useTheme();
  const [logo, setlogo] = useState("/taskcortex-logo.svg");

  useEffect(() => {
    const updateLogo = () => {
      if (resolvedTheme === "dark") {
        setlogo("/taskcortex-logo-dark.svg");
      } else {
        setlogo("/taskcortex-logo.svg");
      }
    };
    updateLogo();
  }, [resolvedTheme]);

  useEffect(() => {
    const navbar = document.getElementsByTagName("nav")[0];
    window.addEventListener("scroll", function () {
      if (window.scrollY > 1) {
        navbar.classList.add("shadow");
      }
      if (window.scrollY < 1) {
        navbar.classList.remove("shadow");
      }
    });
  });

  return (
    <nav className="fixed w-full top-0 z-50 bg-white dark:bg-neutral-900 transition-all duration-300">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Image src={logo} width={175} height={175} alt="Logo" priority />
        </Link>
        <div className="hidden md:flex gap-4 items-center">
          <Links />
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden md:hidden">
              <Menu />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid w-[200px] px-4 gap-y-5">
              <Links />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
