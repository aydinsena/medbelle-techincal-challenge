"use client";
import React from "react";
import Link from "next/link";
import { Character } from "../types";

interface CharactersListProps {
  searchResults: Character[];
}

const CharactersList: React.FC<CharactersListProps> = ({ searchResults }) => {
  const renderCharacterCards = (character: Character) => (
    <li key={character.id} className="mb-4 sm:mb-8">
      <Link
        href={`/characters/${character.id}`}
        className="block rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
      >
        <div className="relative aspect-w-4 aspect-h-5">
          <img
            src={character.image}
            alt={character.name}
            className="object-cover w-full h-full rounded-t-lg sm:rounded-lg"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 py-2 px-4 text-white text-center">
            <h2 className="text-base sm:text-lg font-semibold">
              {character.name}
            </h2>
          </div>
        </div>
      </Link>
    </li>
  );

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
      {searchResults.map((person) => (
        <React.Fragment key={person.id}>
          {renderCharacterCards(person)}
        </React.Fragment>
      ))}
    </ul>
  );
};

export default CharactersList;
