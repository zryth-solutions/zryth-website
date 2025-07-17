import Breadcrumb from "@/components/Common/Breadcrumb";
import { generateAuthMetadata } from "@/utils/metadata";

export const metadata = generateAuthMetadata('error');

const ErrorPage = () => {
  return (
    <>
      <Breadcrumb pageName="Error Page" />
    </>
  );
};

export default ErrorPage;
