import Link from "next/link";

const Menu = () => {
  return (
    <nav className="flex flex-col gap-3 text-primary font-poppins text-base text-center">
      <Link href="/">
        <a className="hover:text-hover">Home</a>
      </Link>
      <Link href="/">
        <a href="#" className="hover:text-hover">
          Sobre mim
        </a>
      </Link>
      <Link href="/">
        <a href="#" className="hover:text-hover">
          Projetos
        </a>
      </Link>
      <Link href="/">
        <a href="#" className="hover:text-hover">
          Cursos
        </a>
      </Link>
    </nav>
  );
};

export default Menu;
