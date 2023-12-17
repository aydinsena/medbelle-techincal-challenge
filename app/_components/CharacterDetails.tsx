"use client";
import React from "react";
import { Character } from "../types";

interface CharacterDetailsProps {
  character: Character;
}

const CharacterDetails: React.FC<CharacterDetailsProps> = ({ character }) => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center text-white font-serif">
      <div className="max-w-4xl mx-auto p-4 sm:p-8 rounded-lg flex flex-col sm:flex-row items-center">
        <img
          src={character.image}
          alt={character.name}
          className="w-48 h-48 sm:w-80 sm:h-80 rounded-full object-cover mb-4 sm:mb-0 border-4 border-yellow-400 sm:mr-8"
        />
        <div className="text-center sm:text-left">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-2 sm:mb-4">
            {character.name}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 text-lg sm:text-xl md:text-2xl">
            <p>
              <span className="font-semibold">Birth Year:</span>{" "}
              {character.birthYear}
            </p>
            <p>
              <span className="font-semibold">Eye Color:</span>{" "}
              {character.eyeColor}
            </p>
            <p>
              <span className="font-semibold">Gender:</span> {character.gender}
            </p>
            <p>
              <span className="font-semibold">Hair Color:</span>{" "}
              {character.hairColor}
            </p>
            <p>
              <span className="font-semibold">Height:</span> {character.height}{" "}
              cm
            </p>
            <p>
              <span className="font-semibold">Mass:</span> {character.mass} kg
            </p>
            <p>
              <span className="font-semibold">Skin Color:</span>{" "}
              {character.skinColor}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
