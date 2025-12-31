import { ImportantTech } from "@/types/newsletter";

const ImportantTechCard = ({ tech }: { tech: ImportantTech }) => {
  return (
    <div className="wow fadeInUp group rounded-lg border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-primary hover:shadow-md dark:border-dark-4 dark:bg-dark dark:hover:border-primary">
      <h4 className="mb-3 text-lg font-bold text-dark dark:text-white">
        {tech.title}
      </h4>
      <p className="text-sm leading-relaxed text-body-color dark:text-dark-6">
        {tech.description}
      </p>
    </div>
  );
};

export default ImportantTechCard;

