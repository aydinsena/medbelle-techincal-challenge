"use client";
import React, { useState, useEffect } from "react";
import CharactersList from "./CharactersList";
import Pagination from "./Pagination";
import { Character } from "../types";

interface CharactersClientProps {
  allCharacters: Character[];
}

const CharactersClient: React.FC<CharactersClientProps> = ({
  allCharacters,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Character[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const charactersPerPage = 15;

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const term = formData.get("search") as string;
    setSearchTerm(term);
  };

  const filterCharacters = (searchTerm: string) => {
    if (searchTerm === "") {
      setSearchResults(allCharacters);
      return;
    }

    const filteredResults = allCharacters.filter((person) =>
      person.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  useEffect(() => {
    filterCharacters(searchTerm);
  }, [searchTerm, allCharacters]);

  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = searchResults.slice(
    indexOfFirstCharacter,
    indexOfLastCharacter
  );

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main className="p-4 sm:p-8 bg-black text-white min-h-screen">
      <form
        onSubmit={handleSearch}
        className="mb-4 sm:mb-8 flex flex-col sm:flex-row items-stretch"
      >
        <input
          type="text"
          name="search"
          placeholder="Search a character name..."
          className="flex-1 sm:mr-2 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-800 text-white"
        />
        <button
          type="submit"
          className="mt-2 sm:mt-0 px-4 py-2 bg-yellow-400 text-black rounded-md hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600"
        >
          Search
        </button>
      </form>
      <CharactersList searchResults={currentCharacters} />
      {searchResults.length > charactersPerPage && (
        <Pagination
          totalItems={searchResults.length}
          itemsPerPage={charactersPerPage}
          currentPage={currentPage}
          paginate={paginate}
          buttonClassName="bg-yellow-400 text-black"
          activeButtonClassName="bg-yellow-600 text-black"
        />
      )}
    </main>
  );
};

export default CharactersClient;
