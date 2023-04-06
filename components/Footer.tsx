import { GrTwitter, GrFacebook } from "react-icons/gr";
import { RiInstagramFill } from "react-icons/ri";
const Footer = () => {
  return (
    <div className="bg-gray-800 p-6 flex w-full mx-auto space-x-8 lg:space-x-12 justify-center items-center text-orange-500">
      <GrFacebook size={32} />
      <GrTwitter size={32} />
      <RiInstagramFill size={32} />
    </div>
  );
};

export default Footer;
