import { FiGithub, FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi";

const SocialNetwork = () => {
  return (
    <div className="flex items-center justify-evenly text-primary text-lg w-full mt-8 cursor-pointer">
      <a href="#" className="hover:text-hover">
        <FiGithub />
      </a>
      <a href="#" className="hover:text-hover">
        <FiInstagram />
      </a>
      <a href="#" className="hover:text-hover">
        <FiTwitter />
      </a>
      <a href="#" className="hover:text-hover">
        <FiLinkedin />
      </a>
    </div>
  );
};

export default SocialNetwork;
