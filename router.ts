import {
  createRouter,
  contentTypeFilter,
} from "https://servestjs.org/@v1.0.0/mod.ts";
import {
  matchPost,
} from "./controllers/postController.ts";

export const routes = () => {
  const router = createRouter();

  router.post("match", contentTypeFilter("application/json"), matchPost);

  return router;
};
