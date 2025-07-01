const Contact = () => {
  return (
    <section id="contact" className="relative py-20 md:py-[120px]">
      <div className="absolute left-0 top-0 -z-[1] h-full w-full dark:bg-dark"></div>
      <div className="absolute left-0 top-0 -z-[1] h-1/2 w-full bg-[#E9F9FF] dark:bg-dark-700 lg:h-[45%] xl:h-1/2"></div>
      <div className="container px-4">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="ud-contact-content-wrapper">
              <div className="ud-contact-title mb-12 lg:mb-[150px]">
                <span className="mb-6 block text-base font-medium text-dark dark:text-white">
                  CONTACT US
                </span>
                <h2 className="max-w-[260px] text-[35px] font-semibold leading-[1.14] text-dark dark:text-white">
                  Let&apos;s talk about your problem.
                </h2>
              </div>
              <div className="mb-12 flex flex-wrap justify-between lg:mb-0">
                <div className="mb-8 flex w-[330px] max-w-full">
                  <div className="mr-6 text-[32px] text-primary">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      className="fill-current"
                    >
                      <path d="M28 7H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h24c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 4l-12 7.5L4 11v-2l12 7.5L28 9v2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-[18px] text-lg font-semibold text-dark dark:text-white">
                      Email Us
                    </h3>
                    <p className="text-base text-body-color dark:text-dark-6">
                      zrythsolutions@gmail.com
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex w-[330px] max-w-full">
                  <div className="mr-6 text-[32px] text-primary">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      className="fill-current"
                    >
                      <path d="M25.64 20.347l-3.593-1.535c-.694-.297-1.584-.049-2.063.541l-1.547 1.898c-2.87-1.02-5.254-3.404-6.273-6.273l1.898-1.547c.59-.479.838-1.369.541-2.063L12.653 7.36c-.317-.742-1.098-1.148-1.888-.98l-3.051.649c-.895.191-1.714 1.089-1.714 2.019 0 9.389 7.611 17 17 17 .93 0 1.828-.819 2.019-1.714l.649-3.051c.168-.79-.238-1.571-.98-1.888z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-[18px] text-lg font-semibold text-dark dark:text-white">
                      Call Us
                    </h3>
                    <p className="text-base text-body-color dark:text-dark-6">
                      +91-9870661438
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex w-[330px] max-w-full">
                  <div className="mr-6 text-[32px] text-primary">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      className="fill-current"
                    >
                      <path d="M27.26 3.74H4.74C3.23 3.74 2 4.97 2 6.48v19.04c0 1.51 1.23 2.74 2.74 2.74h22.52c1.51 0 2.74-1.23 2.74-2.74V6.48c0-1.51-1.23-2.74-2.74-2.74zM10.28 24.3H6.15V12.08h4.13v12.22zm-2.07-13.93c-1.32 0-2.39-1.07-2.39-2.39s1.07-2.39 2.39-2.39 2.39 1.07 2.39 2.39-1.07 2.39-2.39 2.39zm18.09 13.93h-4.13v-5.95c0-1.54-.03-3.52-2.14-3.52-2.15 0-2.48 1.68-2.48 3.41v6.06h-4.13V12.08h3.96v1.67h.06c.55-1.04 1.9-2.14 3.91-2.14 4.18 0 4.95 2.75 4.95 6.32v6.37z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-[18px] text-lg font-semibold text-dark dark:text-white">
                      Connect With Us
                    </h3>
                    <p className="text-base text-body-color dark:text-dark-6">
                      <a
                        href="https://www.linkedin.com/company/zryth/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        LinkedIn: @zryth
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <div
              className="wow fadeInUp rounded-lg bg-white px-8 py-10 shadow-testimonial dark:bg-dark-2 dark:shadow-none sm:px-10 sm:py-12 md:p-[60px] lg:p-10 lg:px-10 lg:py-12 2xl:p-[60px]"
              data-wow-delay=".2s
              "
            >
              <h3 className="mb-8 text-2xl font-semibold text-dark dark:text-white md:text-[28px] md:leading-[1.42]">
                Send us a Message
              </h3>
              <form>
                <div className="mb-[22px]">
                  <label
                    htmlFor="fullName"
                    className="mb-4 block text-sm text-body-color dark:text-dark-6"
                  >
                    Full Name*
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Your Full Name"
                    className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                  />
                </div>
                <div className="mb-[22px]">
                  <label
                    htmlFor="email"
                    className="mb-4 block text-sm text-body-color dark:text-dark-6"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                  />
                </div>
                <div className="mb-[22px]">
                  <label
                    htmlFor="phone"
                    className="mb-4 block text-sm text-body-color dark:text-dark-6"
                  >
                    Phone*
                  </label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="+91 9876543210"
                    className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                  />
                </div>
                <div className="mb-[30px]">
                  <label
                    htmlFor="message"
                    className="mb-4 block text-sm text-body-color dark:text-dark-6"
                  >
                    Message*
                  </label>
                  <textarea
                    name="message"
                    rows={1}
                    placeholder="Tell us about your project requirements..."
                    className="w-full resize-none border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                  ></textarea>
                </div>
                <div className="mb-0">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-10 py-3 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-primary/90"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
