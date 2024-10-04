import FAQ from "@/components/FAQ";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ThankYou from "@/components/ThankYou";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[1920px] *:px-4 *:sm:px-10 *:lg:px-20">
      <section>
        <Hero />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <WhyChooseUs />
      </section>
      <section>
        <Feedback />
      </section>
      <section>
        <FAQ />
      </section>
      <section>
        <ThankYou />
      </section>
    </main>
  );
}
