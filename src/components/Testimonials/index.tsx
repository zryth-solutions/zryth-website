import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";

const testimonialData = [
  {
    id: 1,
    name: "Utkarsh Agarwal",
    designation: "Client from India",
    content:
      "We made our first project with them and it is wonderful. They understood our needs and developed a tailor made solution for us. Their team is extremely competent and skilled. Looking forward to doing more business with them.",
    image: "/images/testimonials/author-01.png",
  },
  {
    id: 2,
    name: "Shri R & A Enterprises",
    designation: "Client from India",
    content:
      "Best work ever! The team at Zryth delivered exceptional results that exceeded our expectations. Highly professional and skilled developers.",
    image: "/images/testimonials/author-02.png",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-gray-1 py-20 dark:bg-dark-2 md:py-[120px]">
      <div className="container px-4">
        <SectionTitle
          subtitle="Testimonials"
          title="What Our Clients Say"
          paragraph="Real feedback from our clients about their experience working with us."
          width="640px"
          center
        />

        <div className="mt-[60px] flex flex-wrap justify-center lg:mt-20 gap-y-8">
          {testimonialData.map((testimonial) => (
            <div key={testimonial.id} className="w-full px-4 md:w-1/2 lg:w-1/2">
              <div className="flex h-full flex-col rounded-xl bg-white px-4 py-[30px] shadow-testimonial dark:bg-dark sm:px-[30px]">
                <p className="mb-6 flex-grow text-base text-body-color dark:text-dark-6">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <div className="h-[50px] w-[50px] overflow-hidden rounded-full">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-dark dark:text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-body-secondary text-xs">{testimonial.designation}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
