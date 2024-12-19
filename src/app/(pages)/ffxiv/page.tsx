import Link from "next/link";
import Hero from "~/app/_components/_hero";
import ParseGrid from "~/app/_components/_parseGrid";

export default async function FFXIV() {
  return (
    <div>
      <Hero className="flex flex-col">
        <div>
          <h1 className="text-2xl">What is FFXIV, actually?</h1><br />
          <span>
            Final Fantasy 14 (Stylized FFXIV) is a free-to-play, massively multiplayer online role-playing game (MMORPG) developed and published by Square Enix. It is the successor to the 2002 MMORG Final Fantasy 11 (FFXI).
          </span>
        </div>
      </Hero>

      <Link href="https://www.fflogs.com/character/id/20554285" target="_blank" rel="noopener noreferrer">
        <h2>
          Arcadion Savage
        </h2>
      </Link>
      <ParseGrid title="Arcadion Savage" characterId={20554285} characterName="Raine Aeternal" zone={64} zoneRankingNumber={101} />
    </div>
  );
}