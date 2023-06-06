import React from "react";
import Button from "../Button/Button";
import { FiSearch } from "react-icons/fi";

const Search = () => {
  return (
    <div className="relative w-96">
      <input
        type="text"
        className="border border-primary rounded-full font-poppins text-base text-primary py-2 pl-8 pr-4 w-full focus:outline-none bg-transparent placeholder:font-poppins placeholder:text-sm placeholder:italic"
        placeholder="Faça uma busca"
      />
      <Button className="text-lg text-primary absolute right-4 top-3">
        <FiSearch />
      </Button>
    </div>
  );
};

export default Search;
