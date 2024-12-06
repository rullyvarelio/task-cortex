"use client";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "../ui/separator";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Footer() {
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
  return (
    <footer className="rounded-lg shadow m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <Image src={logo} width={175} height={175} alt="Logo" />
          </Link>{" "}
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-muted-foreground sm:mb-0 ">
            <li>
              <Link
                href="https://www.github.com/rullyvarelio"
                className="hover:underline me-4 md:me-6"
              >
                About
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <Separator className="my-4" />
        <span className="block text-sm text-muted-foreground sm:text-center">
          © 2024{" "}
          <Link
            href="https://www.github.com/rullyvarelio"
            className="hover:underline"
          >
            RullyVarelio
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
