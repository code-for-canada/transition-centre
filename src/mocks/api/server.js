import { Server, Response } from "miragejs";
import plan_items from './responses/plan_items'

export function makeServer(environment = "development") {
  let server = new Server({
    environment,

    routes() {
      this.namespace = "api";

      this.get('/plan/plan_items', () => {
        return new Response(200, {}, plan_items)
      });
    },
  });

  return server;
}
