import { NewsletterItem as NewsletterItemType } from "@/types/newsletter";

const NewsletterItem = ({ item }: { item: NewsletterItemType }) => {
  return (
    <div className="mb-5">
      <h3 className="mb-1.5 text-sm font-bold text-dark dark:text-white">
        {item.title}
      </h3>
      <p className="text-sm leading-relaxed text-body-color dark:text-dark-6">
        {item.content}
      </p>
    </div>
  );
};

export default NewsletterItem;
