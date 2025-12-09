import Image from "next/image";
import Link from "next/link";
import { HeroDotPattern, CheckmarkIcon } from "../../assets/svg";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden bg-[#090E34] pt-[120px] md:pt-[130px] lg:pt-[160px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <div
                className="hero-content wow fadeInUp mx-auto max-w-[780px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                  We Build Enterprise AI Products With R&D and Scale That Matters
                </h1>
                <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
                  Transform your business with intelligent AI agents and custom knowledge bases. From automated book quality control to intelligent customer support, we build AI solutions that integrate seamlessly into your existing workflows and deliver unprecedented efficiency.
                </p>
                <ul className="mb-10 flex flex-wrap items-center justify-center gap-5">
                  <li>
                    <Link
                      href="#calendly-hero"
                      className="inline-flex items-center justify-center rounded-md bg-white px-7 py-[14px] text-center text-base font-medium text-dark shadow-1 transition duration-300 ease-in-out hover:bg-gray-2"
                    >
                      Book a Slot
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#about"
                      className="flex items-center gap-4 rounded-md bg-white/[0.12] px-6 py-[14px] text-base font-medium text-white transition duration-300 ease-in-out hover:bg-white hover:text-dark"
                    >
                      <CheckmarkIcon width={24} height={24} />
                      Learn More
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4">
              <div
                className="wow fadeInUp relative z-10 mx-auto max-w-[845px]"
                data-wow-delay=".25s"
              >
                <div className="mt-16">
                  <Image
                    src="/images/hero/zryth_dashboard.png"
                    alt="Zryth AI Solutions Dashboard"
                    className="mx-auto max-w-full rounded-t-xl rounded-tr-xl"
                    width={845}
                    height={316}
                  />
                </div>
                <div className="absolute -left-9 bottom-0 z-[-1]">
                  <HeroDotPattern />
                </div>
                <div className="absolute -right-6 -top-6 z-[-1]">
                  <HeroDotPattern />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
