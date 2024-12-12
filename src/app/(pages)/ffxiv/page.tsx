import { api } from "~/trpc/server";

export default async function FFXIV() {
  const fflogsData = await api.fflogs.fflogs({
    characterId: 20554285,
    name: "Raine Aeternal",
    zoneRankingsDifficulty2: 101,
    metric: "rdps",
    zoneId: 64
  });

  const rankings = fflogsData.data.characterData.character.zoneRankings.rankings;

  return (
    <>
    <div className="text-white mx-auto ibm-plex-mono-bold items-center">
      <ul>
        {rankings.map((fight, index) => {
            <li key={index}>
                {fight.encounter.name}: ({parseInt(fight.rankPercent)}%)
            </li>
        })}
      </ul>

    </div>
    </>
  );
}