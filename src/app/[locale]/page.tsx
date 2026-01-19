import Accordion from "./sections/Accordion";
import BannerHeader from "./sections/BannerHeader";
import BannerMid from "./sections/BannerMid";
import Faq from "./sections/Faq";
import Features from "./sections/Features";
import Steps from "./sections/Steps";
import Tabs from "./sections/Tabs";
import Testimonials from "./sections/Testimonials";
import TrustedBy from "./sections/TrustedBy";

export default function Home() {
  return (
    <div className="relative w-full bg-slate-100">
      <BannerHeader />
      <Accordion />
      <Tabs />
      <Features />
      <Testimonials />
      <TrustedBy />
      <Steps />
      <BannerMid />
      <Faq />
    </div>
  );
}
