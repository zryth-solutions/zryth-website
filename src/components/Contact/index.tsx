"use client";

import React, { useState } from 'react';
import {
  EmailIcon,
  PhoneIcon,
  LinkedInIcon,
  CheckIcon,
  ErrorIcon,
  LoadingSpinner
} from '../../assets/svg';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

interface FormState {
  isSubmitting: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [formState, setFormState] = useState<FormState>({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    message: ''
  });

  // Replace with your actual Web3Forms access key
  const ACCESS_KEY = "456de0b8-2aaa-4c99-a986-006da8918178";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFormState({
      isSubmitting: true,
      isSuccess: false,
      isError: false,
      message: ''
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          from_name: "Zryth Website Contact Form",
          subject: "New Contact Message from Zryth Website"
        }),
      });

      const result = await response.json();

      if (result.success) {
        setFormState({
          isSubmitting: false,
          isSuccess: true,
          isError: false,
          message: "Your form has been submitted! We will contact you shortly. Thanks for reaching us."
        });

        // Reset form data
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        throw new Error(result.message || "Something went wrong");
      }
    } catch (error) {
      setFormState({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: "Failed to send message. Please try again or contact us directly."
      });
    }
  };

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
                    <EmailIcon />
                  </div>
                  <div>
                    <h3 className="mb-[18px] text-lg font-semibold text-dark dark:text-white">
                      Email Us
                    </h3>
                    <p className="text-base text-body-color dark:text-dark-6">
                      <a
                        href="mailto:zrythsolutions@gmail.com"
                        className="hover:text-primary transition-colors"
                      >
                        zrythsolutions@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex w-[330px] max-w-full">
                  <div className="mr-6 text-[32px] text-primary">
                    <PhoneIcon />
                  </div>
                  <div>
                    <h3 className="mb-[18px] text-lg font-semibold text-dark dark:text-white">
                      Call Us
                    </h3>
                    <p className="text-base text-body-color dark:text-dark-6">
                      <a
                        href="tel:+91-9870661438"
                        className="hover:text-primary transition-colors"
                      >
                        +91-9870661438
                      </a>
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex w-[330px] max-w-full">
                  <div className="mr-6 text-[32px] text-primary">
                    <LinkedInIcon />
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
              data-wow-delay=".2s"
            >
              <h3 className="mb-8 text-2xl font-semibold text-dark dark:text-white md:text-[28px] md:leading-[1.42]">
                Send us a Message
              </h3>

              {/* Success Message */}
              {formState.isSuccess && (
                <div className="mb-6 flex items-center space-x-3 rounded-lg bg-green-50 border border-green-200 p-4 dark:bg-green-900/20 dark:border-green-800">
                  <div className="flex-shrink-0">
                    <CheckIcon
                      width={24}
                      height={24}
                      className="h-6 w-6 text-green-600 dark:text-green-400"
                    />
                  </div>
                  <p className="text-sm text-green-800 dark:text-green-200">
                    {formState.message}
                  </p>
                </div>
              )}

              {/* Error Message */}
              {formState.isError && (
                <div className="mb-6 flex items-center space-x-3 rounded-lg bg-red-50 border border-red-200 p-4 dark:bg-red-900/20 dark:border-red-800">
                  <div className="flex-shrink-0">
                    <ErrorIcon
                      width={24}
                      height={24}
                      className="h-6 w-6 text-red-600 dark:text-red-400"
                    />
                  </div>
                  <p className="text-sm text-red-800 dark:text-red-200">
                    {formState.message}
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit}>
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
                    id="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Your Full Name"
                    required
                    disabled={formState.isSubmitting}
                    className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white disabled:opacity-50"
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
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    disabled={formState.isSubmitting}
                    className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white disabled:opacity-50"
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
                    id="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 9876543210"
                    required
                    disabled={formState.isSubmitting}
                    className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white disabled:opacity-50"
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
                    id="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your requirements..."
                    required
                    disabled={formState.isSubmitting}
                    className="w-full resize-none border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white disabled:opacity-50"
                  ></textarea>
                </div>
                <div className="mb-0">
                  <button
                    type="submit"
                    disabled={formState.isSubmitting}
                    className="inline-flex items-center justify-center rounded-md bg-primary px-10 py-3 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formState.isSubmitting ? (
                      <>
                        <LoadingSpinner className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
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
