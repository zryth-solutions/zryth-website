import { NewsletterItem as NewsletterItemType } from "@/types/newsletter";
import { ReactNode } from "react";

const NewsletterItem = ({ item }: { item: NewsletterItemType }) => {
  // Function to convert markdown-style links [text](url) to clickable links
  const renderContentWithLinks = (content: string) => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts: (string | ReactNode)[] = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(content)) !== null) {
      // Add text before the link
      if (match.index > lastIndex) {
        parts.push(content.substring(lastIndex, match.index));
      }
      
      // Add the link
      parts.push(
        <a
          key={match.index}
          href={match[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline hover:text-primary/80"
        >
          {match[1]}
        </a>
      );
      
      lastIndex = match.index + match[0].length;
    }
    
    // Add remaining text
    if (lastIndex < content.length) {
      parts.push(content.substring(lastIndex));
    }
    
    return parts.length > 0 ? parts : content;
  };

  return (
    <div className="mb-5">
      <h3 className="mb-1.5 text-sm font-bold text-dark dark:text-white">
        {item.title}
      </h3>
      <p className="text-sm leading-relaxed text-body-color dark:text-dark-6">
        {renderContentWithLinks(item.content)}
      </p>
    </div>
  );
};

export default NewsletterItem;
