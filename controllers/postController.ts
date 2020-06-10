import {
  ServerRequest,
} from "https://servestjs.org/@v1.0.0/mod.ts";
import { Player, players } from "../models/player.ts";

type PlayerInfo = {
  playerName: string;
  spec: string;
};

export const matchPost = async (req: ServerRequest) => {
  console.log(req);
  const bodyJson = (await req.json()) as PlayerInfo;
  const player = new Player(bodyJson.playerName, bodyJson.spec);
  players.push(player);

  await req.respond({
    status: 200,
    headers: new Headers({
      "content-type": "application/json",
    }),
    body: JSON.stringify(player),
  });
};
