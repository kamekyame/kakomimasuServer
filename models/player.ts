import { addPlayer } from "./room.ts";

export class Player {
  public playerToken: string;
  public roomId: string;

  constructor(public playerName: string, public spec: string) {
    const [roomid_, token_] = addPlayer();
    this.playerToken = token_;
    this.roomId = roomid_;
  }
}

export const players = [] as Player[];
