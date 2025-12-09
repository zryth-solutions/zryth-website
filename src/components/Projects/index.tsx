import SectionTitle from "../Common/SectionTitle";
import SingleProject from "./SingleProject";
import projectsData from "./projectsData";

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-1 pb-8 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]">
      <div className="container">
        <SectionTitle
          subtitle="Our Portfolio"
          title="Successful Projects Delivered"
          paragraph="Explore our diverse portfolio of AI-powered software solutions that have transformed businesses across various industries. From intelligent booking systems to advanced CRM platforms, each project showcases our commitment to innovation and excellence."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-8">
          {projectsData.slice(0, 9).map((project, i) => (
            <SingleProject key={i} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
