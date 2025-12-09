import { Project } from "@/types/project";
import Image from "next/image";

const SingleProject = ({ project }: { project: Project }) => {
  const { icon, title, paragraph, category } = project;
  const isMobileScreenshot = title === "Rahi Seva";
  
  return (
    <div className="w-full">
      <div className="wow fadeInUp group flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:bg-gray-50 dark:bg-dark dark:hover:bg-dark-2" data-wow-delay=".1s">
        {/* Project Image */}
        <div className="relative w-full overflow-hidden h-52 flex-shrink-0">
          <Image
            src={icon}
            alt={title}
            fill
            className={`transition-transform duration-300 group-hover:scale-105 ${isMobileScreenshot ? 'object-contain bg-gray-100 dark:bg-dark-3' : 'object-cover'}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        </div>

        {/* Content Box */}
        <div className="flex flex-1 flex-col p-6">
          {/* Category Badge */}
          <div className="mb-3">
            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary transition-colors duration-300 group-hover:bg-primary/20">
              {category}
            </span>
          </div>

          {/* Title Box */}
          <div className="mb-4">
            <h4 className="text-xl font-bold text-dark transition-colors duration-300 group-hover:text-primary dark:text-white dark:group-hover:text-primary">
              {title}
            </h4>
          </div>

          {/* Description Box */}
          <div className="flex-1">
            <p className="text-body-color dark:text-dark-6 line-clamp-3">
              {paragraph}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject; 