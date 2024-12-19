"use client";

import { useEffect, useState } from 'react';
import { api } from "~/trpc/server";

type ParseGridProps = {
    title: string;
    zone: number;
    characterId: number;
    characterName: string;
    zoneRankingNumber: number;
}

export default function ParseGrid({
    title,
    zone,
    characterId,
    characterName,
    zoneRankingNumber
}: ParseGridProps) {
    const [parse, setParse] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchParse = async () => {
            try {
                const response = await api.fflogs.getParse({
                    characterId: characterId,
                    name: characterName,
                    zoneRankingsDifficulty2: zoneRankingNumber,
                    metric: "rdps",
                    zoneId: zone
                });
                const rankings = response.data.characterData.character.zoneRankings.rankings;
                setParse(rankings);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to fetch parse data');
            } finally {
                setLoading(false);
            }
        };

        fetchParse();
    }, [characterId, characterName, zone, zoneRankingNumber]);

    if (loading) {
        return (
            <div className="w-full max-w-4xl mx-auto text-snow">
                <div className="grid grid-cols-1 gap-4 p-4">
                    <div className="bg-tertiary p-4 rounded-lg">
                        Loading parse data...
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="w-full max-w-4xl mx-auto text-snow">
                <div className="grid grid-cols-1 gap-4 p-4">
                    <div className="bg-tertiary p-4 rounded-lg text-red-500">
                        Error: {error}
                    </div>
                </div>
            </div>
        );
    }

    if (!parse) {
        return (
            <div className="w-full max-w-4xl mx-auto text-snow">
                <div className="grid grid-cols-1 gap-4 p-4">
                    <div className="bg-tertiary p-4 rounded-lg">
                        No parse data available
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full max-w-4xl mx-auto text-snow">
            <div className="grid grid-cols-1 gap-4 p-4">
                <div className="flex flex-col md:flex-row md:items-start md:gap-4">
                    <pre className="bg-tertiary p-4 rounded-lg overflow-x-auto w-full">
                        <h2>{title}</h2>
                        Parses for {characterName} in {zone}:
                        <span>
                            <p>{parse.encounter.name}</p>
                            <p>{parse.allStars.rank}</p>
                        </span>
                    </pre>
                </div>
            </div>
        </div>
    );
}