import { FiGithub, FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi";
import Link from "next/link";

const SocialNetwork = () => {
  return (
    <div className="flex items-center justify-evenly text-primary text-lg w-full mt-8 cursor-pointer">
      <Link href="https://github.com/NeiltonSeguins" passHref>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-hover"
        >
          <FiGithub />
        </a>
      </Link>
      <Link href="https://www.instagram.com/neilton_seguins/?hl=en" passHref>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-hover"
        >
          <FiInstagram />
        </a>
      </Link>
      <Link href="https://twitter.com/SeguinsNeilton" passHref>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-hover"
        >
          <FiTwitter />
        </a>
      </Link>
      <Link href="https://www.linkedin.com/in/ne%C3%ADlton-seguins/" passHref>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-hover"
        >
          <FiLinkedin />
        </a>
      </Link>
    </div>
  );
};

export default SocialNetwork;
