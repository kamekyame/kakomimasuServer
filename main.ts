import {
  createApp,
} from "https://servestjs.org/@v1.0.0/mod.ts";

import { routes } from "./router.ts";

const app = createApp();
app.route("/", routes());
app.listen({ port: 8888 });

//実行コマンド
// curl --request POST --url http://localhost:8888/match --header "Content-Type: application/json" --data "{\"userName\":\"SuzuTomo\",\"spec\":\"people\"}" -v
