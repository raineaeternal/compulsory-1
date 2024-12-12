import { z } from "zod";
import { publicProcedure } from "../trpc";
import { createTRPCRouter } from "../trpc";

async function getFFLogsBearerToken() {
  const response = await fetch("https://www.fflogs.com/oauth/token", {
    method: "POST",
    headers: {
      Authorization: "Basic " + btoa(`${process.env.FFLOGS_CLIENT_ID}:${process.env.FFLOGS_CLIENT_SECRET}`),
    },
    body: new URLSearchParams({
      grant_type: "client_credentials",
    }),
  });
  const data = await response.json();
  return data.access_token;
}

export const fflogsRouter = createTRPCRouter({
    fflogs: publicProcedure
    .input(
      z.object({
        characterId: z.number(),
        name: z.string(),
        zoneRankingsDifficulty2: z.number(),
        metric: z.enum(["dps", "rdps", "ndps", "adps", "cdps"]),
        zoneId: z.number()
      })
    )
    .query(async ({ input }) => {
      const token: string = await getFFLogsBearerToken();
      const query = `
        query Query($characterId: Int, $name: String,  $zoneRankingsDifficulty2: Int,  $metric: CharacterRankingMetricType,  $zoneId: Int) {
            characterData {
                character(id: $characterId, name: $name) {
                name
                zoneRankings(difficulty: $zoneRankingsDifficulty2, metric: $metric, zoneID: $zoneId)
                }
            }
        }
      `;

      const response = await fetch('https://www.fflogs.com/api/v2/client', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          query,
          variables: {...input},
        }),
      });

      const data = await response.json();
      return data;
    }),
})
