import Navbar from "@/components/static/Navbar";
import Hero from "@/components/static/Hero";
import Features from "../components/static/Features";
import Footer from "@/components/static/Footer";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container mx-auto">
        <Separator />
      </div>
      <Features />
      <div className="container mx-auto">
        <Separator />
      </div>
      <Footer />
    </>
  );
}
