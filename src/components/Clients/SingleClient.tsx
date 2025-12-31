import Image from "next/image";
import Link from "next/link";
import { Client } from "@/types/client";

const SingleClient = ({ client }: { client: Client }) => {
  const { title, link, logo, logoWhite, showTextWithLogo } = client;
  
  return (
    <div className="ud-single-logo flex-shrink-0 mx-4 sm:mx-8">
      <Link href={link} target="_blank" rel="nofollow noopner">
        {showTextWithLogo ? (
          // Logo + Text Layout (for clients like Agra Rollers, Triwize, Oswaal, Dimple Collection)
          <div className="flex items-center gap-3 h-[200px]">
            <Image
              src={logo}
              alt={title}
              className="dark:hidden"
              width={75}
              height={75}
            />
            <Image
              src={logoWhite}
              alt={title}
              className="hidden dark:block"
              width={60}
              height={60}
            />
            <span className="text-lg font-semibold text-dark dark:text-white whitespace-nowrap">
              {title}
            </span>
          </div>
        ) : (
          // Logo Only Layout (default)
          <>
            <Image
              src={logo}
              alt={title}
              className="dark:hidden"
              width={200}
              height={60}
            />
            <Image
              src={logoWhite}
              alt={title}
              className="hidden dark:block"
              width={200}
              height={60}
            />
          </>
        )}
      </Link>
    </div>
  );
};

export default SingleClient;
