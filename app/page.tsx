import Navbar from "@/components/static/Navbar";
import Hero from "@/components/static/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <section id="about" className="w-100 border">
        about
      </section>
      <section id="features" className="w-100 border">
        features
      </section>
    </>
  );
}
