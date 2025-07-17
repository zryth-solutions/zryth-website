import Image from "next/image";
import Link from "next/link";
import { GradientDecorative } from "../../assets/svg";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 max-w-[540px] lg:mb-0">
                <h2 className="mb-5 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[40px] sm:leading-[1.2]">
                  Empowering Digital Transformation with AI Innovation
                </h2>
                <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
                  At Zryth, we specialize in building cutting-edge software solutions that harness the power of Artificial Intelligence to solve real-world problems across industries. Whether you&apos;re a startup, enterprise, or scaling business, we bring your vision to life with smart, scalable, and user-centric technology.
                  <br /> <br />
                  Our agile team is dedicated to creating high-performance digital products that drive growth, optimize operations, and enhance customer experience. With a passion for innovation and a commitment to quality, we&apos;re helping businesses stay ahead in a fast-evolving digital world.
                </p>

                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-md px-7 py-3 text-center text-base font-medium text-white duration-300"
                  style={{
                    background: 'radial-gradient(circle at 30% 40%, #3A4D73, #1A2B45)'
                  }}
                >
                  Start Your Project
                </Link>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="-mx-2 flex flex-wrap sm:-mx-4 lg:-mx-2 xl:-mx-4">
                <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                  <div
                    className={`relative mb-4 sm:mb-8 sm:h-[400px] md:h-[540px] lg:h-[400px] xl:h-[500px] `}
                  >
                    <Image
                      src="/images/about/about-image-01.jpg"
                      alt="AI Development Team"
                      fill
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>

                <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                  <div className="relative mb-4 sm:mb-8 sm:h-[220px] md:h-[346px] lg:mb-4 lg:h-[225px] xl:mb-8 xl:h-[310px]">
                    <Image
                      src="/images/about/about-image-02.jpg"
                      alt="Software Solutions"
                      fill
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div
                    className="relative z-10 mb-4 flex items-center justify-center overflow-hidden px-6 py-12 sm:mb-8 sm:h-[160px] sm:p-5 lg:mb-4 xl:mb-8"
                    style={{
                      background: 'radial-gradient(circle at 30% 40%, #3A4D73, #1A2B45)'
                    }}
                  >
                    <div>
                      <span className="block text-5xl font-extrabold text-white">
                        12+
                      </span>
                      <span className="block text-base font-semibold text-white">
                        Successful
                      </span>
                      <span className="block text-base font-medium text-white text-opacity-70">
                        Projects Delivered
                      </span>
                    </div>
                    <div>
                      <span className="absolute left-0 top-0 -z-10">
                        <GradientDecorative
                          width={106}
                          height={144}
                          gradientId="paint0_linear_1416_214"
                        />
                      </span>
                      <span className="absolute right-0 top-0 -z-10">
                        <GradientDecorative
                          width={130}
                          height={97}
                          gradientId="paint0_linear_1416_215"
                        />
                      </span>
                      <span className="absolute bottom-0 right-0 -z-10">
                        <GradientDecorative
                          width={175}
                          height={104}
                          gradientId="paint0_linear_1416_216"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
