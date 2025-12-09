import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Utkarsh Agarwal",
    designation: "Client from India",
    content:
      "We made our first project with them and it is wonderful. They understood our needs and developed a tailor made solution for us. Their team is extremely competent and skilled. Looking forward to doing more business with them.",
    image: "/images/testimonials/author-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Shri R & A Enterprises",
    designation: "Client from India",
    content:
      "Best work ever! The team at Zryth delivered exceptional results that exceeded our expectations. Highly professional and skilled developers.",
    image: "/images/testimonials/author-02.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-gray-1 py-20 dark:bg-dark-2 md:py-[120px]">
      <div className="container px-4">
        <SectionTitle
          subtitle="Testimonials"
          title="What Our Clients Say"
          paragraph="Real reviews from our clients on Trustpilot. We're proud to maintain a 4.5-star rating by delivering exceptional AI solutions and product development services."
          width="640px"
          center
        />

        {/* Trustpilot Badge */}
        <div className="mt-8 flex justify-center">
          <a
            href="https://www.trustpilot.com/review/zryth.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 shadow-md transition-all hover:shadow-lg dark:bg-dark"
          >
            <div className="flex items-center gap-1">
              {[...Array(4)].map((_, i) => (
                <svg
                  key={i}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  className="fill-[#00b67a]"
                >
                  <path d="M10 0l2.5 7.5h7.5l-6 4.5 2.5 7.5-6-4.5-6 4.5 2.5-7.5-6-4.5h7.5z" />
                </svg>
              ))}
              <span className="relative inline-block w-5 h-5">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  className="absolute fill-gray-300"
                >
                  <path d="M10 0l2.5 7.5h7.5l-6 4.5 2.5 7.5-6-4.5-6 4.5 2.5-7.5-6-4.5h7.5z" />
                </svg>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  className="absolute left-0 top-0 fill-[#00b67a]"
                  style={{ clipPath: "inset(0 50% 0 0)" }}
                >
                  <path d="M10 0l2.5 7.5h7.5l-6 4.5 2.5 7.5-6-4.5-6 4.5 2.5-7.5-6-4.5h7.5z" />
                </svg>
              </span>
            </div>
            <span className="text-sm font-semibold text-dark dark:text-white">
              4.5 on Trustpilot
            </span>
          </a>
        </div>

        <div className="mt-[60px] flex flex-wrap justify-center lg:mt-20 gap-y-8">
          {testimonialData.map((testimonial, i) => (
            <SingleTestimonial key={i} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
