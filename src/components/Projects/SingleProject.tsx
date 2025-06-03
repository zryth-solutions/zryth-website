import { Project } from "@/types/project";

const SingleProject = ({ project }: { project: Project }) => {
  const { icon, title, paragraph, category } = project;
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="wow fadeInUp group mb-12" data-wow-delay=".1s">
        <div className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary">
          <span className="absolute left-0 top-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span>
          {icon}
        </div>
        <h4 className="mb-3 text-xl font-bold text-dark dark:text-white">
          {title}
        </h4>
        <p className="mb-3 text-sm font-medium text-primary">
          {category}
        </p>
        <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-9">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleProject; 