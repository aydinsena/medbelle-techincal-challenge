import CharacterDetails from "@/app/_components/CharacterDetails";
import CharactersClient from "@/app/_components/CharactersClient";

const fetchCharacter = async (characterID: string) => {
  try {
    const response = await fetch(
      `https://fe-case-study.vercel.app/api/data/people/${characterID}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching character:", error);
    //TODO: throw error or set default value
  }
};

export default async function Character({
  params,
}: {
  params: { characterID: string };
}) {
  const character = await fetchCharacter(params.characterID);
  return (
    <div>
      <CharacterDetails character={character} />
    </div>
  );
}
