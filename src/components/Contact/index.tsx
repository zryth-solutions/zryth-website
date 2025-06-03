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
                      width="34"
                      height="25"
                      viewBox="0 0 34 25"
                      className="fill-current"
                    >
                      <path d="M30.5156 0.960938H3.17188C1.42188 0.960938 0 2.38281 0 4.13281V20.9219C0 22.6719 1.42188 24.0938 3.17188 24.0938H30.5156C32.2656 24.0938 33.6875 22.6719 33.6875 20.9219V4.13281C33.6875 2.38281 32.2656 0.960938 30.5156 0.960938ZM30.5156 2.875C30.7891 2.875 31.0078 2.92969 31.2266 3.09375L17.6094 11.3516C17.1172 11.625 16.5703 11.625 16.0781 11.3516L2.46094 3.09375C2.67969 2.98438 2.89844 2.875 3.17188 2.875H30.5156ZM30.5156 22.125H3.17188C2.51562 22.125 1.91406 21.5781 1.91406 20.8672V5.00781L15.0391 12.9922C15.5859 13.3203 16.1875 13.4844 16.7891 13.4844C17.3906 13.4844 17.9922 13.3203 18.5391 12.9922L31.6641 5.00781V20.8672C31.7734 21.5781 31.1719 22.125 30.5156 22.125Z" />
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
                      <path d="M25.3 5.7C23.1 3.5 20.2 2.3 17.1 2.3c-6.2 0-11.2 5-11.2 11.2 0 2 0.5 3.9 1.5 5.6L5.8 26.2l7.3-1.9c1.6 0.9 3.4 1.4 5.3 1.4h0c6.2 0 11.2-5 11.2-11.2C29.5 11.4 28.3 8.5 25.3 5.7zM18.1 24.4h0c-1.7 0-3.3-0.4-4.8-1.2l-0.3-0.2-3.3 0.9 0.9-3.2-0.2-0.3c-0.8-1.3-1.2-2.8-1.2-4.4 0-4.6 3.7-8.3 8.3-8.3 2.2 0 4.3 0.9 5.9 2.4 1.6 1.6 2.4 3.6 2.4 5.9C26.4 20.7 22.7 24.4 18.1 24.4z" />
                      <path d="M22.7 17.9c-0.3-0.1-1.7-0.8-1.9-0.9s-0.5-0.1-0.7 0.1c-0.2 0.3-0.8 0.9-1 1.1s-0.4 0.2-0.7 0.1c-0.3-0.1-1.3-0.5-2.5-1.5-0.9-0.8-1.5-1.8-1.7-2.1s0-0.5 0.1-0.6c0.1-0.1 0.3-0.3 0.4-0.4s0.2-0.2 0.3-0.4c0.1-0.2 0.1-0.3 0-0.4s-0.7-1.7-1-2.3c-0.3-0.6-0.6-0.5-0.7-0.5h-0.6c-0.2 0-0.5 0.1-0.8 0.3s-1 1-1 2.4c0 1.4 1 2.8 1.2 3s2 3.1 4.9 4.3c0.7 0.3 1.2 0.5 1.6 0.6 0.7 0.2 1.3 0.2 1.8 0.1 0.6-0.1 1.7-0.7 1.9-1.3s0.2-1.2 0.1-1.3C23.2 18.1 23 18 22.7 17.9z" />
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
                      <path d="M27.26 4.74H4.74C3.23 4.74 2 5.97 2 7.48V24.52C2 26.03 3.23 27.26 4.74 27.26H27.26C28.77 27.26 30 26.03 30 24.52V7.48C30 5.97 28.77 4.74 27.26 4.74ZM27.26 7.48V9.85L16 15.48L4.74 9.85V7.48H27.26ZM4.74 24.52V12.19L15.34 17.52C15.54 17.63 15.77 17.68 16 17.68C16.23 17.68 16.46 17.63 16.66 17.52L27.26 12.19V24.52H4.74Z" />
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
