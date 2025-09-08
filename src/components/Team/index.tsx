import { TeamType } from "@/types/team";
import SectionTitle from "../Common/SectionTitle";
import SingleTeam from "./SingleTeam";

const teamData: TeamType[] = [
  {
    id: 1,
    name: "Kushagra Agarwal",
    designation: "Founder & CEO",
    image: "/images/team/kushagra.png",
    linkedinLink: "https://www.linkedin.com/in/codewithkushagra/",
  },
  {
    id: 2,
    name: "Manas Dewari",
    designation: "Co-Founder",
    image: "/images/team/manas.jpeg",
    linkedinLink: "https://www.linkedin.com/in/manas-dewari/",
  },
  {
    id: 3,
    name: "Apurv Shashvat",
    designation: "AI Engineer",
    image: "/images/team/apurv.jpeg",
    linkedinLink: "https://www.linkedin.com/in/apurv-s-023564269/",
  },
  {
    id: 4,
    name: "Shashank Kumar",
    designation: "AI Engineer",
    image: "/images/team/shashank.jpeg",
    linkedinLink: "https://www.linkedin.com/in/shashank-kumar-4b6a80206/",
  },
  {
    id: 5,
    name: "Malay Dewari",
    designation: "Full-Stack Engineer",
    image: "/images/team/malay.jpeg",
    linkedinLink: "https://www.linkedin.com/in/malay-dewari/",
  },
];

const Team = () => {
  return (
    <section
      id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Our Team"
            title="Meet Our Team"
            paragraph="Led by visionary leadership and driven by innovation, our team brings together expertise in AI, software development, and business strategy to deliver transformative solutions."
            width="640px"
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {teamData.map((team, i) => (
            <SingleTeam key={i} team={team} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
