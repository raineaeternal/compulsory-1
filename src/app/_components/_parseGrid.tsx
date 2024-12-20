"use client";
import { useEffect, useState } from 'react';

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
                const params = new URLSearchParams({
                    characterId: characterId.toString(),
                    characterName: encodeURIComponent(characterName),
                    zoneRankingNumber: zoneRankingNumber.toString(),
                    zone: zone.toString()
                });

                const response = await fetch(`/api/parse?${params}`);
                const responseText = await response.text();

                // Only try to parse if we actually got some content
                if (!responseText.trim()) {
                    throw new Error('Empty response from server');
                }

                let data;
                try {
                    data = JSON.parse(responseText);
                } catch (parseError) {
                    console.error('Parse error details:', parseError);
                    throw new Error(`Failed to parse response: ${responseText.slice(0, 100)}...`);
                }

                if (!response.ok) {
                    throw new Error(data.error || 'Failed to fetch parse data');
                }

                setParse(data);
            } catch (err) {
                console.error('Fetch error:', err);
                setError(err instanceof Error ? err.message : 'Failed to fetch parse data');
            } finally {
                setLoading(false);
            }
        };
        fetchParse();
    }, [characterId, characterName, zone, zoneRankingNumber]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!parse.data) {
        return (
            <div className="w-full max-w-4xl mx-auto text-snow">
                No parse data available
            </div>
        );
    }

    return (
        <div className="w-full max-w-4xl mx-auto text-snow">
            <div className="grid grid-cols-1 gap-4 p-4">
                <div className="bg-tertiary p-4 rounded-lg">
                    <h2 className="text-lg font-semibold mb-2">{title}</h2>
                    <span className="flex flex-col">{parse.data.map((p: any) => {
                        return (
                            <div key={p.key}>
                                <h3 className=" flex flex-row: font-semibold" key={p.key}>{p.encounter.name}:</h3> {p.rankPercent}
                            </div>
                        );
                    })}</span>
                </div>
            </div>
        </div>
    );
}