"use client";
// import { Button } from "../ui/button";
// import { MoveRight } from "lucide-react";
// import { signIn, useSession } from "next-auth/react";

export default function Hero() {
  // const session = useSession();
  // const username = session?.data?.user?.username;
  return (
    <section className="min-h-screen flex justify-center items-center ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-current md:text-5xl lg:text-6xl">
          Your AI-driven brain for smarter,
          <br className="hidden lg:block md:block" /> seamless task management.
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          TaskCortex is an AI-Driven Brain for Task Management, Streamlined
          Organization, Enhanced Collaboration, and Effortless Productivity in
          Every Aspect of Your Life
        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          {/* <Button
            onClick={() =>
              signIn("google", { redirectTo: `/user/${username}` })
            }
            size={"lg"}
            className="text-lg"
          >
            Get Started
            <MoveRight fontSize={"2rem"} />
          </Button> */}
        </div>
      </div>
    </section>
  );
}
