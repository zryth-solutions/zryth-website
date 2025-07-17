import Breadcrumb from "@/components/Common/Breadcrumb";
import { generateAuthMetadata } from "@/utils/metadata";

export const metadata = generateAuthMetadata('notFound');

const ErrorPage = () => {
  return (
    <>
      <Breadcrumb pageName="404 Page" />
    </>
  );
};

export default ErrorPage;
