import { addPlayer } from "./room.ts";

export class Player {
  public token: string;
  public roomId: string;

  constructor(public name: string, public spec: string) {
    const [roomid_, token_] = addPlayer();
    this.token = token_;
    this.roomId = roomid_;
  }
}

export const players = [] as Player[];
