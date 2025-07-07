import Image from "next/image";
import Link from "next/link";
import { Client } from "@/types/client";

const SingleClient = ({ client }: { client: Client }) => {
  const { title, link, logo, logoWhite } = client;
  return (
    <div className="ud-single-logo flex-shrink-0 mx-8">
      <Link href={link} target="_blank" rel="nofollow noopner">
        <Image
          src={logo}
          alt={title}
          className="dark:hidden"
          width={140}
          height={40}
        />
        <Image
          src={logoWhite}
          alt={title}
          className="hidden dark:block"
          width={140}
          height={40}
        />
      </Link>
    </div>
  );
};

export default SingleClient;
