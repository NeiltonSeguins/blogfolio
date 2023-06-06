import Image from "next/image";

const Profile = () => {
  return (
    <>
      <Image
        className="rounded-full"
        src="/foto-perfil.jpg"
        width={100}
        height={100}
        alt="Foto de perfil"
      />
      <h1 className="font-poppins text-2xl font-bold text-primary mt-3">
        Neilton Seguins
      </h1>
      <span className="font-firaCode text-xs font-normal text-secondary mt-1">
        Desenvolvedor de software
      </span>
      <p className="font-poppins text-sm font-normal text-secondary mt-6">
        Instrutor e Desenvolvedor de Software na Alura. Escrevo sobre o mundo
        front end, desenvolvimento pessoal, rotina e outras coisas do mundo dev.
        Seja muito bem vindo e espero que goste do conteúdo ;)
      </p>
    </>
  );
};

export default Profile;
