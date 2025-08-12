"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

import menuData from "./menuData";

const Header = () => {
  const pathUrl = usePathname();
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        navbarOpen
      ) {
        setNavbarOpen(false);
      }
    };

    if (navbarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [navbarOpen]);

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: any) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const handleMenuItemClick = (path?: string) => {
    setNavbarOpen(false);
    if (path) {
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <header
        className={`ud-header left-0 top-0 flex w-full items-center ${
          sticky
            ? `shadow-nav fixed border-b border-stroke bg-white/80 backdrop-blur-[5px] dark:border-dark-3/20 dark:bg-dark/10 ${navbarOpen ? "z-[9998]" : "z-[999]"}`
            : `absolute bg-transparent ${navbarOpen ? "z-[9998]" : "z-40"}`
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4">
              <Link
                href="/"
                className={`navbar-logo block w-full ${
                  sticky ? "py-2" : "py-5"
                }  sticky || pathUrl === "/careers" ? "text-white" : "text-dark"
                } ${sticky ? "py-2" : "py-5"} `}
              >
                {pathUrl === "/careers" && !sticky ? (
                  <>
                    <svg
                      width="200"
                      height="60"
                      viewBox="0 0 200 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="header-logo w-full dark:hidden"
                    >
                      <circle
                        cx="30"
                        cy="30"
                        r="25"
                        stroke="#4285F4"
                        strokeWidth="5"
                        fill="none"
                      />
                      <text
                        x="70"
                        y="42"
                        fontFamily="Arial, sans-serif"
                        fontSize="36"
                        fontWeight="bold"
                        fill="white"
                      >
                        ZRYTH
                      </text>
                    </svg>
                    <svg
                      width="200"
                      height="60"
                      viewBox="0 0 200 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="header-logo hidden w-full dark:block"
                    >
                      <circle
                        cx="30"
                        cy="30"
                        r="25"
                        stroke="#4285F4"
                        strokeWidth="5"
                        fill="none"
                      />
                      <text
                        x="70"
                        y="42"
                        fontFamily="Arial, sans-serif"
                        fontSize="36"
                        fontWeight="bold"
                        fill="white"
                      >
                        ZRYTH
                      </text>
                    </svg>
                  </>
                ) : pathUrl !== "/" ? (
                  <>
                    <Image
                      src={`/images/logo/zryth-logo-dark.svg`}
                      alt="Zryth"
                      width={240}
                      height={30}
                      className="header-logo w-full dark:hidden"
                    />
                    <Image
                      src={`/images/logo/zryth-logo.svg`}
                      alt="Zryth"
                      width={240}
                      height={30}
                      className="header-logo hidden w-full dark:block"
                    />
                  </>
                ) : (
                  <>
                    <Image
                      src={`${
                        sticky
                          ? "/images/logo/zryth-logo-dark.svg"
                          : "/images/logo/zryth-logo.svg"
                      }`}
                      alt="Zryth"
                      width={140}
                      height={30}
                      className="header-logo w-full dark:hidden"
                    />
                    <Image
                      src={`${
                        sticky
                          ? "/images/logo/zryth-logo-dark.svg"
                          : "/images/logo/zryth-logo.svg"
                      }`}
                      alt="Zryth"
                      width={140}
                      height={30}
                      className="header-logo hidden w-full dark:block"
                    />
                  </>
                )}
              </Link>
            </div>

            <div className="flex w-full items-center justify-between px-4">
              <div>
                {/* Hamburger Menu Button */}
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden z-[9997]"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    } ${pathUrl !== "/" && "!bg-dark dark:!bg-white"} ${
                      pathUrl === "/" && sticky
                        ? "bg-dark dark:bg-white"
                        : "bg-white"
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${
                      navbarOpen ? "opacity-0 " : " "
                    } ${pathUrl !== "/" && "!bg-dark dark:!bg-white"} ${
                      pathUrl === "/" && sticky
                        ? "bg-dark dark:bg-white"
                        : "bg-white"
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    } ${pathUrl !== "/" && "!bg-dark dark:!bg-white"} ${
                      pathUrl === "/" && sticky
                        ? "bg-dark dark:bg-white"
                        : "bg-white"
                    }`}
                  />
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden lg:block">
                  <ul className="flex gap-x-8 xl:gap-x-12">
                    {menuData.map((menuItem, index) =>
                      menuItem.path ? (
                        <li key={index} className="group relative">
                          <Link
                            onClick={(e) => {
                              // If it's an internal page link (starts with /), let it navigate normally
                              if (menuItem.path.startsWith("/")) {
                                return; // Let the default Link behavior handle it
                              }
                              // If it's a hash link (starts with #), prevent default and scroll
                              e.preventDefault();
                              if (menuItem.path) {
                                const element = document.querySelector(
                                  menuItem.path
                                );
                                if (element) {
                                  element.scrollIntoView({
                                    behavior: "smooth",
                                  });
                                }
                              }
                            }}
                            href={menuItem.path}
                            className={`flex py-6 text-base group-hover:text-primary ${
                              pathUrl === "/" && !sticky
                                ? "text-white"
                                : pathUrl === "/careers" && !sticky
                                  ? "text-white"
                                  : "text-black"
                            } ${pathUrl === menuItem?.path && sticky && "!text-primary"}`}
                          >
                            {menuItem.title}
                          </Link>
                        </li>
                      ) : null
                    )}
                  </ul>
                </nav>

                {/* Mobile Menu Overlay */}
                {navbarOpen && (
                  <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-[10000] lg:hidden"
                    style={{ height: "100vh" }}
                  />
                )}

                {/* Mobile Sliding Menu */}
                <div
                  ref={mobileMenuRef}
                  className={`fixed top-0 right-0 h-screen w-80 bg-white dark:bg-dark-2 shadow-xl z-[10001] transform transition-transform duration-300 ease-in-out lg:hidden ${
                    navbarOpen ? "translate-x-0" : "translate-x-full"
                  }`}
                  style={{ backgroundColor: "white", height: "100vh" }}
                >
                  {/* Mobile Menu Header */}
                  <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-2">
                    <Link href="/" onClick={() => setNavbarOpen(false)}>
                      <Image
                        src="/images/logo/zryth-logo-dark.svg"
                        alt="Zryth"
                        width={120}
                        height={24}
                        className="dark:hidden"
                      />
                      <Image
                        src="/images/logo/zryth-logo.svg"
                        alt="Zryth"
                        width={120}
                        height={24}
                        className="hidden dark:block"
                      />
                    </Link>

                    {/* Close Button */}
                    <button
                      onClick={() => setNavbarOpen(false)}
                      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                      aria-label="Close Menu"
                    >
                      <svg
                        className="w-6 h-6 text-dark dark:text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Mobile Menu Items */}
                  <nav className="p-6 bg-white dark:bg-dark-2 h-full overflow-y-auto">
                    <ul className="space-y-4">
                      {menuData.map((menuItem, index) =>
                        menuItem.path ? (
                          <li key={index}>
                            <Link
                              onClick={(e) => {
                                // If it's an internal page link (starts with /), let it navigate normally
                                if (menuItem.path.startsWith("/")) {
                                  setNavbarOpen(false); // Close mobile menu
                                  return; // Let the default Link behavior handle it
                                }
                                // If it's a hash link (starts with #), prevent default and scroll
                                e.preventDefault();
                                if (menuItem.path) {
                                  handleMenuItemClick(menuItem.path);
                                }
                              }}
                              href={menuItem.path}
                              className="block py-3 text-lg font-medium text-dark dark:text-white hover:text-primary dark:hover:text-primary transition-colors duration-200 border-b border-gray-100 dark:border-gray-700"
                            >
                              {menuItem.title}
                            </Link>
                          </li>
                        ) : null
                      )}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
