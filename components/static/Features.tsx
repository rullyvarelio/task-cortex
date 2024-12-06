import Image from "next/image";
import DemoImage from "@/public/dark-project-app-screenshot.png";
import { Brain, Network, CalendarCheck2 } from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight sm:text-5xl">
                Smarter Task Management
              </p>
              <p className="mt-6 text-lg/8 text-muted-foreground">
                TaskCortex focus on leveraging AI-driven innovation to simplify
                task management, optimize workflows, and unlock long-term
                productivity and efficiency for individuals and teams.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-semibold">
                    <Brain className="absolute left-1 top-1 size-5" />
                    AI-Powered Task Prioritization.{" "}
                  </dt>
                  <dd className="inline">
                    Automatically organize and prioritize tasks based on
                    deadlines, importance, and workload.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold">
                    <Network className="absolute left-1 top-1 size-5" />
                    Seamless Collaboration.{" "}
                  </dt>
                  <dd className="inline">
                    Share tasks, set reminders, and track progress with your
                    team in real-time.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold">
                    <CalendarCheck2 className="absolute left-1 top-1 size-5" />
                    Smart Scheduling.{" "}
                  </dt>
                  <dd className="inline">
                    Optimize your day with AI-driven recommendations for task
                    scheduling and time management.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <Image
            src={DemoImage}
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-md shadow-gray-900 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width="2432"
            height="1442"
          />
        </div>
      </div>
    </section>
  );
}
