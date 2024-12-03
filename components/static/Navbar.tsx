"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/taskcortex-logo.svg";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { signInAction } from "@/actions/auth-action";
import { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    const navbar = document.getElementsByTagName("nav")[0];
    window.addEventListener("scroll", function () {
      // console.log(window.scrollY);
      if (window.scrollY > 1) {
        navbar.classList.replace("bg-transparent", "bg-white");
      } else {
        navbar.classList.replace("bg-white", "bg-transparent");
      }
    });
  });

  return (
    <nav className="fixed w-full top-0 z-50 bg-transparent transition-all duration-300">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Image src={Logo} width={175} height={175} alt="Logo" />
        </Link>
        <div className="hidden md:flex gap-4 items-center">
          <Link
            href="#about"
            className="text-lg font-medium hover:underline underline-offset-4 "
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#features"
            className="text-lg font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Features
          </Link>
          <Link
            href="https://github.com/rullyvarelio"
            className="text-lg font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Repo
          </Link>
          <form action={signInAction}>
            <Button className="text-lg font-medium">Login</Button>
          </form>
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
              <Link
                href="#about"
                className="text-lg font-medium hover:underline underline-offset-4"
                prefetch={false}
              >
                About
              </Link>
              <Link
                href="#features"
                className="text-lg font-medium hover:underline underline-offset-4"
                prefetch={false}
              >
                Features
              </Link>
              <Link
                href="https://github.com/rullyvarelio"
                className="text-lg font-medium hover:underline underline-offset-4"
                prefetch={false}
              >
                Repo
              </Link>
              <form action={signInAction}>
                <Button className="text-lg font-medium">Login</Button>
              </form>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
