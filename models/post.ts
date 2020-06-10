import { v4 } from "https://deno.land/std/uuid/mod.ts";

export class Post {
  public roomId: string;
  public userToken: string;

  constructor(public userName: string, public spec: string) {
    this.roomId = v4.generate();
    this.userToken = v4.generate();
  }
}

export const posts = [] as Post[];
