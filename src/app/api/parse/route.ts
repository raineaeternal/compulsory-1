import { api } from "~/trpc/server";
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    try {
        const url = new URL(request.url);
        console.log('Incoming request URL:', request.url);
        console.log('Search params:', Object.fromEntries(url.searchParams));

        const characterId = url.searchParams.get('characterId');
        const encodedCharacterName = url.searchParams.get('characterName');
        const zoneRankingNumber = url.searchParams.get('zoneRankingNumber');
        const zone = url.searchParams.get('zone');

        if (!encodedCharacterName) {
            console.log('Missing character name');
            return NextResponse.json({ error: 'Character name is required' }, { status: 400 });
        }

        const characterName = decodeURIComponent(encodedCharacterName);

        const response = await api.fflogs.getParse({
            characterId: Number(characterId),
            name: characterName,
            zoneRankingsDifficulty2: Number(zoneRankingNumber),
            metric: "rdps",
            zoneId: Number(zone)
        });

        const responseData = {
            success: true,
            data: response.data.characterData.character.zoneRankings.rankings
        };

        return NextResponse.json(responseData);
    } catch (error) {
        console.error('API route error:', error);
        return NextResponse.json({
            error: error instanceof Error ? error.message : 'Failed to fetch parse data',
            errorDetails: error
        }, { status: 500 });
    }
}