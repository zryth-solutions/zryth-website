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
    name: "Malay Dewari",
    designation: "Full-Stack Engineer",
    image: "/images/team/malay.jpeg",
    linkedinLink: "https://www.linkedin.com/in/malay-dewari/",
  },
  {
    id: 4,
    name: "Apurv Shashvat",
    designation: "AI Engineer",
    image: "/images/team/apurv.jpeg",
    linkedinLink: "https://www.linkedin.com/in/apurv-s-023564269/",
  },
  {
    id: 5,
    name: "Shashank Kumar",
    designation: "AI Engineer",
    image: "/images/team/shashank.jpeg",
    linkedinLink: "https://www.linkedin.com/in/shashank-kumar-4b6a80206/",
  },
  {
    id: 6,
    name: "Devansh Sharma",
    designation: "AI Engineer",
    image: "https://i.postimg.cc/WzVRj0vP/dewansh.png",
    linkedinLink: "https://www.linkedin.com/in/adawatia/",
  },
  {
    id: 7,
    name: "Himanshu Shekhar",
    designation: "AI Engineer",
    image: "https://i.postimg.cc/5ysLTR6p/arjun.jpg",
    linkedinLink: "https://www.linkedin.com/in/himanshu-shekhar-406975218/",
  },
  {
    id: 8,
    name: "Aditya Kumar Jaiswal",
    designation: "Quality Assurance Engineer",
    image: "https://i.postimg.cc/5yJc18MT/aditya.jpg",
    linkedinLink: "https://www.linkedin.com/in/aditya-kumar-jaiswal-4a986b257/",
  },
  {
    id: 9,
    name: "Amit Kumar",
    designation: "full stack developer",
    image: "https://i.postimg.cc/QtB380bq/Whats-App-Image-2025-12-08-at-11-44-11-modified.png",
    linkedinLink: "https://www.linkedin.com/in/amitkr79/",
  },
  {
    id: 10,
    name: "RISHAV SISODIYA",
    designation: "Full stack developer",
    image: "https://i.postimg.cc/MKcL4sRd/rishabhi.jpg",
    linkedinLink: "https://www.linkedin.com/in/rishav-sisodiya-a64633294/",
  },
  {
    id: 11,
    name: "Tanaya Pawar",
    designation: "UI/UX Designer",
    image: "https://i.postimg.cc/fWS97qp5/IMG-0081-modified.png",
    linkedinLink: "https://www.linkedin.com/in/tanayapawar12/",
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
