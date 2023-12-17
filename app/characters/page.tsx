// pages/characters.tsx (Server-side component)
import React from "react";
import CharactersClient from "../_components/CharactersClient";

const fetchAllCharacters = async () => {
  try {
    const response = await fetch(
      "https://fe-case-study.vercel.app/api/data/people"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

const Characters = async () => {
  const allCharacters = await fetchAllCharacters();
  return <CharactersClient allCharacters={allCharacters} />;
};

export default Characters;
