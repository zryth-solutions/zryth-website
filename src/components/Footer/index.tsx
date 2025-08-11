import Image from "next/image";
import Link from "next/link";
import { FooterDotPattern } from "../../assets/svg";

const Footer = () => {
  return (
    <footer
      className="wow fadeInUp relative z-10 bg-[#090E34] pt-20 lg:pt-[100px]"
      data-wow-delay=".15s"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12">
            <div className="mb-10 w-full">
              <Link href="/" className="mb-6 inline-block max-w-[160px]">
                <Image
                  src="/images/logo/zryth_logo_footer.svg"
                  alt="Zryth"
                  width={140}
                  height={30}
                  className="max-w-full"
                />
              </Link>
              <p className="mb-8 max-w-[270px] text-base text-gray-7">
                Building intelligent software solutions that transform businesses through the power of AI and innovation.
              </p>
              <div className="-mx-3 flex items-center">
                {/* <Link
                  aria-label="social link"
                  href="#"
                  className="px-3 text-gray-7 hover:text-white"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                  >
                    <path d="M16.294 8.86875H14.369H13.6815V8.18125V6.05V5.3625H14.369H15.8128C16.1909 5.3625 16.5003 5.0875 16.5003 4.675V1.03125C16.5003 0.653125 16.2253 0.34375 15.8128 0.34375H13.3034C10.5878 0.34375 8.69714 2.26875 8.69714 5.12187V8.1125V8.8H8.00964H5.67214C5.19089 8.8 4.74402 9.17812 4.74402 9.72812V12.2031C4.74402 12.6844 5.12214 13.1313 5.67214 13.1313H7.94089H8.62839V13.8188V20.7281C8.62839 21.2094 9.00652 21.6562 9.55652 21.6562H12.7878C12.994 21.6562 13.1659 21.5531 13.3034 21.4156C13.4409 21.2781 13.544 21.0375 13.544 20.8312V13.8531V13.1656H14.2659H15.8128C16.2596 13.1656 16.6034 12.8906 16.6721 12.4781V12.4438V12.4094L17.1534 10.0375C17.1878 9.79688 17.1534 9.52187 16.9471 9.24687C16.8784 9.075 16.569 8.90312 16.294 8.86875Z" />
                  </svg>
                </Link> */}
                {/* <Link
                  aria-label="social link"
                  href="#"
                  className="px-3 text-gray-7 hover:text-white"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                  >
                    <path d="M20.1236 5.91236C20.2461 5.76952 20.0863 5.58286 19.905 5.64972C19.5004 5.79896 19.1306 5.8974 18.5837 5.95817C19.2564 5.58362 19.5693 5.04828 19.8237 4.39259C19.885 4.23443 19.7 4.09092 19.5406 4.16647C18.8931 4.47345 18.1945 4.70121 17.4599 4.83578C16.7338 4.11617 15.6988 3.6665 14.5539 3.6665C12.3554 3.6665 10.5725 5.32454 10.5725 7.36908C10.5725 7.65933 10.6081 7.94206 10.6752 8.21276C7.51486 8.06551 4.6968 6.71359 2.73896 4.64056C2.60477 4.49848 2.36128 4.51734 2.27772 4.69063C2.05482 5.15296 1.93056 5.66584 1.93056 6.20582C1.93056 7.49014 2.6332 8.62331 3.70132 9.28732C3.22241 9.27293 2.76441 9.17961 2.34234 9.02125C2.13684 8.94416 1.90127 9.07964 1.92888 9.28686C2.14084 10.8781 3.42915 12.1909 5.09205 12.5011C4.75811 12.586 4.40639 12.6311 4.04253 12.6311C3.95431 12.6311 3.86685 12.6284 3.78019 12.6231C3.55967 12.6094 3.38044 12.8067 3.47499 12.9954C4.09879 14.2404 5.44575 15.1096 7.0132 15.1367C5.65077 16.13 3.93418 16.7218 2.06882 16.7218C1.83882 16.7218 1.74015 17.0175 1.9442 17.1178C3.52016 17.8924 5.31487 18.3332 7.22182 18.3332C14.545 18.3332 18.549 12.6914 18.549 7.79843C18.549 7.63827 18.545 7.47811 18.5377 7.31945C19.1321 6.92012 19.6664 6.44528 20.1236 5.91236Z" />
                  </svg>
                </Link> */}
                <Link
                  aria-label="LinkedIn"
                  href="https://www.linkedin.com/company/zryth/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 text-gray-7 hover:text-white"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                  >
                    <path d="M18.8065 1.8335H3.16399C2.42474 1.8335 1.83334 2.42489 1.83334 3.16414V18.8362C1.83334 19.5459 2.42474 20.1668 3.16399 20.1668H18.7473C19.4866 20.1668 20.078 19.5754 20.078 18.8362V3.13457C20.1371 2.42489 19.5457 1.8335 18.8065 1.8335ZM7.24464 17.4168H4.55379V8.69371H7.24464V17.4168ZM5.88443 7.48135C4.99733 7.48135 4.31721 6.77167 4.31721 5.91414C4.31721 5.05661 5.0269 4.34694 5.88443 4.34694C6.74196 4.34694 7.45163 5.05661 7.45163 5.91414C7.45163 6.77167 6.8011 7.48135 5.88443 7.48135ZM17.4463 17.4168H14.7554V13.1883C14.7554 12.183 14.7258 10.8523 13.336 10.8523C11.9167 10.8523 11.7097 11.976 11.7097 13.0996V17.4168H9.01884V8.69371H11.6506V9.90608H11.6801C12.0645 9.1964 12.9221 8.48672 14.2527 8.48672C17.0027 8.48672 17.5054 10.2609 17.5054 12.6856V17.4168H17.4463Z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-white">
                About Us
              </h4>
              <ul>
                <li>
                  <Link
                    href="#home"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#projects"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#testimonials"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    Testimonial
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-white">
                Features
              </h4>
              <ul>
                <li>
                  <Link
                    href="#projects"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    How it works
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    Privacy policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    Refund policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-white">
                Our Products
              </h4>
              <ul>
                <li>
                  <Link
                    href="#"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    LineIcons
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    Next.js Templates
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    TailAdmin
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    PlainAdmin
                  </Link>
                </li>
              </ul>
            </div>
          </div> */}
          <div className="w-full px-4 md:w-2/3 lg:w-6/12 xl:w-3/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-white">
                Useful Links
              </h4>
              <ul>
                <li>
                  <Link
                    href="#faq"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    FAQ
                  </Link>
                </li>
                {/* <li>
                  <Link
                    href="#"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    Blogs
                  </Link>
                </li> */}
                <li>
                  <Link
                    href="#contact"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-[#8890A4] border-opacity-40 py-8 lg:mt-[60px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-2/3 lg:w-1/2">
              <div className="my-1">
                <div className="-mx-3 flex items-center justify-center md:justify-start">
                  <Link
                    href="#"
                    className="px-3 text-base text-gray-7 hover:text-white hover:underline"
                  >
                    Privacy policy
                  </Link>
                  <Link
                    href="#"
                    className="px-3 text-base text-gray-7 hover:text-white hover:underline"
                  >
                    Legal notice
                  </Link>
                  <Link
                    href="#"
                    className="px-3 text-base text-gray-7 hover:text-white hover:underline"
                  >
                    Terms of service
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/3 lg:w-1/2">
              <div className="my-1 flex justify-center md:justify-end">
                <p className="text-base text-gray-7">
                  © 2025 Zryth. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <span className="absolute left-0 top-0 z-[-1] aspect-[95/82] w-full max-w-[570px]">
          <Image src="/images/footer/shape-1.svg" alt="shape" fill />
        </span>

        <span className="absolute bottom-0 right-0 z-[-1] aspect-[31/22] w-full max-w-[372px]">
          <Image src="/images/footer/shape-3.svg" alt="shape" fill />
        </span>

        <span className="absolute right-0 top-0 z-[-1]">
          <FooterDotPattern />
        </span>
      </div>
    </footer>
  );
};

export default Footer;
